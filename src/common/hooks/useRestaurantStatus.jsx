import { useMenuContext } from '@/common/context/menu';
import createOpenDays from '@/common/functions/createOpenDaysObj';

export default function useRestaurantStatus() {
  const { menu } = useMenuContext();
  const hoje = new Date();
  const openDays = createOpenDays(menu.weekDeliveryStore);
  
  return isRestaurantOpen(openDays, hoje);
}

function isRestaurantOpen(openDays, data = new Date()) {
  const [agora] = data.toTimeString().split(' ');
  const [aH, aM, aS] = agora.split(':');
  const weekDay = data.getDay();

  let isOpen;
  let nextEvent = {};

  if (openDays[weekDay]) {
    openDays[weekDay].openPeriod.forEach(periodo => {
      if (isOpen !== undefined) return;

      const [oH, oM, oS] = periodo.openTime.split(':');
      const [cH, cM, cS] = periodo.closeTime.split(':');

      const moreThanOpen = aH > oH || (aH === oH && aM > oM || (aM === oM && aS >= oS));
      const lessThenClosed = aH < cH || (aH === cH && aM < cM || (aM === cM && aS <= cS));

      if (moreThanOpen && lessThenClosed) {
        isOpen = true;
        nextEvent = {
          time: periodo.closeTime
        }
      } else {
        //restaurante fechado
        if (!moreThanOpen) {
          isOpen = false;
          nextEvent = {
            time: periodo.openTime
          }
        }
      }
    })
  }

  if (isOpen === undefined) {
    const newWeekDay = openDays[weekDay + 1] ? weekDay + 1 : 0;
    nextEvent = {
      day: newWeekDay,
      time: openDays[newWeekDay]?.openPeriod[0].openTime
    }
  }

  return {
    isOpen,
    nextEvent
  };
}