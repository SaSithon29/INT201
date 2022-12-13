const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  // return []
  if (arrayOfString === null || arrayOfString === undefined) return undefined

  let oldMax = [''] //['hi'] =>> ['hey'] =>> ['hello']
  arrayOfString.forEach((Max) => {
    if (Max.length > oldMax[0].length) {
      oldMax = [Max]
         //  = hey
    }
    else if(Max.length === oldMax[0].length){
      oldMax.push(Max)
    }
  })
  return oldMax
}
module.exports = getMaxLengthString
