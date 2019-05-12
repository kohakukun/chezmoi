import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {MenuThingy} from './MenuThingy';
import SwipeableViews from 'react-swipeable-views';
import {Table} from '../Table';

import { DetailView } from './DetailView';


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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

  }
}));

export const Preview = ({price, tags, title, height}) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div className={classes.title}>
          {title}
        </div>
        <Table/>
        <MenuThingy
          price={3}
          tags={['vegan']}
        />
      </div>
  );
}

Preview.defaultProps = {
  price: 2,
  title: 'Some Test',
  tags: ['vegan'],
}

