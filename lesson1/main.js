<!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua',-->
<!--1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
<!--Вивести кожну змінну за допомогою: console.log-->

let h = 'hello';
console.log(h)
let o = 'owu';
console.log(o)
let c = 'com';
console.log(c)
let u = 'ua';
console.log(u)
let one = 1;
console.log(one)
let ten = 10;
console.log(ten)
let minus = -999;
console.log(minus)
let hundred = 123;
console.log(hundred)
const PI = 3.14;
console.log(PI)
let two = 2.7;
console.log(two)
let sixt = 16;
console.log(sixt)
let t = true;
console.log(t)
let f = false;
console.log(f)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати
// їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = 'Yevhen'
let middleName = 'Anatoliyovich'
let lastName = 'Zabudskyi'
let person = ` ${firstName} ${middleName} ${lastName} `
console.log(person);


//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let d = true;

let a = 100;
console.log(typeof a)
let b = '100';
console.log(typeof b)
let d = true;
console.log(typeof d)


//
// Додаткове для тих хто цікавився prompt`oм
//  - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та
// роками. та вивести в консоль

let fName = prompt(`name`);
console.log(fName)

let mName = prompt(`father name`);
console.log(mName);

let age = +prompt('age');
console.log(age)
