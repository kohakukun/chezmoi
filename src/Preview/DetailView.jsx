import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  menu: {
    width: '100%',
    height: '100%',
    background: 'yellow',
  }
}));


export const DetailView = () => {
  const classes = useStyles();
  return  (
    <div className={classes.root}>
      Some description
    </div>

  );
}
