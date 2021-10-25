import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import { CartContext } from '../contexts/CartContext.js';

const useStyles = makeStyles({
  root: {
    minWidth: 20,
    display:"flex"
  },
  media: {
    height: "30px",
    width:"90px",
    paddingTop: '56%',
    backgroundSize: "contain"
  },
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    width:"125px"
  },
  pos: {
    marginBottom: 12,
  },
  noPadding: {
    padding:0,
    paddingBottom:"10px"
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function SimpleCard({props}) {
  const classes = useStyles();
  const {addToCart, removeFromCart} = useContext(CartContext); 
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
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          
          <CardActions className={classes.noPadding}>
             <Button onClick={removeFromCart} value={props._id} size="xs">-</Button>    {props.amount && props.amount}    <Button onClick={addToCart} size="xs" value={props._id}>+</Button>
          </CardActions>
          <Typography className={classes.flexCenter}>
            {props.amount? Math.round((props.price * props.amount ) * 100) / 100 : props.price}$
            
          </Typography>
        </CardContent>

     
    </Card>
  );
}
