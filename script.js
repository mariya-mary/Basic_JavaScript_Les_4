// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


function getObjectFromNumber(num) {
    if (typeof num !== 'number' || num > 999 || num < 0) {
        return console.log('Введите число от 0 999.');
    }

    let numString = String(num);
    let arrayNum = Array.from(numString).reverse();

    let obj = {
        units: 0,
        tens: 0,
        hundreds: 0,
    };

    if (arrayNum.length >= 3) {
        obj.hundreds = parseInt(arrayNum[2], 10);
    }
    if (arrayNum.length >= 2) {
        obj.tens = parseInt(arrayNum[1], 10);
    }
    obj.units = parseInt(arrayNum[0], 10);

    return obj;

};
console.log(getObjectFromNumber(658));

// function getObjectFromNumber(num) {
//     if (typeof num !== 'number' || num > 999 || num < 0) {
//         return console.log('Введите число от 0 999.');
//     }

//     let numString = String(num);
//     let arrayNum = Array.from(numString);
//     let obj = {
//         units: 0,
//         tens: 0,
//         hundreds: 0,
//     };

//     if (num > 99) {
//         obj.units = arrayNum[2];
//         obj.tens = arrayNum[1];
//         obj.hundreds = arrayNum[0];
//     } else if (num > 9) {
//         obj.units = arrayNum[1];
//         obj.tens = arrayNum[0];
//     } else if (num < 10) {
//         obj.units = arrayNum[0];
//     }
//     return obj;

// };




// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
const goods = {
    productList: [
        { name: 'apple', amount: 2, price: 70 },
        { name: 'pear', amount: 1.5, price: 100 },
        { name: 'banana', amount: 1, price: 50 },
        { name: 'blueberry', amount: 0.5, price: 400 },
        { name: 'avocado', amount: 0.3, price: 350 },
    ],
    countBasketPrice() {
        const initialValue = 0;
        const countBasketPrice = this.productList.reduce(function (acc, count) {
            return acc + count.amount * count.price;
        }, initialValue);
        return countBasketPrice;
    }
}

console.log(goods.countBasketPrice());


// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.



