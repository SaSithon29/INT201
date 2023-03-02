// Array method parameter element, index, originalArray


const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
]

// // forEach()

// loop element from array for use 
// return undefined {not return anything}
let productName =[]
products.forEach(element => {
    productName.push(element.name.toUpperCase())
})
console.log(productName) //[ 'BAG', 'PEN', 'BAG' ]


// Map()

// creates a new array populated with the results of calling a provided function on every element in the calling array
// edit array and return array
const productName2=products.map(element => element.name)
// console.log(Array.prototype.map) //[Function: map]
console.log(productName2)  //[ 'bag', 'pen', 'BAG' ]
console.log(typeof productName2) //object
console.log('------------')


// filter
// can filter propertie of object and return new array
// visit each element in array and check filter by callbackFn
// return ```new array``` had filter
const productNameStartWithB= products.map(proWithB => proWithB.name)
      .filter(proWithB => proWithB.toUpperCase().startsWith(`B`))

console.log(productNameStartWithB)
console.log('------------')
const num = [-3, -2, -1, 0, 1, 2, 3]
const negativeInteger = num.filter(num => num < 0)
console.log(num)              // -3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,15 original
console.log(negativeInteger)  // [ -3, -2, -1 ]  


// every >> check ture/false all element is ture == ture 
//         a least one is false  == false

// some check ture/false a least one element is ture == ture 
//         all element is false  == false


//find() 
//returns the first element in the provided array. If no values ==>> undefined
console.log(Array.prototype.find)
console.log(products.find(product => product.name === `pen`))                         // { id: 2, name: 'pen' }
console.log(products.find(product => product.name.startsWith(`B`)))                   // { id: 33, name: 'BAG' }
console.log(products.find(product => product.name.toUpperCase().startsWith(`B`)))     // { id: 123, name: 'bag' }


// splice
// insert at index 2 with two elements 'A' and 'B'
// แตกอาเรย์ออกมาย่อยๆ : ...x
products.splice(1, 0 ,'A', 'B') //start [1]
console.log(products) //[{ id: 123, name: 'bag' },'A','B',{ id: 2, name: 'pen' },{ id: 33, name: 'BAG' }]
console.log('=--------=')

// //remove 1 element at index 2
products.splice(2, 1 )
console.log(products) //[{ id: 123, name: 'bag' },'A',{ id: 2, name: 'pen' },{ id: 33, name: 'BAG' }]
console.log('=--------=')

// products.splice(1, 1,'ID','Name')
console.log(products) //[{ id: 123, name: 'bag' },'ID','Name',{ id: 2, name: 'pen' },{ id: 33, name: 'BAG' }]
console.log('=--------=')

// // sort : เรียงArrayในรูปแบบ String แล้วส่งกลับไปเป็นตำแหน่ง
//     // sort((a,b) => a.length-b.length) 
//            //a=first element
const product = ['bag', 'pen' , 'BAG']
product.sort()
console.log(product) //[ 'BAG', 'bag', 'pen' ]

// //          compare function 'ASC'ending order
const numarray = [1, 30, 4, 21, 100000]

numarray.sort((a,b)=>a-b)
console.log("SORT ASC : "+numarray)
// expected output: Array [1, 4, 21, 30, 100000]

// //            compare function with 'DESC'ending order
numarray.sort((a,b)=>b-a)
console.log("SORT DESC : "+numarray)
// expected output: Array [ 100000, 30, 21, 4, 1 ]

numarray.reverse()
console.log(numarray)
//output: Array [1, 4, 21, 30, 100000]