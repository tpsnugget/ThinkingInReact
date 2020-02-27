import React, { Component } from "react"
import "./ProductCategoryRow.css"

class ProductCategoryRow extends Component{

   render(props){

      const { category } = this.props

      return(
         <div className="PCR-main-container">
            <h4>{category}</h4>
         </div>
      )
   }
}

export default ProductCategoryRow