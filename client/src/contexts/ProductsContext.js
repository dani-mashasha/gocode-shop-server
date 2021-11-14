import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [productsOrigin, setproductsOrigin] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  async function getProducts() {
    const productsRes = await axios.get("/api/products");
    console.log(productsRes.data);
    setProducts(productsRes.data);
    setproductsOrigin(productsRes.data);
    setCategories(Object.keys(groupBy(productsRes.data, "category")));
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function onAdd(data) {
    await axios.post("/api/products", data);
    console.log("added sucssefully");
  }

  async function onDelete(id) {
    await axios.delete(`/api/products/${id}`);
    console.log("deleted sucssefully");
  }

  async function onUpdate(id, data) {
    await axios.put(`/api/products/${id}`, data);
    console.log("updated sucssefully");
  }

  const contextValus = {
    products,
    setProducts,
    productsOrigin,
    setproductsOrigin,
    categories,
    setCategories,
    onAdd,
    onDelete,
    onUpdate,
  };

  return (
    <ProductsContext.Provider value={contextValus}>
      {props.children}
    </ProductsContext.Provider>
  );
};
