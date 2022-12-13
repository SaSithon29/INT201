// //Math

// // // Math.pow:
let pow = Math.pow(20,2)
console.log(pow)
console.log('------------')

// // //math.random 
// : default 0 - (<1) =>> 0 - 0.9999...
// Math.random()*(max-min+1)+min >> random ช่วงเลขใหม่
let random = Math.random(1-40)*(40-1+1)+1
console.log(random)
console.log('------------')

console.log(Math.floor(random)) // ปัดลง
console.log(Math.ceil(random)) // ปัดขึ้น
console.log('------------')


//// Equality 
console.log(null==undefined) //true
console.log('------------')

// เมื่อฝั่งหนึ่งเป็น Number อีกฝั่งจะถูกเปลี่ยนให้เป็น Number
console.log('23'==23) //true
console.log(true==1) //true
console.log(true==0) //false
console.log('------------')

// // // String: case-sensitive
console.log('1'<'sasithon') //true
console.log('1'<'#') //false
console.log('Sasithon'<'sasithon') //true
console.log('Sasithon'>'sasithon') //false