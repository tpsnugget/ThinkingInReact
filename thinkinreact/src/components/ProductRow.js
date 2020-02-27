import React, { Component } from "react"
import "./ProductCategoryRow.css"

class ProductCategoryRow extends Component{

   render(props){

      const { itemName, price, stocked } = this.props

      return(
         <div className="PR-main-container">
            <h4 style={{color: (stocked ? "inherit" : "red")}}>{itemName}{"  "}{price}</h4>
         </div>
      )
   }
}

export default ProductCategoryRow