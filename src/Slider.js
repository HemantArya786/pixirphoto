import React from "react";
import "./Slider.css";

function Slider({ min, max, value, handleChange }) {
  return (
    <div className="slider-container border  px-5">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="slider   my-5 "
      />
    </div>
  );
}

export default Slider;
