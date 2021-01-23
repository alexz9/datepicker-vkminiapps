function toDate(arg){
  const argStr = Object.prototype.toString.call(arg);
  
  // если аргумент объект даты, возвращаем её клон
  if(arg instanceof Date || argStr === '[object Date]') return new Date(arg.getTime());

  // если аргумент число, принимаем его за unixtime (миллисекунды) и возвращаем объект даты
  if(typeof arg === 'number' || argStr === '[object Number]') return new Date(arg);
  
  return new Date(NaN);
}

export default toDate;