export default function getCalendar(month, startUnixtime, endUnixtime) {
  console.log(month, startUnixtime, endUnixtime);

  const nowDate = new Date(),
    nowYear = nowDate.getFullYear(),
    nowMonth = nowDate.getMonth(),
    today = nowDate.getDate();

  const viewDate = new Date(),
    viewYear = viewDate.getFullYear(),
    viewMonth = viewDate.getMonth();

  const lastDayInMonth = new Date(viewYear, viewMonth + 1, 0).getDate(),
    beginInWeek = new Date(viewYear, viewMonth, 1).getDay();

  const rangeStartDay = (nowYear === viewYear && nowMonth === viewMonth && startUnixtime) ? new Date(startUnixtime * 1000).getDate() : 0,
    rangeEndDay = (nowYear === viewYear && nowMonth === viewMonth && endUnixtime) ? new Date(endUnixtime * 1000).getDate() : 0;

  let days = [];
  for (let i = 1; i < lastDayInMonth + beginInWeek; i++) {
    if (i < beginInWeek) {
      days.push({ passive: true });
      continue;
    } 
    let val = i - beginInWeek + 1;

    days.push({
      value: val,
      status: rangeStartDay === val ? 'start' : rangeEndDay === val ? 'end' : rangeStartDay < val && rangeEndDay > val ? 'inRange' : 'notSelected',
      isToday: (nowYear === viewYear && nowMonth === viewMonth && today === val)
    });     
  }
  console.log(days);
  return {
    days: days,
    month: viewMonth
  }
}