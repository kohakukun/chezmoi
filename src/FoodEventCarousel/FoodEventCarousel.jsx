import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';
import { Preview } from '../Preview';


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));


export const FoodEventCarousel = ({foodEvents, width, height}) => {
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    setIndex((index < foodEvents.length - 1) ? index + 1 : 0);
  };
  return (
    <VirtualizeSwipeableViews
        containerStyle={{height}}
        slideCount={foodEvents.length}
        index={index}
        onChangeIndex={(index)=>{setIndex(index)}}
        slideRenderer={({index, key})=> {
          return <Preview
            width={width}
            height={height}
            handleReject={()=>{
              alert('rejected');
              increaseIndex();
            }}
            handleAccept={()=>{
              alert('accepted');
              increaseIndex();
            }}
            key={key}
            {...foodEvents[index]}
          />
        }}
        enableMouseEvents
        height={height}
      />
  );
}

FoodEventCarousel.defaultProps = {
  foodEvents: [
    {title: 'First test', price: 2, tags: ['vegan']},
    {title: 'Free  meal', price: 0, tags: ['glutenFree']},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree']},
  ]
}
