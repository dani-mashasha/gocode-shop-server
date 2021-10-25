import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext.js';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      padding: theme.spacing(2),
      height: "90%",
      margin: "5px"
    },
    media: {
      height: 0,
      paddingTop: '56%',
      backgroundSize: "contain"

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
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical"
    },
    headline: {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical"
      },
     add:{
        fontFamily: "Georgia",
        fontSize: "15px",
      },
  }));
const ProductCard = (props) => {
    const classes = useStyles();
    const {addToCart} = useContext(CartContext); 
    return(
        <Grid item  xs={6} s={12} md={4} lg={3}>
        <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
            component={Link} to={`/products/${props._id}`}
            />
            <Typography
            className={classes.headline}
            >{props.title}
            </Typography>
            <CardContent className={classes.details}>
                <Typography variant="body2" color="textSecondary" className={classes.content} >
                     {props.description}
                </Typography>
            </CardContent>
            <Typography className={classes.space}>
                    ${props.price}
                </Typography>
            <IconButton  className={classes.add} edge="start" color="inherit" aria-label="menu"  onClick = {addToCart} value = {props._id}>
            <ShoppingBasketIcon /><p>Add to cart</p>
          </IconButton>
        </Card>
        </Grid>

    );

};



export default ProductCard;