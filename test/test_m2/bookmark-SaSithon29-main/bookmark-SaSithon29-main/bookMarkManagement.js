const { template } = require('@babel/core')
//64130500001 Sasithon Dontree 
class BookMark {
  constructor(isbn,totalPages=0){
    this.isbn=isbn
    this.totalPages=totalPages
    this.bookMarks=[]
  }

  addBookMark(pageNumber){
   return this.bookMarks.push(pageNumber >= 1 && pageNumber < this.totalPages)
  }

  removeBookMark(pageNumber){
    let bookOld = this.bookMarks.length
    this.bookMarks = this.bookMarks.filter(book =>{book.pageNumber!==pageNumber})
    let bookNew = this.bookMarks.length
   return (bookOld===bookNew)?undefined:pageNumber
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
