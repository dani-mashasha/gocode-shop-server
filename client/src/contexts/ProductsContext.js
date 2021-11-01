import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setproductsOrigin(data);
        setCategories(Object.keys(groupBy(data, "category")));
      });
  }, []);

  const contexValus = {
    products,
    setProducts,
    productsOrigin,
    setproductsOrigin,
    categories,
    setCategories,
  };

  return (
    <ProductsContext.Provider value={contexValus}>
      {props.children}
    </ProductsContext.Provider>
  );
};
