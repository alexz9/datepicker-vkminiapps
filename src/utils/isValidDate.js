import toDate from './toDate';

/* функция возвращает true в случае аргумента в виде объекта Date или числа, иначе false */
function isValid(arg){
  return !isNaN(toDate(arg));
}

export default isValid;