import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext.js";
import RangeSlider from "./RangeSlider.js";


const ProductsBar = () =>{
    const {setProducts, productsOrigin, categories} = useContext(ProductsContext);
  
    const handleChange = (e) =>{
      e.target.value === "all items"? setProducts(productsOrigin):setProducts(productsOrigin.filter((p)=>p.category === e.target.value))
   };
    return(
        <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange ={handleChange}>
              <option value = "all items">all items</option>
              {categories? categories.map((c) => <option key={c} value={c}>{c}</option>): <option/>}
          </select>
        </div>

        <div className="collection-sort">
          <label>Price range</label>
          <RangeSlider/>
        </div>
      </div>
    )
}

export default ProductsBar;