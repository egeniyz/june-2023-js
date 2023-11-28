// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [10,11,12,13,14,'Kolya', true, null, undefined, 1]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Volf', pageCount: 50, genre: 'adventure'}
let book2 = {title: 'Holms', pageCount: 100, genre: 'detective'}
let book3 = {title: 'Kotigoroshko', pageCount: 150, genre: 'cartuns'}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: 'Volf', pageCount: 50, genre: 'adventure', authors: [{name: 'Konan', age: 40}] }
let book5 = {title: 'Holms', pageCount: 100, genre: 'detective', authors: [{name: 'Varvar', age: 41}]}
let book6 = {title: 'Kotigoroshko', pageCount: 150, genre: 'cartuns' , authors: [{name: 'Sheva', age: 42}]}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') },
// {name: 'Yura', username: 'Yu', password: +prompt('enter your password') }
// ]


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0) {
    console.log('вірно')
}
else {
    console.log('не вірно');
}

let x1 = 0
if (x1 !== 0) {
    console.log('вірно')
}
else {
    console.log('не вірно');
}

let x2 = -3
if (x2 !== 0) {
    console.log('вірно')
}
else {
    console.log('не вірно');
}




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('enter number')
// if (time >0 && time < 16) {
//          console.log('first');}
//    else if ( time > 15 && time<31) {
//              console.log('second');}
//    else if (time > 30 && time<46) {
//              console.log('third');}
//    else if(time > 45 && time<60) {
//         console.log('fours');}
//       else {
//     console.log('error');
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('який день')
//       if (day<11) {
//           console.log('перша')
//       }
//       else if (day>10 && day < 21) {
//           console.log('друга');
//       }
//       else if (day >20 && day < 32) {
//           console.log('третя');
//       }
//       else if (day <1 || day > 31) {
//           console.log('дичь') }




//   Як працює confirm
// if (confirm('Вам больше 18')) {
//     console.log('Можете смотреть фильм')}
// else {
//         console.log('Запрет');
//     }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let shedule = prompt('enter day of week')
// switch (shedule) {
//     case '1':
//         console.log('monday');
//         break;
//     case '2':
//         console.log('tuesday');
//         break;
//     case '3':
//         console.log('wednesday');
//         break;
//     case '4':
//         console.log('thursday');
//         break;
//     case '5':
//         console.log('friday');
//         break;
//     case '6':
//         console.log('saturday');
//         break;
//     case '7':
//         console.log('sunday');
//         break;
//
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let d = prompt('введіть d')
// let c = prompt('введіть c')
// if (d>c) {
//     console.log(d);
// }
// else if (d===c) {
//     console.log('d дорівнює c');
// }


    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x3 = 0;
if(x3===0 || x=== null || x=== '' || x === undefined) {
    console.log(x3="default")
} else console.log('x3 is true')


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}


