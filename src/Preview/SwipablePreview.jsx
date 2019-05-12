import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {MenuThingy} from './MenuThingy';
import SwipeableViews from 'react-swipeable-views';
import {Table} from '../Table';
import {Preview} from './Preview';
import { DetailView } from './DetailView';


const useStyles = makeStyles(theme => ({
}));

export const SwipeablePreview = ({price, tags, title, height}) => {
  const classes = useStyles();
  return (
    <SwipeableViews
      containerStyle={{height}}
      axis="y"
      resistance
      enableMouseEvents      
      slideStyle={{height}}
    >
      <Preview/>
      <DetailView/>
    </SwipeableViews>

  );
}

Preview.defaultProps = {
  tags: [],
}

