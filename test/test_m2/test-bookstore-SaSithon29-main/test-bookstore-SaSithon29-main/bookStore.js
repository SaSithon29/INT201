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
    if (this.stores.filter(store => store.isbn === isbn) === undefined) { //** */
      this.stores.push({ isbn: isbn, stocks: stocks })
      return stocks
    }
    else {
      return -1
    }
  }
---------------------------------------------------------------------------
//   if(this.stores.find(book => book.isbn===isbn)===undefined){
//     this.stores.push({isbn:isbn, stocks:stocks})
//     return this.stores[this.stores?.length-1].stocks
//   }else return -1
//  }
    
      // return stocks



  sellBook(isbn, quantity) {
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
-------------------------------------------------------------------------
//   const index = this.stores.findIndex(book => book.isbn===isbn)
//   if(index===-1) return -1
//   if(this.stores[index].stocks<quantity) return 0
//   this.stores[index].stocks = this.stores[index].stocks-quantity
//   return quantity
==========================================================================
//   let find = this.findBookIndex(isbn)
//   if (find === -1) {
//   return -1
//   }
//   if (this.stores[find].stocks < quantity) return 0
   //// Otherwise, decreases the selling quantity from stocks value and 
   //// returns a selling quantity (means successfully selling).
//   this.stores[find].stocks = this.stores[find].stocks - quantity
//      return quantity
//  }
  
  
}

// คืนตามที่ขายได้

module.exports = BookStore
