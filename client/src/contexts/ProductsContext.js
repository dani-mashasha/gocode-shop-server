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
        console.log(data);
        setCategories(Object.keys(groupBy(data, "category")));
      });
  }, []);

  const onAdd = (data) => {
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onDelete = (id) => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const onUpdate = (id, data) => {
    fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const contexValus = {
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
    <ProductsContext.Provider value={contexValus}>
      {props.children}
    </ProductsContext.Provider>
  );
};
