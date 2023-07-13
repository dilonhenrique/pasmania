export default function createOpenDays(oldObj) {
  const openDays = [];

  oldObj?.forEach((periodo, index) => {
    periodo.day.forEach(dia => {
      if (openDays[dia - 1] === undefined) openDays[dia - 1] = { openPeriod: [] };
      openDays[dia - 1].openPeriod.push({
        openTime: periodo.openTime,
        closeTime: periodo.closeTime,
      })
      openDays[dia - 1].dayName = oldObj[index].weekDay[dia-1];
    })
  })

  return openDays;
}