import { ProductsContext } from "../../contexts/ProductsContext.js";
import { useContext } from "react";
import Loading from "../Loader/Loader.js";
import ProductsBar from "../ProductsBar/ProductsBar.js";
import { Grid } from "@material-ui/core";
import ProductCard from "../Product/ProductCard.js";
import FadeIn from "react-fade-in";

const Products = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div>
      <ProductsBar />
      <FadeIn>
        <Grid container>
          {products.length < 1 ? (
            <Loading />
          ) : (
            products.map((prod) => <ProductCard key={prod.id} {...prod} />)
          )}
        </Grid>
      </FadeIn>
    </div>
  );
};

export default Products;
