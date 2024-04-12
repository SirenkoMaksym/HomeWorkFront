/*Задание 1
Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".
*/
const names = ["Мария", "Алексей", "Елена", "Дмитрий"]
const ages = [22, 31, 45, 53]
const neuNamesAges = []
for (i=0; i<names.length; i++){
 neuNamesAges[i] = names[i]+' '+ages[i]+ ' '+ 'лет/годов'
}
console.log(neuNamesAges)
/*Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
сделайте два решения - без и с использованием reverse()*/
//1. Решение "без методов"
let k = 0
const neuNamesAgesNeu = []
for (i=neuNamesAges.length-1; i>=0; i-- ){
    neuNamesAgesNeu[k]=neuNamesAges[i]
    k++
}
console.log(neuNamesAgesNeu)
console.log("============================")
//2. Решение с reverse()
const reversedName = neuNamesAges.reverse()

console.log(reversedName)

//3. При помощи pop().шифта
const reversNamePop = []
let j = reversedName.length
for (i=0; i<=j-1; i++){
reversNamePop[i] = reversedName.pop()
}
console.log("------------")
console.log(reversNamePop)

// Задание 3
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль
const countries = []
countries.push("Германия")
countries.push("Италия")
countries.unshift("Франция")

let neuCountry = countries.pop()
countries.unshift(neuCountry)
console.log(countries)

// Задание 4
// Объявите массив colors с названиями цветов: "красный", "зеленый", "синий". Создайте массив animals с животными: "кошка", "собака", "кролик". Объедините массивы в colorsAndAnimals с помощью оператора spread Используя деструктуризацию, создайте переменные для каждого элемента нового массива с соответствующими именами переменных Выведите в консоль переменную blue и rabbit через запятую.

const colors = ["красный", "зеленый", "синий"]
const animals = ["кошка", "собака", "кролик"]
const colorsAndAnimals = [...colors, ...animals]
const [red, green, blue, cat,dog,rabbit] = colorsAndAnimals

console.log(blue,rabbit)
