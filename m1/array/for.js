let arr
let arr1=[5,10,15] 
let newArr =arr??[]
console.log(newArr) // []/empty array

let student={id:123,sex:"male"}
student.sex=student.sex?? 'N/A'
console.log(student.sex)



// //for..loop เช็คเงื่อนไข ; ;update ; ต้องรับค่า next index: let
for(let index=0;index<arr.length;index++){
  console.log(arr[index])
}

//for..of ;รับค่า const let var
//(variable ตัวแปรชั่วคราว of array/String )
for(const item of arr1){
    console.log(item)
}

//for..in
//(variable ตัวแปรชั่วคราว of object )
for(const prop in student){
    console.log(prop) //prop key = id ,sex
    console.log(student[prop]) // access prop.key = 123 ,male
student.id = student[id] ;[] //ระบุ expression ได้
}