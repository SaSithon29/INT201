const { template } = require('@babel/core')

function calculateBMI(weight, height) {
   return weight/Math.pow(height,2)
}
// ถ้าจะเอาผลลัพธ์ไปใช้ต้องรีเทิร์น
function getBMIMeaning(weight, height) {
  let BMI=calculateBMI(weight,height)

  if(BMI<18.5){
    return 'Underweight'
  }
  else if(18.5 <= BMI && BMI < 25){
    return 'Normal weight'
  }
  else{ return 'Overweight'
  }
  
}
// console.log(calculateBMI(65,1.8))
module.exports = getBMIMeaning
