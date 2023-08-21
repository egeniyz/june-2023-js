// Масиви та об'єкти:





// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let forest = ['mashrum', 'berry', 'strawberry', 101, true, false, 'trees', 'animals', 5, -20]
console.log('mashrum');
console.log('berry');
console.log('strawberry');
console.log(101);
console.log(true);
console.log(forest[5]);
console.log(forest[6]);
console.log(forest[7]);
console.log(forest[8]);
console.log(forest[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let lib1 = {
    title: 'first_title',
    pageCount: 10,
    genre: 'fantasy'}
let lib2 = {
    title: 'second_title',
    pageCount: 10,
    genre: 'adventure'
}
let lib3 =  {
    title: 'third_title',
    pageCount: 10,
    genre: 'detektive'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.



    let book1 = {

    title: 'Sia_Volf',
    pageCount: 105,
    genre: 'adventures ',
    authors: [{name: 'Jack London', age: 35}]
    };
console.log(book1);

let book2 = {
        title: '451',
        pageCount: 90,
        genre: 'fantasy',
        authors: [{name: 'Ray Bradbery', age: 40}]
    };
console.log(book2);

    let book3 = {
    title: '451',
    pageCount: 90,
    genre: 'detective',
    authors: [{name: 'Agata Kristi', age: 50}]
};
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в
// консоль пароль кожного користувача

// let users = [
//     {name: 'Yura', username: 'yu', password: +prompt('enter pasword')},
//     {name: 'Kolya', username: 'ko', password: prompt('enter pasword')},
//     {name: 'Jeniya', username: 'je', password: prompt('enter pasword')},
//     {name: 'Sergiy', username: 'se', password: prompt('enter pasword')},
//     {name: 'Ira', username: 'ir', password: prompt('enter pasword')},
//     {name: 'Yuliya', username: 'yul', password: prompt('enter pasword')},
//     {name: 'Katiya', username: 'ka', password: prompt('enter pasword')},
//     {name: 'Olesya', username: 'ol', password: prompt('enter pasword')},
//     {name: 'Natasha', username: 'na', password: prompt('enter pasword')},
//     {name: 'Marina', username: 'ma', password: prompt('enter pasword')}
//
// ]
// console.log(users)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що
//     дорівнює 1, 0, -3


// let x = 5
// if (x!=0) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// Перевірте  скрипт при a, що  дорівнює 1, 0, -3
// ПЕРШИЙ СПОСІБ - НЕ ПРАЦЮЄ ПРИ А===0

// let a = prompt('enter number')
// if (a!=0) {
//     console.log(true)
// }
// else if (a===0) {
//     console.log(false)
// }

// ДРУГИЙ СПОСІБ - ПРАЦЮЄ, АЛЕ У МЕНЕ ТРИ РІЗНІ ЗМІННІ А

// let a1 = 1
// if (a1!=0) {
//     console.log(true)
// }
// let a2 = 0
// if (a2===0) {
//     console.log(false)
// }
// let a3 = -3
// if(a3) {
//     console.log(true);
// }

// ТРЕТІЙ СПОСІБ НЕ ПРАЦЮЄ

// let a = +prompt('enter number');
// switch (a!=0) {
//     case '1':
//         console.log(true);
//         break;
//     case '0':
//         console.log(false);
//         break;
//     case '-3':
//         console.log(true);
//         break
// }




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

let time = 50;
if(time<15) {
    console.log('перша чверть')
}
if(time>15 && time<31) {
    console.log('друга чверть')
}
if(time>30 && time<46) {
    console.log('третя чверть')
}
if(time>45) {
    console.log('четверта чверть')
}




// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).

// let day = 11;
// if(day<11) {
//     console.log('перша декада')
// }
// if(day<21 && day>10) {
//     console.log('друга декада')
// }
// if(day<32 && day>20) {
//     console.log('третя декада')
// }





// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let shed = prompt('enter your day') ;
// switch (shed) {
//     case '1':
//         console.log('monday');
//         break;
//         case '2':
//         console.log('tuesday');
//         break;
//         case '3':
//         console.log('wednesday');
//         break;
//         case '4':
//         console.log('thursday');
//         break;
//         case '5':
//         console.log('friday');
//         break;
//         case '6':
//         console.log('saturday');
//         break;
//         case '7':
//         console.log('sanday');
//         break;
// }





//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let g = 5;
let h = 10;

if(g>h) {
    console.log(g)
}
else if(g<h) {
    console.log(h)
}
else if (g===h) {
    console.log('дорівнює');
}





    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
    //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//     falsy (хибноподібні, тобто приводиться до false)

let x = 0;
if(x===0 || x=== null || x=== '' || x === undefined) {
    console.log(x="default")
} else console.log('x is true')


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
// перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в
// консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration> 5) {
    console.log('Super');
}
    if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('Super');
}
    if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Super');
}
    if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('Super');
}
    if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('Super');
}
    if (coursesAndDurationArray[5].monthDuration>5) {
    console.log('Super');
}