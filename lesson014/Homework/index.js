
// Задание 1
// У вас есть массив объектов:
// Используйте методы массивов
// Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const neuStarWarsHeroes = starWarsHeroes.map(el => ({ name: el.name, isJedi: el.isJedi }))
console.log(neuStarWarsHeroes)
// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет
const jungStarWarsHeroer = starWarsHeroes.filter(el => el.age < 40)
console.log(jungStarWarsHeroer)
// Задание 1.3
// Посчитайте возраст всех джедаев
const sumAge = starWarsHeroes
    .map(el => el.age)
    .reduce((acc, value) => acc + value, 0)
console.log(sumAge)
// Задание 1.4
// Повысьте возраст героев на 10 лет
starWarsHeroes.forEach(el => (el.age += 10))
console.log(starWarsHeroes)

// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }
const trueStarVater = starWarsHeroes.map(el => {
    if (el.name === "Anakin Skywalker") {
        return {
            name: "Darth Vader",
            age: 50,
            isJedi: false
        }
    } else {
        return el
    }

})
console.log(trueStarVater)

// Задание 1.6
// Создайте массив с именами героев, у которых возраст больше 30 лет, преобразуйте каждое имя в верхний регистр и отфильтруйте имена, которые начинаются с буквы "A".

const alterStarWarsHeroer = []
starWarsHeroes.map(el => { if (el.age > 30) { alterStarWarsHeroer.push(el.name.toUpperCase()) } })
const task6 = alterStarWarsHeroer.filter(el => el[0] !== "A")
console.log(task6)

const task6_2 = starWarsHeroes
    .filter(el => el.age > 30)
    .map(el => el.name.toUpperCase())
    .filter(el => !el.startsWith('A'))
console.log(task6_2)
// Задание 1.7
// Выведите на экран сообщение для каждого героя, указывающее на его статус джедая, и добавьте к каждому сообщению его возраст.
// Используйте тернарный оператор

// Образец:

// 'Anakin Skywalker is a Jedi. Age: 25' 'Han Solo is not a Jedi. Age: 35'*/

starWarsHeroes.forEach(el => console.log((el.isJedi) ? `${el.name} is a Jedi. Age:${el.age} ` : `${el.name} is not a Jedi. Age:${el.age}`, " "))
