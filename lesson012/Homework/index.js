// ## Задание 1
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.

const neuArray = ["null", "eins", "zwei", "drei"]
const unserFunction = (array, number) => {
    if (array[number] == undefined) {
        return "No such index in array"
    } else {
        return array[number]
    }

}

console.log(unserFunction(neuArray, 4))

console.log("==================================")


const wettFunction = (code) => {
    switch (code) {
        case 'SQ':
            return "шквал";
        case 'PO':
            return "пыльный вихрь";
        case 'FC':
            return "торнадо";
        case 'BR':
            return "дымка (видимость от 1 до 9 км)";
        case 'HZ':
            return "мгла (видимость менее 10 км)";
        case 'FU':
            return "дым (видимость менее 10 км)";
        case 'DS':
            return "пыльная буря (видимость менее 10 км)";
        case 'SS':
            return "песчаная буря (видимость менее 10 км)";
        default:
            return "Не корректный код";
    }
}

console.log(wettFunction('BRD'))

const wettAntwrort = function (code, wettFunction) {
    return wettFunction(code)
}

console.log(wettAntwrort('SS', wettFunction))


console.log('=================================')

// Задание 3
// Напишите функцию sumNumbers, которая принимает на вход массив чисел и возвращает строку, в которой перечислены все числа из массива и их сумма. Используйте синтаксис function expression, цикл while, шаблонные строки.
// console.log(sumNumbers(numbers)); // Ожидаемый результат: "Числа: 1, 2, 3, 4, 5. Сумма: 15."

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum =0
const sumNumbers = (array) => {
    let i=0
    let anshwer = "Числа: "
    while (i < array.length){
        sum = sum+array[i]
anshwer=
        i++
    }
    return `Ожидаемый результат: "Числа: ${array}. Сумма: ${sum}."`
}

console.log(sumNumbers(myArray))
