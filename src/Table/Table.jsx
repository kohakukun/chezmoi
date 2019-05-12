import React from 'react';
import spoon from '../static/media/Spoon.svg';
import knife from '../static/media/Knife.svg';
import rim from '../static/media/Rim.svg';
import inner from '../static/media/Inner.svg';
import cloth from '../static/media/Cloth.svg';
import food from '../static/media/Pizza.png';
import { makeStyles } from '@material-ui/styles';
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';

const useStyles = makeStyles(theme => ({
  table: {
    background: 'green',
    flexGrow: '1',
    display: 'flex',
  },
  plate: {
    position: 'relative',
  },

  rim: {
    position: 'absolute',
    width: '360px',
    zIndex: '2'
  },

  inner: {
    position: 'absolute',
    width: '360px',
    zIndex: '0'
  },

  food: {
    position: 'absolute',
    width: '360px',
    zIndex: '1'
  },

  cloth: {
    position: 'absolute',
    width: '360px',
  },

  knife_asd:
  {
    height: '360px',
  },
  spoon_asd: {
    height: '360px',
  }
}));

export const Table = ({ img }) => {
  const classes = useStyles();

  let layout;
  if (window.innerHeight > window.innerWidth) {
    layout =
      <div style={{ height: 503 }}>
        <div className={classes.table}>
          <img className={classes.rim} src={rim} alt="" />
          <img className={classes.inner} src={inner} alt="" />
          <img className={classes.cloth} src={cloth} alt="" />
          <img className={classes.food} src={food} alt="" />
        </div>
      </div>
  }
  else {
    layout =
      <div style={{ height: 360 }}>
        <div className={classes.table}>
          <img className={classes.spoon_asd} src={spoon} alt="" />
          <div className={classes.table}>
            <img className={classes.rim} src={rim} alt="" />
            <img className={classes.inner} src={inner} alt="" />
            <img className={classes.cloth} src={cloth} alt="" />
            <img className={classes.food} src={food} alt="" />
          </div>
          <img className={classes.knife_asd} src={knife} alt="" />
        </div>
      </div>
  }
  return (
    layout
  );
}