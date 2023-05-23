import React, { useState } from "react";
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

export default function PriceFilter() {
  const [value, setValue] = useState([0, 1200]);
  const classes = useStyles();

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div>
      <div className=" mr-6">
        <Slider
          color="secondary"
          value={value}
          onChange={rangeSelector}
          max={2000}
          valueLabelDisplay="auto"
          classes={{
            root: classes.root,
          }}
        />
      </div>
      <div className=" mr-6 text-[#869EA0] text-l">Max. 1200 birr</div>
    </div>
  );
}
