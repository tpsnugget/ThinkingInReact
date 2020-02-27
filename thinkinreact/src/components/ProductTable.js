import React, { Component } from "react"
import "./ProductTable.css"
import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

class ProductTable extends Component {

   render(props) {

      const { data } = this.props

      const categoryName = []
      
      data.map( (data, i) => {
         if(i === 0){
            categoryName.push(data.category)
         }
         categoryName.map( catName => {
            if(catName !== data.category){
               categoryName.push(data.category)
            }
         } )
      } )

      console.log(categoryName)

      const sportingGoods = data.map((sport, i) => {
         if (i === 0 && sport.category === "Sporting Goods") {
            return (
               <>
                  <ProductCategoryRow category={sport.category} />
                  <ProductRow key={i} itemName={sport.name} price={sport.price} stocked={sport.stocked} />
               </>
            )
         }
         if (sport.category === "Sporting Goods") {
            return <ProductRow key={i} itemName={sport.name} price={sport.price} stocked={sport.stocked} />
         }
      })

      const electronics = data.map((device, i) => {
         if (i === 3 && device.category === "Electronics") {
            return (
               <>
                  <ProductCategoryRow category={device.category} />
                  <ProductRow key={i} itemName={device.name} price={device.price} stocked={device.stocked} />
               </>
            )
         }
         if (device.category === "Electronics") {
            return <ProductRow key={i} itemName={device.name} price={device.price} stocked={device.stocked} />
         }
      })

      return (
         <div>
            <div className="ProductTable-main-container">
               <div className="ProductTable-header">
                  <div className="ProductTable-div">Name</div>
                  <div className="ProductTable-div">Price</div>
               </div>
               {sportingGoods}
               {electronics}
            </div>
         </div>
      )
   }
}

export default ProductTable