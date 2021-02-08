function toDate(arg){
  const argStr = Object.prototype.toString.call(arg);
  
  // если аргумент объект даты, возвращаем её клон
  if(arg instanceof Date || argStr === '[object Date]') return new Date(arg.getTime());

  // если аргумент число, принимаем его за unixtime (секунды приводит к миллисекундам) и возвращаем объект даты
  if(typeof arg === 'number' || argStr === '[object Number]'){
    let date = arg;
    if(date.toString().length <= 10) date *= 1000;
    return new Date(date);
  }

  // если аргумент строка вида dd.mm.yyyy
  if(typeof arg === 'string'){
    const d = arg.split('.');
    if(d.length === 3 && d[2].length === 4){
      return new Date(Number(d[2]), Number(d[1]) - 1, Number(d[0]));
    }
  }
  
  return new Date(NaN);
}

export default toDate;