// Declaration
// var: default เปลี่ยนค่าได้
// let: เปลี่ยนแปลงค่าได้
// const(constant): เปลี่ยนค่าไม่ได้

// // Scope
// // Block scope: เข้าถึงจากภายนอกไม่ได้
// // ไม่มี var ในการเก็บค่า เนื่องจากมันสามารถเข้าถึงได้ทุกที่
console.log('Block Scope')  
for(let num=1;num<=5;num++){
console.log(num)  
}
// console.log(num)  //ไม่สามารถเข้าถึงค่าได้จากนอก block นั้น ๆ 
// /// const: TypeError: Assignment to constant variable.
// //// let: ReferenceError: num is not defined
// //// var: 6 ออกนอกลูปพอดี
console.log('-------')

// function scope :have var, let, const 
        // function nameFunction{ }
let value=10 //15
function doSomething(x){
    // let value=10 // =>>27
    value=value+x

}
console.log('function Scope')  
doSomething(5)
console.log('5')
console.log(value) //ReferenceError: value is not defined

// Global scope :ไม่อยู่ในทั้ง 2 scope
//  สามารถเข้าถึงค่าได้จากส่วนไหนของโปรแกรมก็ได้
