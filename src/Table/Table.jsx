import React from 'react';
import fork from '../static/media/fork.svg';
import knife from '../static/media/knife.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  table: {
    background: 'green',
    flexGrow: '1',
    display: 'flex',
  },
  plate: {
    background: 'pink',
    flexGrow: 1,
  }
}));

export const Table = ({img}) => {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <img src={fork} alt="" key={'image'}/>
      <div className={classes.plate}>
        
      </div>
      <img src={knife} alt="" />
    </div>
  );
}