const { template } = require('@babel/core')
//64130500001 Sasithon Dontree 
class BookMark {
  constructor(isbn,totalPages=0){
    this.isbn=isbn
    this.totalPages=totalPages
    this.bookMarks=[]
  }
  
  addBookMark(pageNumber) {
  if (pageNumber < 1 || pageNumber > this.totalPages) return this.bookMarks.length
        return this.bookMarks.push(pageNumber)
  }

  removeBookMark(pageNumber){
    const oldBook = this.bookMarks.length
    this.bookMarks =this.bookMarks.filter(book => book!==pageNumber)
    const newBook =this.bookMarks.length
   return oldBook===newBook ? undefined:pageNumber
  }
  // removeBookMark(pageNumber) {
//     if (pageNumber == null || pageNumber == undefined) return undefined
//     else {
//         let remove = this.bookMarks.find(page => page === pageNumber)
//         this.bookMarks = this.bookMarks.filter(page => page !== pageNumber)
//         return remove
//     }
// }

  goToFirstBookMark(){
    //returns the first bookMarks pageNumber. 
    // If there are no bookMarks in an array, // **return undefined.
    return this.bookMarks?.[0]
  }

  goToLastBookMark(){
    return this.bookMarks?.[this.bookMarks.length-1]
  }

  getBookMarks(){
    return this.bookMarks
  }
}
module.exports = BookMark
