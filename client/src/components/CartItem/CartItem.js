import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Divider } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext.js";
import useStyles from "./style.js";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartItem({ props }) {
  const classes = useStyles();
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
      </div>

      <div>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>

        <div className={classes.amount}>
          <Button onClick={removeFromCart} value={props._id} size="xs">
            <RemoveIcon value="svg" />
          </Button>{" "}
          <h2>{props.amount && props.amount} </h2>
          <Button onClick={addToCart} size="xs" value={props._id}>
            <ControlPointIcon text={true} />
          </Button>
        </div>
        <Typography className={classes.flexCenter}>
          {props.amount
            ? Math.round(props.price * props.amount * 100) / 100
            : props.price}
          $
        </Typography>
      </div>
    </div>
  );
}
