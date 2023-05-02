import React from "react";
// import { useState } from 'react';
import Slider from '@material-ui/core/Slider';

export default function PriceFilter() {
 const [value, setValue] =  React.useState([2,8]);
  
 const rangeSelector = (event, newValue) => {
   setValue(newValue);
   console.log(newValue)
 };

 return (
   <div className="ml-6 mr-6" >
        <Slider
            value={value}
            onChange={rangeSelector}
            valueLabelDisplay="auto"

        />
  </div>  
);
}