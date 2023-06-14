import React, { useState, useRef, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
    "& .MuiSlider-rail": {
      height: 4,
      borderRadius: 4,
    },
    "& .MuiSlider-track": {
      height: 5,
      borderRadius: 4,
    },
    "& .MuiSlider-thumb": {
      width: 14,
      height: 14,
      marginTop: -4,
      marginLeft: -8,
    },
  },
});

export default function RadiusFilter({
  onResetSearchDistance,
  onSearchDistanceValueChange,
  setResetSearchDistance,
}) {
  const [value, setValue] = useState([0, 1]);
  const classes = useStyles();
  const initialFilterValue = useRef([0, 1]);

  const rangeSelector = (event, newValue) => {
    setValue([value[0], newValue]);
    onSearchDistanceValueChange(newValue);
  };

  const handleReset = () => {
    setValue(initialFilterValue.current);
    onSearchDistanceValueChange(initialFilterValue.current);
    setResetSearchDistance(false);
  };

  // Reset the PriceFilter when the resetSearchDistance prop is true
  useEffect(() => {
    if (onResetSearchDistance) {
      handleReset();
    }
  }, [onResetSearchDistance]);

  return (
    <div>
      <Slider
        color="secondary"
        value={value[1]} // Only the max value is controlled
        onChange={rangeSelector} // Update only the max value
        max={10}
        valueLabelDisplay="auto"
        classes={{
          root: classes.root,
        }}
      />
      <div className=" mr-6 text-[#869EA0] text-l">Max. 10 KM</div>
    </div>
  );
}
