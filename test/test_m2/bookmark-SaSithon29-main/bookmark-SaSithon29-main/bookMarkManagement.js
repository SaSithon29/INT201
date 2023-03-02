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
//        if(pageNumber>0 && pageNumber<=this.totalPages) 
       //// ถ้า pageNumber มากกว่า 0 และน้อยกว่า totalPages ให้ push pageNumber 
       //// ไปใน bookMarks array
//            this.bookMarks.push(pageNumber)
//        return this.bookMarks.length

  
  removeBookMark(pageNumber){
    const oldBook = this.bookMarks.length
    this.bookMarks =this.bookMarks.filter(book => book!==pageNumber)
    const newBook =this.bookMarks.length
   return oldBook===newBook ? undefined:pageNumber
  }

//     if (pageNumber == null || pageNumber == undefined) return undefined
//     else {
//         let remove = this.bookMarks.find(page => page === pageNumber)
//         this.bookMarks = this.bookMarks.filter(page => page !== pageNumber)
//         return remove
//     }
  
//     const bookMarksRemove = this.bookMarks.find(book => book===pageNumber)
     //// หาelement ใน array ที่ตรงกับ pageNumber ถ้ามีรีเทรินตัวที่เจอออกมา ไม่มี undefined
//     this.BookMark = this.bookMarks.filter(book => book !== pageNumber)
    //// filter ข้อมูลเฉพาะที่ตรง condition คือ ไม่เท่ากับ  pageNumber
 //     return bookMarksRemove
  
  
  
  
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
