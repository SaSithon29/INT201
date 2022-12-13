//// implicit Type
// การเขียนแบบตีความโดยนัย 
// ย่อรูปไว้ในฐานที่เข้าใจได้ xy=x*y
console.log('-------')

let a=[]
if(a.length===0){
    console.log('a is empty')
} else{
    console.log('a is not empty')
}
console.log('-------')

//// explicit Type
// การเขียนตรงตัว 
//x * y

// Type Conversions
// implicit conversion

// to Number type
console.log(Number('1')) //1
console.log(Number('')) //0
console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number(undefined)) //NaN
console.log(Number(null)) //0
console.log('-------')

//to String type
console.log(String(true)) //true
console.log(String(false)) //false
console.log(String(5)) // 5: String
console.log(String(undefined)) //undefined
console.log(String(null)) //null
console.log('-------')

//to Boolean type
console.log(Boolean('ab')) //true
console.log(Boolean('')) //false
console.log(Boolean(0)) //false
console.log(Boolean(1)) //true
console.log(Boolean([])) //true
console.log(Boolean([1])) //true
console.log(Boolean([a])) //true
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false


