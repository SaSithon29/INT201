// browser open:import export || close: const require,module.export
// test open:const require,module.export || close:import export

// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

//64130500004 กษิดิ์เดช พลายเผือก
function paginateManagement(items, rows) {
//  - **products**: assign "items" parameter to initial products
// - **rowsPerPage**: assign "rows" parameter to set up number of rows per page
  const rowsPerPage = rows
  const products = items


  const showItemsOfCurrentPage = (currentPageNumber = 1) => {
    // firstly call getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) 
    // by sending three parameters: "products", a current "page number", and "rows per page". 
    const items = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)

    //Then you must dynamically create <li> elements for each single product 
    // item under <ul id="products"></ul>
    const ulProducts = document.getElementById('products')
    ulProducts.textContent = ''
    items.forEach(item => {
      // Each <li> element contains a text content 'ID:item id, NAME:item name'
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      ulProducts.appendChild(liElement)
    })
  }


  const pageHandler = (event) => {
    //getElementsByTagName method returns an HTMLCollection.
        // 'when a user click on any page number button'
    const btnAll = document.getElementsByTagName('button') //AllButton

    Array.from(btnAll).forEach(btn => {
      // remove stylesheet of previous page button and assign 
      // to original button stylesheet 'border: 1px solid #999' .
      const btnNotActive = document.getElementById(btn.id)
      btnNotActive.setAttribute('style', 'border: 1px solid #999')
    })

    if (event !== undefined) {
      // function to show items on a user’s page number and adding 
  // stylesheet 'background-color: LightSteelBlue' to a current page button.

      const btnActive = event.target
      btnActive.style = 'background-color: LightSteelBlue'
      showItemsOfCurrentPage(Number(event.target.id))
    } 
    else {
      // the first page must be shown as default page.
      const btnAtiveFirst = document.getElementById(1)
      btnAtiveFirst.style = 'background-color: LightSteelBlue'
      showItemsOfCurrentPage(1)
  }


  
  }
  const showPageNumbers = () => {
    // call getTotalPages(allItems, rowsPerPage)_ 
    const totalPage = getTotalPages(products, rowsPerPage)

    // must dynamically create <button> elements for showing each of 
    // page number under <div class="pagination">
    const ulPagination = document.querySelector('.pagination')

    // must assign a 'page number' "value" to  , attribute name 'id' 
    // for each <button>, until `<button id="totalPage">` of the last page
    for (let pages = 1; pages <= totalPage; pages++) {
      const btn = document.createElement('button')
      btn.id = pages
      btn.textContent = pages
      ulPagination.appendChild(btn)

      // Do not forget to "add button click hander function" to each <button> 
      // when user click each of page number, calling pageHandler function.
      btn.addEventListener('click', pageHandler)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()