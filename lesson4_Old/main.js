// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaR(a=5, b=10) {
    console.log(a*b)
}
areaR()
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaС(r=10) {
    console.log(3.14*r*r)
}
areaС()
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function Cilinder(r=10, h=5, Pi = 3.14) {
    console.log(2*Pi*r*(h+r))
}
Cilinder()

// - створити функцію яка приймає масив та виводить кожен його елемент
let num = [1,2,3,4,5];
function point(arr) {
    for(let elem of arr) {
       console.log(elem);
    }
}
point(num)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function list(text) {
   document.write(` <p>${text}</p>`)
}

list('Hello')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list1(text) {
    document.write (` <ul><li>${text}</li><li>${text}</li><li>${text}</li></ul> `)

}
list1('Hello2')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)








// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список





// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.







// - створити функцію яка повертає найменьше число з масиву







// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13








// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]









// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250










