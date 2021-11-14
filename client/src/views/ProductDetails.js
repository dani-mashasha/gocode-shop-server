import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader/Loader.js";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { CartContext } from "../contexts/CartContext.js";
import FadeIn from "react-fade-in";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import { AutoFixOffSharp } from "@mui/icons-material";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    height: "90%",
    margin: "5px",
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: "56%",
    backgroundSize: "contain",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    marginTop: theme.spacing(1),
  },
  content: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    fontSize: "15px",
  },
  headline: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    fontSize: "30px",
    fontFamily: "Georgia",
  },
  add: {
    fontFamily: "Georgia",
    fontSize: "15px",
  },
}));

function ProductDetails() {
  const [product, setProduct] = useState();
  const [loader, setLoader] = useState(true);
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const classes = useStyles();

  const { id } = useParams();

  const addProductCard = (e) => {
    addToCart(e);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  async function getProduct() {
    const productRes = await axios.get(`/api/products/${id}`);
    setProduct(productRes.data);
    setLoader(false);
    console.log(productRes.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={"page"}>
      {loader ? (
        <Loading />
      ) : (
        <Grid>
          <Card className={classes.card}>
            <FadeIn>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.title}
                component={Link}
                to={`/products/${product._id}`}
              />
              <Typography className={classes.headline}>
                {product.title}
              </Typography>
              <CardContent className={classes.details}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.content}
                >
                  {product.description}
                </Typography>
              </CardContent>
              <Typography className={classes.space}>
                ${product.price}
              </Typography>

              <IconButton
                className={classes.add}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={!isAdded ? addProductCard : null}
                value={product._id}
              >
                <ShoppingBasketIcon />
                {!isAdded ? (
                  <FadeIn>
                    <p>Add to cart</p>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    {" "}
                    <p>Successfully added</p>
                  </FadeIn>
                )}
              </IconButton>
            </FadeIn>
          </Card>
        </Grid>
      )}
    </div>
  );
}

export default ProductDetails;
