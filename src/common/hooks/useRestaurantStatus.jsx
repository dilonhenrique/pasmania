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

  const holiday = isHoliday(data);
  const keyDay = holiday.is ? 7 : weekDay;

  let isOpen;
  let nextEvent = {};

  if (openDays[keyDay]) {
    openDays[keyDay].openPeriod.forEach(periodo => {
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
            day: weekDay,
            time: periodo.openTime,
          }
        }
      }
    })
  }

  if (isOpen === undefined) {
    const newWeekDay = weekDay < 6 ? weekDay + 1 : 0;
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

function isHoliday(date) {
  const { menu } = useMenuContext();

  let isDateHoliday = { is: false };

  menu.holidays.forEach(holiday => {
    const holidate = new Date(holiday.date);

    if (holidate.toDateString() === date.toDateString()) {
      isDateHoliday = {
        is: true,
        open: holiday.open,
      }
    }
  })

  return isDateHoliday;
}