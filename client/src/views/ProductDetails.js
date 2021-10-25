import { Card, CardContent, CardMedia, Grid, IconButton, Link, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import Loading from "../components/Loader/Loader.js";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { CartContext } from "../contexts/CartContext.js";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      padding: theme.spacing(2),
      height: "90%",
      margin: "5px",
      textAlign:"center"
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
     add:{
        fontFamily: "Georgia",
        fontSize: "15px",
      },
  }));

function ProductDetails() {
    const [product, setProduct] = useState();
    const [loader, setLoader] = useState(true);
    const {addToCart} = useContext(CartContext); 


    const classes = useStyles();

    const {id} = useParams();

    useEffect(() => {
        fetch(`/api/products/${id}`)
        .then(res => res.json())
          .then(data =>{
            setProduct(data);
            setLoader(false)
             });
      });

    return(
    <>
    <Header/>
     {loader? <Loading/> :
                <Grid >    
            <Card className={classes.card}>                
                <CardMedia
                    className={classes.media}
                    image={product.image}
                    title={product.title}
                    component={Link} to={`/products/${product._id}`}
                    />
                    <Typography
                    className={classes.headline}
                    >{product.title}
                    </Typography>
                    <CardContent className={classes.details}>
                        <Typography variant="body2" color="textSecondary" className={classes.content} >
                             {product.description}
                        </Typography>
                    </CardContent>
                    <Typography className={classes.space}>
                            ${product.price}
                        </Typography>
                    <IconButton  className={classes.add} edge="start" color="inherit" aria-label="menu"  onClick = {addToCart} value = {product._id}>
                    <ShoppingBasketIcon /><p>Add to cart</p>
                  </IconButton>
                </Card>
                </Grid>
     }
     <Footer/>

     </>    
    )
}

export default ProductDetails;