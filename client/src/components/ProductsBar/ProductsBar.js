import React, { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext.js";
import RangeSlider from "./RangeSlider.js";

const ProductsBar = () => {
  const { setProducts, productsOrigin, categories } =
    useContext(ProductsContext);
  const [filterdCategory, setFilterdCategory] = useState("all items");
  const [value, setValue] = React.useState([200, 500]);

  const handleChange = (e) => {
    FillterAll(false, e.target.value);
    setFilterdCategory(e.target.value);
    // e.target.value === "all items"? setProducts(productsOrigin):setProducts(productsOrigin.filter((p)=>p.category === e.target.value))
  };

  const FillterAll = (range, category) => {
    let fillterdProducts;
    category === "all items"
      ? (fillterdProducts = productsOrigin)
      : (fillterdProducts = productsOrigin.filter(
          (p) => p.category === category
        ));

    if (range) {
      fillterdProducts = fillterdProducts.filter(
        (product) => product.price >= range[0] && product.price <= range[1]
      );
    }
    setProducts(fillterdProducts);
  };

  const handleChangeSlider = (event, newValue) => {
    console.log(filterdCategory);
    //  let fillterdProducts;
    //  filterdCategory === "all items"? fillterdProducts = productsOrigin : fillterdProducts =productsOrigin.filter((p)=>p.category === filterdCategory)
    setValue(newValue);
    FillterAll(newValue, filterdCategory);
    //  setProducts(fillterdProducts.filter(product => product.price >= newValue[0] && product.price <= newValue[1]));
  };

  return (
    <div className="sort">
      <div className="collection-sort">
        <label>Filter by:</label>
        <select onChange={handleChange}>
          <option value="all items">all items</option>
          {categories ? (
            categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))
          ) : (
            <option />
          )}
        </select>
      </div>

      <div className="collection-sort">
        <label>Price range</label>
        <RangeSlider handleChangeSlider={handleChangeSlider} value={value} />
      </div>
    </div>
  );
};

export default ProductsBar;
