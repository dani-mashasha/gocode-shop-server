import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext.js";
import useStyles from "./style.js";

export default function CartItem({ props }) {
  const classes = useStyles();
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.noPadding}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
      </CardContent>

      <CardContent className={classes.noPadding}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>

        <CardActions className={classes.noPadding}>
          <Button onClick={removeFromCart} value={props._id} size="xs">
            -
          </Button>{" "}
          {props.amount && props.amount}{" "}
          <Button onClick={addToCart} size="xs" value={props._id}>
            +
          </Button>
        </CardActions>
        <Typography className={classes.flexCenter}>
          {props.amount
            ? Math.round(props.price * props.amount * 100) / 100
            : props.price}
          $
        </Typography>
      </CardContent>
    </Card>
  );
}
