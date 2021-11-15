import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext.js";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    height: "90%",
    margin: "5px",
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
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  headline: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
  },
  add: {
    fontFamily: "Georgia",
    fontSize: "15px",
  },

  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px",
  },
}));
const ProductCard = (props) => {
  const classes = useStyles();
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const addProductCard = (e) => {
    addToCart(e);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <Grid item xs={12} s={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
          component={Link}
          to={`/products/${props._id}`}
        />
        <Typography className={classes.headline}>{props.title}</Typography>
        <CardContent className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.content}
          >
            {props.description}
          </Typography>
        </CardContent>

        <div className={classes.cardFooter}>
          <IconButton
            className={classes.add}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={!isAdded ? addProductCard : null}
            value={props._id}
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

          <Typography>${props.price}</Typography>
        </div>
      </Card>
    </Grid>
  );
};

export default ProductCard;
