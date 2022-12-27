const { template } = require('@babel/core')
//64130500001,sasithon,dontree

class BookStore {
  constructor() {
    this.stores = []
  }
  // // returns the index of first element in the array that matches the provided parameter isbn. 
  // // If no object matches, -1 is returned.
  findBookIndex(isbn) {
    return this.stores.findIndex(stores => stores.isbn === isbn)
  }

  addNewBook(isbn, stocks) {
    // adding a new book in a bookstore. 
    // All objects in the stores property must have a unique isbn. You must check whether the provided 
    // isbn parameter is in stores array or not. If there is no isbn in the stores array 
    // then creates an object with two properties: isbn and stocks with the provide parameters and adding it to the end of stores array. 
    // Returns stock value in case adding a new book into array successfully, otherwise return -1 if there are duplicate isbn in the stores array.

    if (this.stores.filter(store => store.isbn === isbn) === undefined) { //** */
      this.stores.push({ isbn: isbn, stocks: stocks })
      return stocks
    }
    else {
      return -1
    }

  }





  sellBook(isbn, quantity) {
    // reducing stocks value with a selling quantity. Firstly, you must search the provide parameter isbn in the stores array. If not found, 
    // return -1. 
    // If found, then you must check whether stocks value is enough for selling or not. 
    // In case the selling quantity is more than stocks value, return 0 (means unsuccessfully selling). 
    // Otherwise, decreases the selling quantity from stocks value and 
    // returns a selling quantity (means successfully selling).
    // // ประการแรก คุณต้องค้นหาพารามิเตอร์ให้ isbn ในอาร์เรย์ของร้านค้า หากไม่พบให้ส่งคืน -1 
    // หากพบก็ต้องตรวจสอบว่ามูลค่าหุ้นเพียงพอขายหรือไม่ 
    // กรณีปริมาณขายมากกว่าstocks คืนค่า 0 (หมายถึงขายไม่สำเร็จ) 
    // มิฉะนั้น ให้ลดปริมาณการขายจากมูลค่าหุ้นและส่งกลับปริมาณการขาย (หมายถึงการขายสำเร็จ)
    this.stores.filter(store => {
      if (store.isbn === isbn) {
        if (store.stocks >= quantity) {
          store.stocks = store.stocks - quantity //** */
        } else {
          return 0
        }
      } else {
        return -1
      }
    })
  }
}

// คืนตามที่ขายได้

module.exports = BookStore
