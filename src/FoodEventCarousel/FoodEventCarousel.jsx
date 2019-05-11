import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import React, {useState} from 'react';
import {Preview} from '../Preview';


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));


export const FoodEventCarousel = ({foodEvents}) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <VirtualizeSwipeableViews
        slideCount={foodEvents.length}
        index={index}
        onChangeIndex={(index)=>{setIndex(index)}}
        slideRenderer={({index, key})=> {
          return <Preview key={key} {...foodEvents[index]}/>;
        }}
        enableMouseEvents
      />
    </div>
  );
}

FoodEventCarousel.defaultProps = {
  foodEvents: [
    {title: 'First test', price: 2, tags: ['vegan']},
    {title: 'Free  meal', price: 0, tags: ['glutenFree']},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree']},
  ]
}
