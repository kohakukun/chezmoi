import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {MenuThingy} from './MenuThingy';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    background: 'blue',
    flexGrow: '0.2',

  },
  plate: {
    background: 'green',
    flexGrow: '0.8',
  },
  menu: {
    background: 'red',
    maxHeight: '50px',
    width: '80%',
    minHeight: '50px',
    alignSelf: 'center',
    borderTopRightRadius: '9px',
    borderTopLeftRadius: '9px',
    padding: '9px',
  }
}));

export const Preview = ({price, tags}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        title
      </div>
      <div className={classes.plate}>
        Plate
      </div>
      <MenuThingy price={3}
      
      tags={tags}/>
    </div>
  );
}

Preview.defaultProps = {
  tags: [],
}

