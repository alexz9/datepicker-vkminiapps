export default function getCalendar(step, startRange, endRange) {
  const nowDate = new Date();
  nowDate.setHours(0, 0, 0, 0);

  if(!isFinite(step)) step = nowDate.getMonth();

  let viewDate = new Date();

  viewDate.setMonth(step, 1);  
  viewDate.setHours(0, 0, 0, 0);

  const viewYear = viewDate.getFullYear(),
    viewMonth = viewDate.getMonth();

  let lastDayInMonth = new Date(viewYear, viewMonth + 1, 0).getDate(),
    beginInWeek = new Date(viewYear, viewMonth, 1).getDay();
  if(beginInWeek === 0) beginInWeek = 7;

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
      isToday: (nowDate.getTime() === unixtime)
    });      
    
  }

  return {
    days: days,
    month: viewMonth,
    year: viewYear
  }
}