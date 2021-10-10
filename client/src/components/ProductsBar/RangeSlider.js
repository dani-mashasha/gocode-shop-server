import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const {value, handleChangeSlider} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <Slider
        value={value}
        max = {1000}
        min = {0}
        onChange={handleChangeSlider}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}