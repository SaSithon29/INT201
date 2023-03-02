const { template } = require('@babel/core')
// 64130500001 sasithon dontree
class Book {
    constructor(isbn, title = 'untitled', ebook = false) {
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }
    addAuthor(fn, ln) {
        //-****: creates an author object by 
        //assigning the firstname property with the provided parameter named _fn_ and
        //the lastname property with the provided parameter named _ln_. 
        //Then adding it to the end of authors array. 
        // You must return the new length of the authors array.
        return this.authors.push({ firstname: fn, lastname: ln })
    }

    getFirstAuthor() {
        return this.authors?.[0]
    }

    getCoAuthors(){
        return this.authors?.slice(1)
    }

    findAuthor(firstname, lastname) {
        return this.authors.find(author => (author.firstname.toLowerCase() === firstname.toLowerCase()) && (author.lastname.toLowerCase() === lastname.toLowerCase()))
    }

    hasEbook(){
        return this.ebook
    }

}
// ** : 
// returns the first author object that matches both firstname and lastname 
// parameters (case insensitive). If no author matches, 
// undefined is returned.






// เช็คด้วยการสร้างโนดและสร้างอ็อบเจคตัวเองก่อน
module.exports = Book

// - test('output#1: _constructor_')
// - test('output#2: _constructor and addAuthor_')
// - test('output#3: _constructor, addAuthor, and getFirstAuthor_')
// - test('output#4: _constructor, addAuthor, and getCoAuthors_')
