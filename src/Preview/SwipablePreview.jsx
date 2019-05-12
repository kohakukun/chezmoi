import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { DetailView } from './DetailView';
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
      <DetailView {...restProps}/>
    </SwipeableViews>

  );
}

Preview.defaultProps = {
  tags: [],
}

