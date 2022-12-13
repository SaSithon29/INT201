// String :Array of Character
// let str='funtion'
// console.log(str.length)
//// property=value method=function
//// `` : Template Literals 
////   สามารถเขียน text+ตัวแปร , expression:นิพจน์
// console.log(`4*2 = ${4*2}`)
console.log('-------')

// let unknownVar
// console.log(unknownVar)
// console.log(typeof unknownVar)
// console.log(typeof unknownVar === undefined)
// // 'false'
// console.log(typeof unknownVar === 'undefined')
// // 'true'
// console.log(typeof 'unknownVar' === 'undefined')
// // 'false'
////content ต้องทำเป็น keyword ห้ามใส่''
console.log('-------')

let nullVAr=null
console.log(nullVAr)
// null
console.log(typeof nullVAr)
// object
console.log(nullVAr===null)
// true
console.log(nullVAr === 'null')
// false
console.log('-------')


// object-----------
// //object is collection of property
// : 1 properties = {key : value}
let product = {proID:1001,proName:'Sasithon',price: 100000 }
console.log(product)
// { proID: 1001, proName: 'Sasithon', price: 100000 }
console.log(typeof product)
// object
console.log(product.proID) // == console.log(product[proID]) 
// 1001
console.log('-------')

// array is collection of elements 
// -- length : start: 0
let PR=['home','house','condo']
console.log(PR)// ['home','house','condo']
console.log(typeof PR) // object
console.log(PR.length) // 3
console.log(PR[2]) // condo
console.log(`the first PR is ${PR[0]} 
                & the last PR is ${PR[PR.length-1]}`)
    // & the last PR is ${PR.length-1}`) == 2
