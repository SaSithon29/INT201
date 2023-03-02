// const { template } = require('@babel/core')
// // 64130500001 sasithon dontree
// class Book {
//     constructor(isbn, title = 'untitled', ebook = false) {
//         this.isbn = isbn
//         this.title = title
//         this.ebook = ebook
//         // constructor must initial authors property to an empty array ([]) without provided parameter.
//         this.authors = []
//     }

//     addAuthor(fn, ln) {
//         let a = { firstname: fn, lastname: ln }
//         return this.authors.push(a) // .push ได้ new array
//         // return the new length of the authors array.
//         //    return this.authors.length นับจาก[]

//     }

//     // getFirstAuthor()** : returns the first author object of book, 
//     // if no author then returns undefined.
//     getFirstAuthor() {
//         return this.authors?.[0] //must return maybe func'get%'
//     }

//     getCoAuthors() {
//         return this.authors.slice(1)
//     }

//     findAuthor(firstname, lastname) {
//         let authorFind = this.authors.find(fn => {
//             if (fn.firstname.toLowercase() === firstname.toLowercase()) {

//                 if (fn.lastname.toLowercase() === lastname.toLowercase())
//                     return true
//             } else return false

//         })
//         return authorFind
//     }

//     findAuthor(firstname, lastname) {
//         let authorFind = this.authors.find(fn => {
//             // if (fn.firstname.toLowerCase() === firstname.toLowerCase() && fn.lastname.toLowerCase() === lastname.toLowerCase())
//             // if (fn.firstname.toLowerCase() === firstname.toLowerCase()){
//             //     if(fn.lastname.toLowerCase() === lastname.toLowerCase())
//             //  return true
//             // }  
//     // ==================================================================================================
    
//             if(fn.firstname.toLowerCase() !== firstname.toLowerCase()||fn.lastname.toLowerCase() !== lastname.toLowerCase()){
//                 return false
//             } else return true
//         })
//         return authorFind
//     }

//     hasEbook() {
//         return this.ebook
//     }
// }

// // เช็คด้วยการสร้างโนดและสร้างอ็อบเจคตัวเองก่อน
// module.exports = Book

// // - test('output#1: _constructor_')
// // - test('output#2: _constructor and addAuthor_')
// // - test('output#3: _constructor, addAuthor, and getFirstAuthor_')
// // - test('output#4: _constructor, addAuthor, and getCoAuthors_')
