//*(Arrays)
const arr1 = []
const arr2 = new Array()

const numbers = [1,2,3,5,66]
const fruits = ['apple', 'orange', 'pear', 'melon']
const party = ['human', 42 , undefined, ['man', 'womsn']]

console.log(fruits[0]);

console.log(fruits[10])

fruits[3] = 'watermelon'
console.log(fruits);
console.log(party);

for (let i =0; i < fruits.length; i++) {
    
    console.log(fruits[i]);
}

console.log('=========================');

let i =0

while (i <= 10) {
    // console.log(i)
    i++
}

let loop = 'invinity loop'
console.log(loop[1]);
loop[0]='I'
console.log(loop);

let newloop = "I" + loop.slice(1)
console.log(newloop)


// let autoMark = ['BMW', 'Opel', 'Vw', 'Ferrari', 'Dauwoo']
// for (i=0; i<autoMark.length; i++){
// console.log(autoMark[i])}
// let newAutoMark1 = autoMark[0]
// let newAutoMark5 = autoMark[autoMark.length-1]
// autoMark[0]=newAutoMark5
// autoMark[autoMark.length-1]=newAutoMark1
// console.log(autoMark)



const students = ['Marina', 'Alex', 'Ira','John']
//* Push()
// console.log(students.push('Harry Potter'))

let returnedValue = students.push('Harry Potter')

console.log(returnedValue)
console.log(students)


//* Pop()

let returnPop = students.pop()

console.log(returnPop)
console.log(students)


//* Unshift()

let returnUnschift = students.unshift('Luke Skywalker')
console.log(returnUnschift)
console.log(students)

let returnShift = students.shift()
console.log(returnShift)
console.log(students)

//* Spread syntax

const berries = ['blueberry', 'watermelon']
const berries2 = ['strawberry',...berries, 'raspberry']

const berries3 = [...berries, ...berries2]

console.log(berries3)

//* destruktirisation

let cities = ['Berlin', 'Hamburg', "Leipzig", "Postdam"]

const [berlin, hamburg, leipzig, postdam] = cities
const [first, dgdsg, , last] = cities

console.log(first)
console.log(last)
console.log(dgdsg)

console.log('hamburg', hamburg)
console.log("========================")

let fruits1 = []

fruits1.push("банан")
fruits1.push("вишня")
fruits1.unshift("яблоко")

console.log(fruits1)

let neuArraus = fruits1.pop()
console.log(neuArraus)