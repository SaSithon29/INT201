const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
 let fun=[n1,n2,n3]
  function slica (a,b){
    let num
    if(fun[a]>fun[b]) {
      num=fun[a]

      fun[a]=fun[b] //b>>a

      fun[b]=num
    }
  }

  slica(0,2)
  slica(0,1)
  slica(1,2)

  return { min: fun[0], mid: fun[1], max: fun[2] }
}
module.exports = minMedMax
