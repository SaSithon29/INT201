// // for : must use let,var for เปลี่ยน value

// // for
// let arr=[1,2,3]
// for(let index=0;index<arr.length;index++){
//     // console.log(index) //0,1,2
//     console.log(arr[index]) //1,2,3
// }
// console.log('------------')

// // for..of : array ประกาศด้วย const let var ได้หมด
// arr[3]=4
// // for (variable (ตัวแปรชั่วคราว) of iterable:nameArray/String)
// for(const o of arr){
//     console.log(o)
// }
console.log('------------')

// for..in : object 
let student={ID:1001,name:'sasi'}
for(const std in student){
    console.log(std) //ID,name
    // console.log(std[3]) // return key
    console.log(student[std]) //value= 1001,sasi
//[]:ระบุ Expression ได้
}