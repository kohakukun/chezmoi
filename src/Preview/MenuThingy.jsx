import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import {foodTags } from './constants';

const useStyles = makeStyles(theme => ({
  menu: {
    background: 'red',
    maxHeight: '50px',
    width: '80%',
    minHeight: '50px',
    alignSelf: 'center',
    borderTopRightRadius: '9px',
    borderTopLeftRadius: '9px',
    padding: '9px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export const MenuThingy = ({price, tags}) => {
  const priceContent = [];
  for (let i = 0; i < price; i++) {
    priceContent.push(<MoneyIcon/>);
  }
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <div>
        {tags.map((tag)=> foodTags(tag))}
      </div>
      <div>
      {priceContent.length ? priceContent : <MoneyOffIcon/>}
      </div>
    </div>
  );
}

