
import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Badge, Icon, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from '../../contexts/CartContext.js';
import SimpleCard from '../CartItem.js';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function CartDrawer() {

  const {cart,itemsInCart} = useContext(CartContext);
  // const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0); 

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {cart.length > 0?
          cart.map((product)=> <ListItem>
                <SimpleCard props = {product}/>
        </ListItem>):<div></div>
          
        }
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton style={{ color: '#FFFFFF'}}>
              <Badge badgeContent={itemsInCart} color="secondary" onClick={toggleDrawer(anchor, true)}>
              <AddShoppingCartIcon/>
              </Badge>
            </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
