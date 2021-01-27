export default function getCalendar(step, startRange, endRange) {
  console.log(step, startRange, endRange);

  const nowDate = new Date(),
    nowMonth = nowDate.getMonth();

  const viewDate = new Date();
  viewDate.setHours(0, 0, 0, 0);
  viewDate.setMonth(nowMonth + step);

  const viewYear = viewDate.getFullYear(),
    viewMonth = viewDate.getMonth();

  const lastDayInMonth = new Date(viewYear, viewMonth + 1, 0).getDate(),
    beginInWeek = new Date(viewYear, viewMonth, 1).getDay();

  let days = [];
  for (let i = 1; i < lastDayInMonth + beginInWeek; i++) {    
    
    if (i < beginInWeek) {
      days.push({ passive: true });
      continue;
    } 

    let val = i - beginInWeek + 1,
      unixtime = new Date(viewYear, viewMonth, val).getTime(),
      start = startRange ? startRange.getTime() : 0,
      end = endRange ? endRange.getTime() : 0;

    days.push({
      value: val,
      status: start === unixtime ? 'start' : end === unixtime ? 'end' : start < unixtime && end > unixtime ? 'inRange' : 'notSelected',
      isToday: (viewDate.getTime() === unixtime)
    });      
    
  }

  return {
    days: days,
    month: viewMonth,
    year: viewYear
  }
}