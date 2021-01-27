// аргумент date ожидается как Objeсt Date
function dateToString(date) {
  let d = new Date(date.getTime());

  let data = {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate()
  };

  for (let item in data) if (data[item] < 10) data[item] = "0" + data[item];

  return `${data.day}.${data.month}.${data.year}`;
}

export default dateToString;