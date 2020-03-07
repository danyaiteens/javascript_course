"use strict";
// =================lesson 1================
// let a;
// console.log(a);
// console.log(typeof a);

// a = 34;
// console.log(a);
// console.log(typeof a);

// let b = "30";
// b = 30;
// console.log(b);
// console.log(typeof b);

// let c = false;
// c = true;
// console.log(c);
// console.log(typeof c);

// var d = 20;
// console.log(d);
// console.log(typeof d);

// const name = "Alex";
// console.log(name);
// console.log(typeof name);
// //name = "KATE";
// //console.log(name);
// //console.log(typeof name);

// const isAutheneicad = true;
// console.log(isAutheneicad);
// console.log(typeof isAutheneicad);

// const isModalOpen = false;
// console.log(isModalOpen);
// console.log(typeof isModalOpen);

// const fe_group = null;
// console.log(fe_group);
// console.log(typeof fe_group);

// const massage = "Hello";
// console.log(massage);

// let man = "Ben";
// console.log(man);
// console.log(`${man}, ${massage}`);
// console.log("${man}, ${massage}");

// //alert(`${man}, ${massage}`);

// //const isReady = confirm("Are u Ready?");
// //alert(isReady);

// const enterName = prompt("Please give your mobile!");
// console.log(enterName);

// =================lesson 1================
const x = 11;
const y = 5;
const z = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(y ** z);

console.log(x + y * z);
console.log((x + y) * z);

console.log(x + y ** z);
console.log((x + y) ** z);

let value = 100;
value = value + 9;
console.log(value);
value = value + 9;
console.log(value);

value += 12;
console.log(value);

const p = 211;
const r = 15;
const s = 211;
console.log("p > r", p > r);

console.log("p < r", p < r);
console.log("p >= s", p >= s);

console.log("p < r", p < r);
console.log("p <= s", p <= s);

const num1 = 5;
const num2 = 18;
const str1 = "5";
const str2 = "18";
console.log("num1 === str1", num1 === str1);
console.log("num1 == str1", num1 == str1);
console.log(num1 + str1);
console.log(typeof(num1 + str1));

console.log(str1 + num1 + str2);
console.log(typeof(str1 + num1 + str2));

console.log(num1 + num2 + str1 + str2);
console.log(typeof(num1 + num2 + str1 + str2));

//let Age = prompt("Enter ur age please!");
//console.log(Age);
//console.log(typeof Age);
//Age = Number(Age);
//console.log(Age);
//console.log(typeof Age);

console.log(Number.parseInt("112px"));
console.log(Number.parseInt("11abc22"));
console.log(Number.parseInt("1.1xy9"));
console.log(Number.parseInt("qweQWE110011"));

console.log(Number.parseFloat("112px"));
console.log(Number.parseFloat("11abc22"));
console.log(Number.parseFloat("1.11xy9"));
console.log(Number.parseInt("qweQWE110011"));

const validNumber = Number("1024");
console.log(validNumber);
console.log(Number.isNaN(validNumber));

const invalidNumber = Number("ggg");
console.log(invalidNumber);
console.log(Number.isNaN(invalidNumber));

const V = 0.1;
const M = 0.2;
console.log("0.1 + 0.2", V + M);
console.log(V + M === 0.3);

console.log((V * 10 + M *10) / 10);
console.log((V * 10 + M *10) / 10 === 0.3);

console.log(Math.floor(1.1));
console.log(Math.floor(1.5));
console.log(Math.floor(1.99));

console.log(Math.ceil(1.99));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.01));

console.log(Math.round(1.1));
console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.round(1.99));

console.log(Math.max(1, 3, 2, 0));
console.log(Math.min(1, 3, 2, 0));
console.log(Math.min(1, -3, 2, 0));

console.log(Math.pow(3, 3));

console.log(Math.random());

console.log(Math.random() * (10-1) + 1);

