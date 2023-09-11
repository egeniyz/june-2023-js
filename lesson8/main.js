// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


// Перший спосіб
// function userFactoryFunction(id, name, surname, email, phone) {
//     return {id, name, surname, email, phone}
// }
// let user = userFactoryFunction(1, 'Katia', 'Por', 'kat@ukr.net', '068111' )
// console.log(user);

// Другий спосіб
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
//
// let user1 = new User(1, 'Olia', 'Kaz', 'ol@ukr.net', '068111')
// console.log(user1);
// let user2 = new User(2, 'Yulia', 'Bez', 'yul@ukr.net', '068222')
// console.log(user2);
// let user3 = new User(3, 'Lena', 'Ivlee', 'len@ukr.net', '068333')
// console.log(user3);
// let user4 = new User(4, 'Lida', 'Tit', 'lid@ukr.net', '068444')
// console.log(user4);
// let user5 = new User(5, 'Oksana', 'Tes', 'oks@ukr.net', '068555')
// console.log(user5);
// let user6 = new User(6, 'Lana', 'Ivano', 'lan@ukr.net', '068666')
// console.log(user6);
// let user7 = new User(7, 'Zheniya', 'Los', 'zh@ukr.net', '068777')
// console.log(user7);
// let user8 = new User(8, 'Nastiya', 'Buy', 'nas@ukr.net', '068888')
// console.log(user8);
// let user9 = new User(9, 'Yura', 'Tsvet', 'yur@ukr.net', '068999')
// console.log(user9);
// let user10 = new User(10, 'Alex', 'Sem', 'al@ukr.net', '068123')
// console.log(user10);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let Array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
// console.log(Array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterArray = Array.filter(function (value) {
//     return value.id%2===0
// })
// console.log(filterArray)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//  Я відсортував навпаки, по зменшенню, бо у мене і так id по зростанню було

// let sort = Array.sort((u1, u2) => {
// return u2.id-u1.id
// })
// console.log(sort)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
let client = new Client(1, 'Yura', 'Tsvet', 'yur@ukr.net', '068111', ['tea', 'coffe'] )
console.log(client)

// створити пустий масив, наповнити його 10 об'єктами Client








// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)








// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, ' +
// 'максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car






//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна ' +
// 'швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car






// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



