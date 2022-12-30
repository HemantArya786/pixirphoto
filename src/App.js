import "./App.css";
import Slider from "./Slider";
import SidebarItems from "./SidebarItems";
import { useState } from "react";

const default_option = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [file, setFile] = useState(null);
  const [selectOptionIndex, setSelectOptionIndex] = useState(0);
  const [options, setOptions] = useState(default_option);
  const selectOption = options[selectOptionIndex];

  const handleSliderChange = (e) => {
    setOptions((prev) => {
      return prev.map((option, index) => {
        if (index !== selectOptionIndex) {
          return option;
        } else {
          return { ...option, value: e.target.value };
        }
      });
    });
  };

  const filterImage = () => {
    let filters = options.map((item) => {
      return `${item.property}(${item.value}${item.unit})`;
    });

    return { filter: filters.join(" ") };
  };
  // console.log(getImage());

  const uploadImage = () => {
    document.getElementById("imageSelect").click();
  };
  const selectImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container vh-100 ">
      <h1 className="text-center">
        <b>Pixir Photo</b>
      </h1>
      <div className="d-flex ">
        <div className="d-flex flex-column  col-sm-10 vh-100 border">
          <div
            className="main-image  border border-5  border-danger vh-100"
            style={filterImage()}
          >
            <img
              className="image-name"
              src={
                file
                  ? file
                  : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              alt=""
            />
          </div>

          <Slider
            min={selectOption.range.min}
            max={selectOption.range.max}
            value={selectOption.value}
            handleChange={handleSliderChange}
          />
        </div>
        <div className="sidebar col-sm-2 border-start vh-100 ">
          {options.map((option, index) => {
            return (
              <SidebarItems
                name={option.name}
                key={index}
                active={index === selectOptionIndex}
                handClicked={() => setSelectOptionIndex(index)}
              />
            );
          })}
          <input
            id="imageSelect"
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            onChange={selectImage}
          />
          <button
            onClick={uploadImage}
            className="sidebar-button w-75 border-0 my-1 py-4"
          >
            add image
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
