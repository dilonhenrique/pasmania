import { useMenuContext } from "../context/menu";
import createOpenDays from "../functions/createOpenDaysObj";
import dayjs from 'dayjs';

export default function usePeriodFromDate(data) {
  const { menu } = useMenuContext();
  const openDays = createOpenDays(menu.weekDeliveryStore);
  
  if (!data) return openDays;

  let retorno;
  menu.holidays.forEach(holiday => {
    if(dayjs(holiday.date).isSame(data,'day')){
      if(holiday.open){
        retorno = {
          willOpen: true,
          openPeriod: [...openDays[7].openPeriod],
        }
      } else {
        retorno = {
          willOpen: false,
        }
      }
    }
  })

  if(retorno === undefined){
    retorno = {
      willOpen: true,
      openPeriod: [...openDays[data.day()].openPeriod],
    }
  }
  
  return retorno;
}