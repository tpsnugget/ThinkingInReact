import React, { Component } from "react"
import "./ProductTable.css"
import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

class ProductTable extends Component{

   render(){
      return(
         <div className="ProductTable-main-container">
            <h3>Product Table is up Man!</h3>
            <ProductCategoryRow />
            <ProductRow />
         </div>
      )
   }
}

export default ProductTable