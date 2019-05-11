import React from 'react';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BrightnessIcon from '@material-ui/icons/Brightness1';

export const foodTags = {
  'vegan': (props) => <AirplanemodeActiveIcon {...props}/>,
  'glutenFree': (props) => <BrightnessIcon {...props}/>
}