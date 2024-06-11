// Note :- Push, POP, Shift, UnShift, Splice, toSpliced are Type of "INPLACED METHODS"
// &
// Find is a Type of "OUTPLACED METHOD".


// To Find Length 

let items = [10, 99, 37, 12, 57, 34, 88] 

console.log(items.length)  // To Find Length

console.log (items.at (-1)) // Output Will be 88

// To Join Element of Array

console.log(items.join ("-"))


// To Convert Array into String

console.log (items.toString()) // Output Will be 10, 99, 37, 12, 57, 34, 88


// Push Operation in Array 

items.push(100)
console.log(items) // In Output 100 will be placed after 88


// POP Operation in Array

items.pop(100)
console.log(items)



// Shift Operation in Array

items.shift()
console.log (items)  // 10 will be remove in the Output


// Splice In Array

items.splice(2,1)
console.log (items) // 12 will be remove from the Output. It means from the 2nd index 1 Element will be remove.


// UnShift Operation in Array

items.unshift()
console.log (items)

// To Change Element in the Array

items[3] = 122
console.log (items)  // In the Output 122 has take a placed from 34.


// Slice Operation in the Array

console.log (
    items.slice(4) // In Output only Index No.4 will be print.
)

console.log (
    items.slice(1,4) // In the Output only Element which is between Index-1 and Index-4 is print. But there is not include Index 1 & Index 4. So Final Output is [37, 57, 122].
)


// Concat Operation in Array

let items1 = [10, 99, 37, 12]
let items2 = [100, 57, 34, 88]

let items3 = items1.concat(items2)
console.log (items3)  // The Output Will be [10, 99, 37, 12, 100, 57, 34, 88]


let items4 = items1.concat(items2)
items4 = items4.concat(55)
console.log(items4)  // The Output Will be [10, 99, 37, 12, 100, 57, 34, 88, 55]


// To Find Particular Value From More than One Array From The Variable

const items5 = [
    [1,2],
    [3,4],
    [5,6]
];

console.log (
    items5 [0,0] // Here The Output Will be [1,2].
)


// Flat Operation In Array 

console.log (
    items5.flat()  // The Output Will be [1, 2, 3, 4, 5, 6]. Flat is used for merge all Array in single Array.
)


// Sort Operation in Array

console.log(
items1.sort()  // Here Firstly Array is [10, 99, 37, 12] and After Sorting the Array is [10, 12, 37, 99].
)


// Reverse Operation In Array


console.log (
    items1.reverse() // Here Firstly Array is [10, 99, 37, 12] and After Reversing the Array is [99, 37, 12, 10].
)


// To Find That Element is Exited in the Array or Not Using Includes Operation.

let itm = [10, 100, 12, 34, 37, 57, 88, 99]

console.log(
itm.includes(100)
) // The Output Will Be TRUE


console.log(
itm.includes(101)
) // The Output Will Be FALSE


let itm1 = [{n:1}, {n:5}, {n:3}, {n:1}, {n:2}]
console.log(
    itm1.includes ({n:1}) // The Output Will be False Because Includes Operation is work for  only Single Value
)

console.log (
    itm1.find (item => item.n = 1) // Here Output Will be {n:1}
)

// To Find Index 

console.log (
    itm1.findIndex(function (data){
        return data.n ===  3 // The Output Will be 2
    })
)


// Filter Operation In Array

const userData = [
    {
        name : "Smit",
        Age : 22,
        Profession : "Student"
    },

    {
        name : "Virat",
        Age : 32,
        Profession : "Cricketer"
    },
]

const filteruser = userData.filter(
    (user) => user.Profession === 'Student' || user.Profession === 'Cricketer'
)

console.log (filteruser) // Filter is giving the answer in form of Array. 

// Here The Output is  
// 0 : {name: 'Smit', Age: 22, Profession: 'Student'}
// 1 : {name: 'Virat', Age: 32, Profession: 'Cricketer'}
// length : 2



// Map Operation In Array

const updateData = userData.map (
    user => {
        user.Age = user.Age + 1
        return user // Here we have to Return something because it is compulsory.
    }
)

console.log (updateData) // In the Output The Age of Smit will be 23 & The Age of Virat will be 33 because We implemented Age by +1.  So Map is used to change the value of Element but not the key.



// Reduced Operation in the Array. Reduced return only Single Value

const arr = [1, 2, 3, 4, 5]

const sumOfArr = arr.reduce (
    (prev, curr) => prev + curr
)
console.log (sumOfArr) // The Output Will be 15.

// Here is the Explanation of This Program :-

//       prev       curr     ans
// 1.     1    +     2    =   3    Here Ans(3) will become Previous Value 
// 2.     3    +     3    =   6    Here Ans(6) will become Previous Value 
// 3.     6    +     4    =   10   Here Ans(10) will become Previous Value 
// 4.    10    +     5    =   15   Here Answer is 15.



// For Sending Default Value in Reduced Operation 

const sumOfArr1 = arr.reduce ((prev, curr) => prev + curr, 5 ) // Here 5 is a Default Value
console.log(sumOfArr1)  // The Output Will be 20.

// Here is the Explanation of This Program :-

//       prev       curr     ans
// 1.     1    +     2    =   3    Here Ans(3) will become Previous Value 
// 2.     3    +     3    =   6    Here Ans(6) will become Previous Value 
// 3.     6    +     4    =   10   Here Ans(10) will become Previous Value 
// 4.    10    +     5    =   15   Here Answer is 15 & We apply Default value and that is 5.
//  So the Answer + Default Value that means 15 + 5 = 20.


// Using Reduced in Map's Program

const updateData1 = userData.reduce ((obj, user) => {
    if (obj [user.Age]) {
        obj[user.Age] += 1
    }
    else {
        obj[user.Age] = 1
    }
    return obj
}, {} // Here in the {} we can pass the default value
)
console.log (updateData1)


// Some Operation in Array. 

// It giving True or False. If any one element is True as a condition in Array, it will give a True as a Output.

const arr1 = [1, 2, 3, 4, -5]

const result = arr1.some((item)=> {
    return item > 0
})
console.log (result) // The Output Will be TRUE.


// Every Operation in Array

// It giving True or False. If any one element is False as a condition in Array, it will give a False as a Output.

const arr2 = [1, 2, 3, 4, -5]

const result1 = arr2.every ((item) => {
    return item > 0
})
console.log (result1) //The Output Will be FALSE


// Spread Funnction In Array.
//  Spread is useful to perform different mathematical tasks in easy way.

// 1st Example

function sum (a,b,c) {
    return a+b+c
}
let arr3 = [1, 2, 3]
let results = sum(...arr3)
console.log(results) // Output Will be 6.

// 2nd Example (Without using Spread)

let arr4 = [1, 2, 3, 4]
let arr5 = arr4
arr4.push(5)

console.log(arr4)
console.log(arr5) //Both output have a same values  [1, 2, 3, 4, 5].

// 3rd Example (Using Spread)

let arr6 = [1, 2, 3, 4]
let arr7 = [...arr6]
arr7.push(5)

console.log(arr6) // Output is :- [1, 2, 3, 4]
console.log(arr7) // Output is :- [1, 2, 3, 4, 5]



// Math.max Function In Array. 

// Identify Biggest Number From the Element of The Array.


let arr8 = [1, 2, 3, 54, 6848, 54613, 65415]

let result2 = Math.max.apply (null, arr8)
console.log (result2)  // Output is :- 65415


// Math.min Function In Array. 

// Identify Smallest Number From the Element of The Array.


let arr9 = [1, 2, 3, 54, 6848, 54613, 65415]

let result3 = Math.min.apply (null, arr9)
console.log (result3)  // Output is :- 1


// Apply Function 

let arr10 = [1, 2, 3, 4, 5]
function sum(a,b,c,d,e) {
    return a+b+c+d+e
}
let result4 = sum.apply(null, arr10)
console.log(result4) // Output is :- 15


// I.M.P. Program

let arr01 = [1, 2, 3, 4, 5, 6, 7 ,8, 36, 72]

function sum(...arr01){
    let sum = 0
    for(let i = 0; i < arr01.length; i++){
        sum += arr01[i];
    }
    return sum;
}

let resultss = sum.apply(null, arr01)

console.log(resultss)   // Output :- 144

