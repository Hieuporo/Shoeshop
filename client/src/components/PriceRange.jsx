import { useState } from "react";
import { Slider, Typography } from "@material-ui/core";

const PriceRange = () => {
  const [value, setValue] = useState([20, 8000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <Typography gutterBottom style={{ fontSize: "16px" }}>
        Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={8000}
        style={{ fontSize: "16px" }}
      />

      <Typography gutterBottom style={{ fontSize: "16px" }}>
        ${value[0]} - ${value[1]}
      </Typography>
    </div>
  );
};

export default PriceRange;
