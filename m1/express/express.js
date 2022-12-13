// Expression นิพจน์ : ต้องให้ผลลัพธ์เป็นค่าหนึ่งเสมอ
// // `text literal${expression:การดำเนินการ}`
// // simple form อ้างถึง ตัวแปรliteral:ตัวแปรคงที่ ไม่มี operator ก็นับเป็น นิพจน์
// // Another :use operator, variable , literal , call Function method

//// Operators
// Conditional Operator (?:) //ต้องการ operand 3 ตัว
//(boolean expression) ? expres_true : expres_false
const x=5
let y=(x%2===0)?'even':'odd'
console.log(y)
console.log('------------')

// Optional chaining (?.)
// if don't have properties value => return undefined
const oc=[1,2,3,4]
let oc1
console.log(oc[0]) //1
// console.log(oc2[0]) //Cannot read properties of undefined (reading '0')
console.log(oc1?.[0]) //undefined
console.log(oc?.oc1) // undefind
console.log('=--------=')

const oc2={id:12,name:'aa'}
let oc3
console.log(oc2?.oc3) //undefind
console.log(oc2?.id) //12
console.log(oc3?.id) //undefind
console.log('------------')

// // Nullish Coalescing (??) //ต้องการ operand 2 ตัว
// // ถ้าฝั่งซ้ายมี value : return ค่าฝั่งซ้าย : ถ้า ไม่ จะreturn ค่าฝั่งขวา
let t
t = t ?? 'undefind'
t1 = [] ?? 2
t2 = null ?? 'null' 
console.log(t) //undefind
console.log(t1) //[] //length=0
console.log(t2) // null
console.log('------------')
