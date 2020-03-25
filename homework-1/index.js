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

// Урок 2

console.log(Boolean(NaN)); 
console.log(typeof NaN); 

console.log(Boolean(null)); 
console.log(typeof null);

console.log(Boolean(undefined));  
console.log(typeof undefined);

console.log(Boolean("")); 
console.log(typeof "");

console.log(Boolean(" ")); 
console.log(typeof " ");

console.log(Boolean(false));  
console.log(typeof false);

onsole.log(Number(false)); 
console.log(Number(true)); 

console.log(Boolean("my name")); 
console.log(typeof "my name");

сonsole.log(undefined == false); 
console.log(null == false);
console.log(null == undefined);
console.log(null === undefined);

const KPI = 30;
const fact = KPI > 20 && KPI <31;

console.log(fact);
console.log("cat" && "dog" && "parrot");

const fact2 = KPI > 20 && KPI < 29;
onsole.log(fact2); 
console.log("cat" && false);

const age = 30;
const trueAge = age < 31 || age > 29;
console.log(trueAge); 
console.log("cat" || "parrot"); 

const trueAge1 = age < 31 || age > 32;
console.log(trueAge1); 
console.log("cat" || false); 

const trueAge2 = age < 29 || age > 27;
console.log(trueAge2); 
console.log(false || "parrot");

const trueAge3 = age < 29 || age > 31;
console.log(trueAge3);

const trueAge4 = age < 29 || age > 31 || age > 32;
console.log(trueAge4);

const trueAge5 = age < 29 || age > 25 || age > 50;
console.log(trueAge5);

console.log(!true); 
console.log(!false);

console.log(!1); 
console.log(!!1);

console.log(!0); 
console.log(!!0);

console.log(!"cat");

const quantity = 50;
console.log((false && true) || true);
console.log(false && (true || true));

console.log((quantity > 39 && quantity < 49) || quantity > 48);
console.log((true && false) || "parrot");

console.log((quantity > 51 && quantity < 53) || quantity > 48);

console.log((quantity > 51 && quantity < 49) || quantity > 49);

console.log((quantity > 51 && quantity < 51) || quantity > 52);


console.log((quantity > 51 && quantity < 51) || quantity > 52);

console.log((quantity > 39 && quantity < 49) || quantity > 51);

console.log((quantity > 39 && quantity > 49) || quantity > 51);

console.log((quantity > 51 && quantity < 49) || quantity > 52);

console.log((false && true) || NaN);

console.log((false && false) || NaN);

console.log((true && true) || NaN);


// IF
let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

if (subscription === "pr") {
  cost = 0;
}

if (subscription === "pro") {
  cost = 34;
}

console.log(cost); 

// IF ELSE
let day = prompt("Enter today day please");
let weekday;

if (day === String("Saturday") || day === String("Sunday")) {
  weekday = "holiday";
} else {
  weekday = "workday";
}
console.log(weekday);

let value = prompt("Boolean value");
let bool;

if (value === "true" || value === "false") {
  bool = "Boolean";
} else {
  bool = "It's not a Boolean";
}
console.log(value);
console.log(bool);

// IF ELSE
let day = prompt("Enter today day please");
let weekday;

if (day === String("Saturday") || day === String("Sunday")) {
  weekday = "holiday";
} else {
  weekday = "workday";
}
console.log(weekday);

let value = prompt("Boolean value");
let bool;

if (value === "true" || value === "false") {
  bool = "Boolean";
} else {
  bool = "It's not a Boolean";
}
console.log(value);
console.log(bool);

// ELSE IF

let day = prompt("Enter today day please");
let weekday;

if (day === "Saturday" || day === "Sunday") {
  weekday = "holiday";
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  weekday = "workday";
} else {
  weekday = "Invalid entered data";
}
console.log(day);
console.log(weekday);


let studentAge = prompt("Enter your age please");
let group;

if (studentAge > 11 && studentAge < 15) {
  group = "Junior";
} else if (studentAge > 14 && studentAge < 18) {
  group = "Middle";
} else {
  group = "Your age is not valid for children group. Please apply to manager.";
}
console.log(studentAge);
console.log(group);

// ТЕРНАРНЫЙ ОПЕРАТОР == IF ELSE

let answer;
let question = confirm("Are you student?");

if (question === true) {
    answer = "yes";
  } else {
    answer = "no";
  }

  answer = question === true ? "yes" : "no";

console.log(answer);

SWITCH 

let day = prompt("Enter today day please");
let weekday;

switch (day) {
  case "Monday":
    weekday = "the worst workday at week";
    break;

  case "Tuesday":
    weekday = "a bit better workday";
    break;

  case "Wednesday":
    weekday = "a workday and so it`s a small Friday)";
    break;

  case "Thursday":
    weekday = "a strange workday";
    break;

  case "Friday":
    weekday = "the best workday";
    break;

  case "Saturday":
    weekday = "holiday";
    break;

  case "Sunday":
    weekday = "holiday";
    break;

  default:
    alert("Invalid entered data");
    weekday = "invalid data";
}
console.log(`${day} is ${weekday}`);

let myFirstName = "Sasha";
if (true) {
console.log("BLOCK scope:", myFirstName); 
}
console.log("GLOBAL scope:", myFirstName);

if (true) {
    let mySecondName = "Hrevtsova";
    console.log("BLOCK scope:", mySecondName);
}
console.log("GLOBAL scope:", mySecondName);
if (true) {
    const blockA = "block A";
    console.log(global); 
    console.log(blockA);
    console.log(blockB);
    console.log(blockC);
}

if (true) {
        const blockB = "block B";
        console.log(global); 
        console.log(blockA); 
        console.log(blockB); 
        console.log(blockC); 
      }
    
    if (true) {
        const blockC = "block c";
        console.log(global); 
        console.log(blockA); 
        console.log(blockB); 
        console.log(blockC); 
      }
      console.log(global); 
console.log(blockA); 
console.log(blockB); 
console.log(blockC);
    
let counter = 0;

while (counter <= 10) {
      console.log("counter: ", counter);
      counter += 1;
    }
    
    let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients) {
      console.log(clientCounter);
      clientCounter += 1;
    }

    let password = "";

    do {
          password = prompt("Введите пароль длиннее 4-х символов", "");
        } while (password.length < 5);

    console.log("Ввели пароль: ", password);

    const max = 100;

    for (let i = 10; i <= max; i += 5) {
        console.log(i);
      }

      const target = 4;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
    console.log(i);
    sum += i;
  }
  console.log(sum);

  const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      console.log("Дошли до 5-й итерации, прерываем цикл!");
      break;
    }
  }

  const number = 10;

  for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
      continue;
    }  

    log("Нечетное i: ", i); 
}

counter = 0;

while (counter <= 10) {
  console.log("counter: ", counter);
  counter += 1;
}


let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

ssword = "";

do {
  password = prompt("Введите пароль длиннее 4-х символов", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);


const max = 100;

for (let i = 10; i <= max; i += 5) {
  console.log(i);
}


const target = 4;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  console.log(i);
  sum += i;
}
console.log(sum);



const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}


for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log("Дошли до 5-й итерации, прерываем цикл!");
    break;
  }
}


const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}
let studentsName;
console.log("имя студента", studentsName)
studentsName = prompt("sddws")
const studentsNew = [
  "Roy",
  "Nick",
  "Dave",
  "Helen",
  "Mary",
  "Sarah",
  "Charly",
  "Bob"
];
console.log("sp st", studentsNew)

const alPeople = [[["girls"],["womans"], ["grannies"], ["boys"], ["men"]]];