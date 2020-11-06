"use strict";
/*  */
const str = `test`;
const arr = [1, 2, 3];

console.log(arr.length);
/*  */
const str1 = `test`;
const arr1 = [1, 2, 3];

console.log(str1[2]);

/*  */
const str2 = `test`;

console.log(str2.toUpperCase());
console.log(str2);

/* Поиск с под строки */
const fruit = `Some fruit`;

console.log(fruit.indexOf(`r`));

/*  */
const logg = `Hello World!`;

console.log(logg.slice(6, 11));

const cost = `1200$ for this thing`;

console.log(cost.slice(4, 13));

/*  */
const game = `Spend time`;

console.log(game.substring(0, 5));

/* Первый аргумент - номер по порядку, второй - количество символох которые надо вырезать  */
const summer = `tempricher of the day`;

console.log(summer.substr(0, 10));


/* Методы к ЧИСЛАМ */

/* Округление к ближайшему целому  */
const num = 12.2;

console.log(Math.round(num));

/* Переводим в другую систему счисления (строку превращает в числовой тип данных) */
const test = `12.2px`;

console.log(parseInt(test));

/* Переводит в десетичную систему счисления */
const test2 = `12.2px`;

console.log(parseFloat(test2));
