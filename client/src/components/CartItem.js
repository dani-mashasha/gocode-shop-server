import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 20,
  },
  media: {
    height: 0,
    paddingTop: '56%',
  },
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({props}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <CardMedia        
            className={classes.media}
            image={props.image}
            title={props.title}
            />
        <Typography>

        {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">-</Button>    {props.amount&& props.amount}    <Button size="small">+</Button>

      </CardActions>
    </Card>
  );
}
