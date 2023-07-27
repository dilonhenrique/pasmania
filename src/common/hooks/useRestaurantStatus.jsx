import { useMenuContext } from '@/common/context/menu';
import usePeriodFromDate from './usePeriodFromDate';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export default function useRestaurantStatus() {
  const data = dayjs();
  const status = usePeriodFromDate(data);

  let isOpen, nextEvent = {};

  status.openPeriod.forEach(periodo => {
    if (isOpen !== undefined) return;

    const openTime = dayjs(`${data.format('YYYY-MM-DD')}T${periodo.openTime}`);
    const closeTime = dayjs(`${data.format('YYYY-MM-DD')}T${periodo.closeTime}`);

    if (data.isBetween(openTime, closeTime, 'second')) {
      isOpen = true;
      nextEvent = {
        time: periodo.closeTime
      }
    } else if (data.isBefore(openTime)) {
      isOpen = false;
      nextEvent = {
        day: data.day(),
        time: periodo.openTime,
      }
    }
  })

  if (isOpen === undefined) {
    const newData = dayjs(data).add(1,'day');
    const newStatus = usePeriodFromDate(newData);
    
    isOpen = false;
    nextEvent = {
      day: newData.day(),
      time: newStatus.openPeriod[0].openTime,
    }
  }

  return {
    isOpen,
    nextEvent
  };
}