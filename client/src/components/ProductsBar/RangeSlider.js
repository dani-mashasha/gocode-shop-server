import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import {useContext} from 'react';

import { ProductsContext } from '../../contexts/ProductsContext.js';


const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const {setProducts, productsOrigin} = useContext(ProductsContext);


  const classes = useStyles();
  const [value, setValue] = React.useState([200, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setProducts(productsOrigin.filter(product => product.price >= newValue[0] && product.price <= newValue[1]));
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <Slider
        value={value}
        max = {1000}
        min = {0}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}