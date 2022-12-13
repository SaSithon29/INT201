const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
 if(word=== null||word===undefined) return undefined
  
 if(word.startsWith(startWord)){
  return word
 }
 else{
    return `${startWord}${word}`
 }
//  ถ้าต้องการผลลัพธ์ส่งคืนต้องเขียนรีเทิร์น
//  return word.startsWith(startWord)?word:`${startWord}${word}`
}
module.exports = fillStartWord
