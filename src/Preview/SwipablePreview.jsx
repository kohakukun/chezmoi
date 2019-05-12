import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {FoodEventCard} from '../FoodEventCard';
import { Preview } from './Preview';

export const SwipeablePreview = ({height, ...restProps}) => {
  return (
    <SwipeableViews
      containerStyle={{height}}
      axis="y"
      resistance
      enableMouseEvents      
      slideStyle={{height}}
    >
      <Preview {...restProps}/>
      <FoodEventCard event={{...restProps}}/>
    </SwipeableViews>

  );
}

Preview.defaultProps = {
  tags: [],
}

