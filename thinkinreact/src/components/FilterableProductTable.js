import React, { Component } from "react"
import data from "../data"
import SearchBar from "./SearchBar"
import "./FilterableProductTable.css"
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component{

   render(){
      console.log(data)
      return(
         <div className="FPT-main-container">
            <h1>FilterableProductTable is up Man!</h1>
            <SearchBar />
            <ProductTable data={data} />
         </div>
      )
   }
}

export default FilterableProductTable