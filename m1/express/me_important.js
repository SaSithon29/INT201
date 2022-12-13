// // //Primitive : keep value
let n=1
let n1=n
console.log(n1) //1
console.log(n) //1
console.log('=--------=')
n1=10
console.log(n1) //10
console.log(n) //1
console.log('------------')

//// Object : reference types 
           // memory address = เก็บ ตำแหน่ง
//// //เข้าถึง object ด้วย key , Array ด้วย index
let std={ID:1001,name:'sasithon'}
let std1=std
console.log(std1)
console.log(std)
console.log('=--------=')

std1.name='jutarat'
console.log(std)
console.log(std1)
console.log('------------')

// // switch case
let midter=70
let grade
switch(midter>0){
    case (midter>=80) : grade='A'
    break;
    case (midter>=75) : grade='B+'
    break;
    case (midter>=70) : grade='B'
    break;
    case (midter>=65) : grade='C+'
    break;
    case (midter>=60) : grade='C'
    break;
    default : grade='F'
    break;
}
console.log(grade)