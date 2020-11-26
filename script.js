'use strict'

/*
let func = (arg1, arg2, argx) => {
  return arg1 + arg2 * argx;
}

console.log(func(2, 4, 8));

let func1 = a => {
  return a * a * a * a;
}

console.log(func1(6));

let gg = () => {
  return 1 + 2;
}

console.log(gg());

let tu = () => 55 * 55;

console.log(tu())


let gG = 666;
let maksim = 228;
let obj = {
  gG,
  maksim
};

console.log(obj)

if (`gG` in obj) {
  console.log(`His value is 228`)
} else {
  console.log(`His value is undefined`);
}

if (`maksim` in obj) {
  console.log(`His value is 666`);
} else {
  console.log(`His value is undefined`);
}

if (`gg` in obj) {
  console.log(`He has a value and this value is: ${obj.gg}`)
} else {
  console.log(`He hasn't a value:(`);
}

if (`maksim` in obj) {
  console.log(`He has a value and this value is: ${obj.maksim}`);
} else {
  console.log(`He hasn't a value:(`);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 == 1) {
    console.log(`:(`);
  } else {
    console.log(`:)`);
  }
}


for (let key in obj) {
  console.log(`This key is a ${key} with the value: ${obj[key]}`);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 == 1) {
    console.log(`:(`);
  } else {
    console.log(`:)`);
  }
}

let clone = {

};

Object.assign(clone, obj, obj);
console.log(clone);

for (let i = 0; i <= 5; i++) {
  if (i % 2 == 1) {
    console.log(`:(`);
  } else {
    console.log(`:)`);
  }
}

let object = {
  [Symbol.toPrimitive](hint) {
    if (hint == `string`) {
      return `This is a string`;
    } else if (hint == `number`) {
      return 99;
    } else {
      return true;
    }
  }
};

let symbol = Symbol(`MaksimGGMostBet`);
let obj1 = {
  [symbol]: 69,
  a: `89%`
};

obj[symbol] = 97;
for (let key in obj1) {
  console.log(key);
}


const str = `Hi world`;

console.log(str.toLowerCase());


let number = 10e-4;
let num = 10e4;
console.log(number);
console.log(num);


console.log(32894..toString(36));


console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
console.log(Math.trunc(number));
console.log(0.1 + 0.2);
console.log(0.67759.toFixed(2));
console.log(+(0.1 + 0.2).toFixed(2)));

console.log(Math.max(4, 34, 6, 7, 4, 1 56, 6));


let number = 23894.000000001;
console.log(isFinite(number));
console.log(NaN == NaN);
let value = +prompt();
console.log(isNaN(value));
console.log(Object.is(NaN, NaN));
console.log(parseInt(`1900px`));
console.log(Math.random());
console.log(Math.min(4, 5, 2, 1, 5, 7, 3, 7));
console.log(Math.pow(5, 7));
console.log(19283..toFixed(30));



console.log(stringi);
console.log(stringi.length);
console.log(stringi);

for(let i = 1000; i < 9999; i++) {
str += `\u${i}`;
}

console.log();

console.log(stringi[stringi.length - 1]);

let arr = [4, 6, 2, 6, 78, 'zdf', 'qwelrhus', 12893, 3, true];
for(let char of arr) {
console.log(char);
}
stringiUp = stringi.toUpperCase();
console.log(stringiUp);

console.log(stringi.indexOf('J', 7));

console.log(stringi.indexOf('l') == stringi.lastIndexOf('l'));

console.log(stringi.includes('Javascript'));

console.log(stringi.stratsWith('Hello'));
let stringi = 'Hello, JavaScript';



arr.push(5);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

for(let element of arr) {
console.log(element);
}


arr.splice(1, 1, 'deleted:(');
console.log(arr);


let arr = [34, 'dlfkdsmo', 234, 56, 5, 2, 5, 34, 6];

arr.forEach((item) => {
console.log(item);
});


let color = document.querySelectorAll('#color');
let html = document.documentElement;

color.onchange = function() {
  alert();
};


else if () {
return "Player 2 ";
}

const rps = (p1, p2) => {
if (p1 == "scissors" && p2 == "scissors" || p1 == "rock" && p2 == "rock" || p1 == "paper" && p2 == "paper") {
return "Draw!";
} else if (p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock" || p1 == "rock" && p2 == "scissors") {
return "Player 1 won";
} else if (p1 == "paper" && p2 == "scissors" || p1 == "rock" && p2 == "paper" || p1 == "scissors" && p2 == "scissors") {
return "Player 2 won!";
}
};

console.log(rps("scissors", "paper"));


function grow(array) {
let finGrow = 1;
for(let i = 0; i < array.length; i++) {
finGrow *= array[i];
}
return finGrow;
}


function getDivisorsCnt(num) {
  let devisior = 0;
  for(let i = 0; i <= num; i++) {
    if (num % i == 0) {
      devisior++;
    }
  }
  return devisior;
}

console.log(getDivisorsCnt(30));


function factorial(number) {
if (number > 12 || number < 0) {
return "RangeError";
}
let finalNumber = 1;
let num = number;
for(let i = 0; i <= num; i++) {
finalNumber *= num;
num--;
}
return finalNumber;
}

console.log(factorial(5));


let table = document.getElementById("age-table");
let label = table.getElementsByTagName("label");
let td1 = table.querySelector("td");
let form = document.querySelector('form[name="search"]');

let person = {
  name: "John",
  age: 30,
  "likes birds": true
};

let key = prompt("Что вы хотите узнать о пользователе?", "name");

person["likes birds"] = false;
alert(person[key]);

let user = {
  name: "govnoed",
  surname: "vitya",
  age: -5,
  mindLvl: -228666,
  dickSize: -1
};

for(let key in user) {
  console.log(key);
  console.log(user[key]);
}

let user = {};
user.name = "John",
user.surname = "Smith",
user.name = "Pete";
delete user.name;
console.log(user);

function isEmpty(obj) {
for (let key in obj) {
return false;
}
return false;
}

let salaries = {
John: 100,
Ann: 160,
Pete: 130
}

let sum = 0;
for (let key in salaries) {
sum += salaries[key];
}
console.log(sum);

let menu = {
width: 200,
height: 400,
titile: "My menu"
};

for (let key in menu) {
if (typeof menu[key] == 'number') {
menu[key] *= 2;
}
}

console.log(menu);
console.log(typeof(null));
for (var i = 0; i < 10; i++) {
console.log(i);
}

function User() { }
User.prototype = { admin: false };

let user11 = new User();
alert(user11.admin);
console.log(0 || 1 && 2 || 3);

function f() {
  let a = 5;
  return new Function('b', 'return a + b');
}

alert( f()(1) );


function arrayDiff(a, b) {
let result = [];
for(let i = 0; i < a.length; i++) {
if (!(a[i] == b[i])) {
result.push(a[i]);
}
}
for(let i = 0; i < b.length; i++) {
if (!(a[i] == b[i])) {
result.push(b[i]);
}
}
return result;
}

console.log(arrayDiff([1,2,2,2,3], [2]));
*/

// let btn1 = document.getElementById("btn1");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let div = document.querySelectorAll("div")[1];
// let ul = document.querySelector("ul");
// let btn2 = document.getElementById("btn2");
// let firstbtn = document.getElementById("firstbtn");
// let secondbtn = document.getElementById("secondbtn");
// let firstp = document.querySelector(".scrollTest #firstp");
// let secondp = document.querySelector(".scrollTest #secondp");
// let scrollArrow = document.querySelector("img");
// let table1 = document.querySelector(".table1");
// let td = document.querySelectorAll(".table1 td");
// const scrollTop = document.getElementById("scrollTop");
// const img1 = document.querySelector(".eventargslider .slides img:nth-child(1)");
// const img2 = document.querySelector(".eventargslider .slides img:nth-child(2)");
// const img3 = document.querySelector(".eventargslider .slides img:nth-child(3)");
// const img4 = document.querySelector(".eventargslider .slides img:nth-child(4)");
// const img5 = document.querySelector(".eventargslider .slides img:nth-child(5)");
// const curimg = document.querySelector(".eventargslider .currentImg");
// let currentImg = img1;
// let coords = document.getElementById('coords');
// let field = document.getElementById('field');
// let lefttop = document.getElementById('lefttop');
// let rightbottom = document.getElementById('rightbottom');

// btn1.onclick = function() {
//   ul.style.cssText = `background: url(images/ulbgimg.jpg) rgb(60, 179, 93);
//   background-position: center center;
//   background-size: cover;
//   color: rgb(23, 69, 36);
//   width: 100%;
//   border: 10px solid rgb(0, 255, 56);
//   text-align: center;
//   box-shadow: inset 0 0 3px 3px rgb(23, 97, 11);`;
// };

// btn2.onclick = function() {
//   ul.style.cssText = ``;
// };

// btn4.onclick = function() {
//   btn3.style.cssText = '';
// }

// btn3.onclick = function() {
//   div.style.cssText = `
//   background: url(images/formbg.jpg) rgb(164, 0, 0);
//   background-size: cover;
//   background-position: center center;
//   padding: 10px;
//   color: rgb(133, 21, 6);
//   line-height: 24px;
//   border: 15px solid rgb(73, 8, 8);
//   box-shadow: inset 0 0 10px 10px rgb(108, 20, 20);`;
// };

// scrollTop.onclick = function() {
//   window.scrollTo(0, 0);
// }

// secondbtn.onclick = function() {
//   window.scrollBy(0, 100);
// }

// img1.onclick = () => {
//   curimg.style.cssText = `
//   background: url(${img1.src}) no-repeat;
//   background-size: cover;
//   background-position: center center;`;
// };

// img2.onclick = () => {
//   curimg.style.cssText = `
//   background: url(${img2.src}) no-repeat;
//   background-size: cover;
//   background-position: center center;`;
// };

// img3.onclick = () => {
//   curimg.style.cssText = `
//   background: url(${img3.src}) no-repeat;
//   background-size: cover;
//   background-position: center center;`;
// };

// img4.onclick = () => {
//   curimg.style.cssText = `
//   background: url(${img4.src}) no-repeat;
//   background-size: cover;
//   background-position: center center;`;
// };

// img5.onclick = () => {
//   curimg.style.cssText = `
//   background: url(${img5.src}) no-repeat;
//   background-size: cover;
//   background-position: center center;`;
// };

// document.onclick = function(e) {
//   coords.innerHTML = `${e.clientX}:${e.clientY}`;
// }

// field.onclick = function(e) {
//   lefttop.innerHTML = `left-top corner of this field is: ${lefttop.getBoundingClientRect().x}:${lefttop.getBoundingClientRect().y}`;
//   rightbottom.innerHTML = `right-bottom corner of this field is: ${rightbottom.getBoundingClientRect().x}:${rightbottom.getBoundingClientRect().y}`;
// };


// let sym = Symbol();

// let obj = {
//   [sym]: 231
// };

// console.log(obj[sym]);

// function User(name, age, bday) {
//   console.log("Creating...", name, age, bday);
//   return {
//     name,
//     age,
//     bday,
//     [Symbol.toPrimitive]: function(hint) {
//       if (hint == 'string') {
//           return `name: ${this.name}, age: ${this.age}, birthday is: ${this.bday}`;
//       }
//       return 0;
//     }
//   };
// }

// const vitya = new User("vitya", "-12.37.-12389", "-32.-13.-228666");


// let array = [1, 2, 2, 3, 4, 5, 6, 7];
// let array1 = [8, 9, 10, 11, 12, 13, 14];
// let array2 = [15, 16, 17, 18, 19, 20, 21];

// array.forEach((elem, index) => {
//   console.log(elem, index);
// });

// array = array.concat(array1, array2);
// console.log(array.includes(22));

// let findtest = array.filter(elem => elem % 2 == 0);

// console.log(findtest);

// array = array.map(elem => {
//   return elem * Math.E;
// });

// console.log(array);


// console.log(array.sort((elem1, elem2) => {
//   if (elem1 < elem2) {
//     return -1;
//   } else if (elem1 == elem2) {
//     return 0;
//   } else if (elem1 > elem2) {
//     return 1;
//   }
// }));

// console.log(array1.sort((elem1, elem2) => {
//   if (elem1 < elem2) {
//     return -1;
//   } else if (elem1 == elem2) {
//     return 0;
//   } else if (elem1 > elem2) {
//     return 1;
//   }
// }));

// console.log(array2.sort((elem1, elem2) => {
//   if (elem1 < elem2) {
//     return -1;
//   } else if (elem1 == elem2) {
//     return 0;
//   } else if (elem1 > elem2) {
//     return 1;
//   }
// }));


// console.log(array1.reverse());

// let path = "home/Programming/JavaScript/Experiments";

// let path2 = path.split("/");

// console.log(path2);
// console.log(path2.join(", "));
// console.log(path.split("a").join("HZ"));

// function User(name, age) {
//   // const this = {};
//   this.name = name;
//   this.age = age;
//   // return this
// }

// const users = [
//   new User("Maksim", 12),
//   new User("Mahmad", 14),
//   new User("Anya", 24),
//   new User("vitya", 1),
//   new User("Matveyka", 17)
// ];

// console.log(users);

// users.forEach(function(elem) {
//   console.log(elem);
// });

// const user = users.filter(function(elem) {
//   if (elem.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const userlist = users.map((elem) => {
//   return {
//     name: elem.name,
//     age: elem.age * 2
//   };
// });

// console.log(userlist);

// console.log(Array.isArray());

// function pow(x, n) {
//   let result = 1;
//   for(let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// function pow(x, n) {
//   // 5 * 5 * 5 * 5 * 5 * pow(5, 1)
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(5, 5));


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayWho() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// let user1 = new User("Maksim", 15);

// console.log(user1.sayWho());

// let user = {
//   name: 'John',
//   age: 30,
//   'lovely eat': 'eggs'
// };

// console.log(user);

// user['lovely eat'] = 'CocaCola';

// console.log(user);

// let fruit = prompt('What does your lovely fruit?');
// let count = prompt('How many fruits do you want to add to cart?');

// let bag = {
//   [fruit]: `You've ${count} ${[fruit]}s in cart`
// };

// alert(bag[fruit]);

// let buy = prompt('How many cars do you want to buy?');

// let cars = {
//   [buy]: `You bought ${buy} cars`
// };

// alert(cars[buy]);

// function makeUser(name, age) {
//   return {
//     name,
//     age
//   }
// }

// let user = makeUser('John', 19);
// console.log(user.name);

// let user = {
//   name: 'vitya',
//   age: -1
// };

// for(let key in user) {
//   console.log(user[key]);
// }

// let codes = {
//   '+49': 'Germany',
//   '+41': 'Shweden',
//   '+44': 'Great Britian',
//   '+1': 'USA'
// };

// let codes2 = codes;

// codes2.name = 'John';
// console.log(codes.name);

// for(let code in codes) {
//   console.log(code);
// }

// let saveliy = {
//   name: 'Saveliy',
//   surname: 'Obnizov',
//   age: 1
// };

// let gleb = {};

// // for(let key in saveliy) {
// //   gleb[key] = saveliy[key];
// // }

// // gleb.name = 'Gleb';

// console.log(saveliy);
// console.log(gleb);

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//   for(let key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let result = 0;

// for(let key in salaries) {
//   result += salaries[key];
// }

// console.log(result);

// let menu = {
//   width: 200,
//   height: 300,
//   titile: 'My menu'
// };

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// for(let key in menu) {
//   console.log(menu[key]);
// }

// let id = Symbol("id");

// let user = {
//   name: 'John',
//   age: 23,
//   sayHi() {
//     console.log(`${this.name} says hello!`);
//   }
// };

// user.sayHi();

// let user = {
//   name: "Джон",
//   hi() { alert(this.name); },
//   bye() { alert("Пока"); }
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)

// user.name == "Джон" ? user.hi() : user.bye();

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// };

// (user.go)();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log( this.step );
//     return this;
//   }
// };

// ladder.showStep().up().up().up().up().showStep();

// const calculator = {
//   num1: 0,
//   num2: 0,
//   read() {
//     let num1 = +prompt('Write the first number');
//     let num2 = +prompt('Write the second number');
//     this.num1 = num1;
//     this.num2 = num2;
//   },
//   sum() {
//     return this.num1 + this.num2;
//   },
//   mul() {
//     return this.num1 * this.num2;
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let vasya = new User('Vasya', 11);
// console.log(vasya);

// function Calculator() {
//   this.num1 = 0;
//   this.num2 = 0;
//   this.read = function() {
//     let num1 = +prompt('Write the first number: A');
//     let num2 = +prompt('Write the second number: B');
//     this.num1 = num1;
//     this.num2 = num2;
//   };
//   this.sum = function() {
//     return this.num1 + this.num2;
//   };
//   this.mul = function() {
//     return this.num1 * this.num2;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(num) {
//   this.value = num;
//   this.read = function() {
//     this.value += +prompt('How many need to add?');
//   }
// }

// let accumulator = new Accumulator(1);

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// let elem = document.getElementById('elem');


// elem.onclick = function(e) {
//   if (e.mousedown) {
//     elem.innerHTML = 'Button was pressed';
//   } else if (e.mouseup) {
//     elem.innerHtML += '...and button was releised';
//   }
// };

// const fieldWithBall = document.getElementById('field1');
// const ball = document.getElementById('ball');
// const h2toggle = document.getElementById('sweets');
// const li1toggle = document.getElementById('li1');
// const li2toggle = document.getElementById('li2');
// const li3toggle = document.getElementById('li3');

// fieldWithBall.onclick = function(e) {
//   let cordsOfCursor = window.getBoundingClientRect();
//   ball.style.left = cordsOfCursor.left + 'px';
//   ball.style.top = cordsOfCursor.top + 'px';
// };

// const btnHidden = document.getElementById('hidden');

// elem.onclick = function() {
//   btnHidden.classList.toggle('hidden');
// };

// h2toggle.onclick = function() {
//   li1toggle.classList.toggle('lishow');
//   li2toggle.classList.toggle('lishow');
//   li3toggle.classList.toggle('lishow');
// };

/* ============================== Lero fun =============================== */

const buttonLero = document.getElementById('button');
const leroTest = document.getElementById('lero-test');
const divLero = document.createElement('div');

divLero.classList.add('lero');

buttonLero.onclick = function() {
  document.body.insertAdjacentHTML('beforeend', '<div class="lero">Lero-Lero-Lero-Lero</div>');
};

for(let i = 0; i <= 3; i++) {
  if (i <= 3) {
    console.log(i);
  }
}