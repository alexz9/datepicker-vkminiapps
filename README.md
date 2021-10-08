# Datepicker-vkminiapps

#### Календарь на React с поддержкой темной темы, выбора диапазона дат, мобильной адаптацией.
Особенность в том, что он автоматически меняет внешний вид под тему официального приложения ВКонтакте, если вы используете [VKUI](https://github.com/VKCOM/VKUI/).

В ином случае тему нужно задать явно через пропс. Можно использовать и за пределами ВК без подключения каких-либо библиотек.

![](https://sun9-33.userapi.com/impg/xZCcYMxRgMgNEmLnV8J1zqSkZKkcERIcvSyjIA/URlxYgSp4A0.jpg?size=326x402&quality=96&proxy=1&sign=3de72da45fb2ce07156bb8411f51d8fc&c_uniq_tag=wCNsgz9fe5dAakZjhxKV4tS78F5-qdp857DqI2FDWkA&type=album)![](https://sun9-13.userapi.com/impg/9IFG9B8v5Rb9OiEWen5GGef5xd7rOtoW8n3kNQ/GLywLJBpIFA.jpg?size=323x389&quality=96&proxy=1&sign=eeb77d65cea2772a3299113c98fb8079&type=album)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install datepicker-vkminiapps --save
```


```js
import React, { useState } from "react";
import { DatePicker } from "datepicker-vkminiapps";

/* Для обычного календаря */
const Example = () => {
  const [date, setDate] = useState(new Date()); // Date || dd.mm.yyyy || unixtime (ms) || unixtime (s) 
  return (
    <DatePicker 
      value={date} // можно передать null
      onChange={value => setDate(value)} 
    />
  );
};

/* Для диапазонного календаря */
const ExampleIsRange = () => {
  const range = {
    start: new Date(), // Date || dd.mm.yyyy || unixtime (ms) || unixtime (s) 
    end: new Date() // Date || dd.mm.yyyy || unixtime (ms) || unixtime (s)
  };   
  const [date, setDate] = useState(range); 
  return (
    <DatePicker 
      value={date} // можно передать null
      onChange={value => setDate(value)} 
      isRange={true}
    />
  );
};
```
## Configuration

Обязательно:
```js
<DatePicker value={date} onChange={value => setDate(value)} />
```

#### Props

|Prop name|Description|Default value|Example values|
|----|----|----|----|
|isMobi|Адаптация под смартфон|false|true|
|isRange|Режим выбора диапазона|false|true|
|theme|Цветовая тема|"light"|"light", "dark"|
|hasInfinity|Бессрочно вместо отменить|false|true|

hasInfinity работает при выборе диапазонного режима и предоставляет вместо кнопки "Отменить" кнопку "Бессрочно". По клику на неё в функцию onChange будет передан null.

## test

## License

The MIT License.

