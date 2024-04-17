// Задание 1. Ваша задача - написать программу, которая принимает массив объектов-людей и вычисляет общий возраст.
// Создайте функцию calculateTotalAge, которая принимает массив объектов. Каждый объект в массиве представляет одного человека и имеет ключи: name и age В теле цикла, используйте деструктуризацию объекта для получения значения age и name. Верните общий возраст.

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
let totalName = ''
let averageAge = 0
const calculateTotalAge = (people) => {
    for (let i = 0; i < people.length; i++) {
        const { name, age } = people[i]
        averageAge += age
        totalName += name + " "
    }
    return totalName + ' вместе им ' + averageAge + " годиков"
}
console.log(calculateTotalAge(people))

// Задание 2
// Создайте функцию compareObjects, которая принимает два объекта в качестве аргументов и проверяет их на равенство (все ключи и значения должны быть одинаковыми). Верните true, если объекты равны, и false в противном случае.
const people1 = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];


const compareObjects = (object1, object2) => {
    if (object1.length !== object2.length) {
        return false;
    }
    for (let i = 0; i < object1.length; i++) {
        const object1Keys = Object.keys(object1[i])
        const object2Keys = Object.keys(object2[i])
        for (let j = 0; j < object1Keys.length; j++) {
            if (object1Keys[j] !== object2Keys[j]) {
                return false
            }

            const object1Values = Object.values(object1[i])
            const object2Values = Object.values(object2[i])
            for (let j = 0; j < object1Values.length; j++) {
                if (object1Values[j] !== object2Values[j]) {
                    return false
                }
            }
        }

    }
    return true
}


console.log(compareObjects(people, people1))


// Задание 3
// Напишите функцию findKeyByValue, которая принимает объект и значение в качестве аргументов и возвращает первый ключ, соответствующий переданному значению. Если значение не найдено, верните null.
const people2 = 
    { name: 'Alice', age: 30 }
   
;

const findKeyByValue = (object3, x) => {
   
    const object3Keys = Object.keys(object3)
    const object3Values = Object.values(object3)
    for (let i = 0; i < object3Keys.length; i++) {
        if (x == object3Values[i])
            return object3Keys[i]
    }
    return null
}
console.log(findKeyByValue(people2, '30'))

// Задание 4
// У вас есть объект productInfo с информацией о продукте, включая его наименование, цену и наличие на складе. Напишите функцию printProductDetails, которая принимает этот объект в качестве аргумента и выводит в консоль сообщение вида: "<товар> - <цена>, товар на складе: <да/нет>", где "да" или "нет" зависит от наличия товара на складе.


const productInfo = {
  name: 'Smartphone',
  price: 699,
  'in stock': false
};
const printProductDetails = (productInfo) =>{
    if(productInfo['in stock'] == true) {
        return `${productInfo.name} - ${productInfo.price}, товар на складе: ДА`
    }
    return `${productInfo.name} - ${productInfo.price}, товар на складе: НЕТ`
}
console.log(printProductDetails(productInfo))