// src/ImageSlider.js
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import Image1 from "./image/4f24d8197dd5822ac01184e706b33b1d.jpg";
import Image2 from "./image/81637861f1566bb718979b454ce94eed.jpg";
import Image3 from "./image/e50799dcdb80bf3449b81005c01a6093.jpg";
import Image4 from "./image/кот.jpg";

const ImageSlider = () => {
  const [index, setActiveStep] = useState(0);
  const myImg = [
    {
      img: Image1,
    },
    {
      img: Image2,
    },
    {
      img: Image3,
    },
    {
      img: Image4,
    },
  ];
  let indexImage = myImg[index]?.img;

  // Function to go to the next picture
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const backToNextPicture = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep - 1 < 0 ? 0 : prevActiveStep - 1
    );
  };
  if (indexImage === undefined) return setActiveStep(0);

  // console.log();
  return (
    <div className="image-slider">
      <div>
        <h1>The story of one cat</h1>
      </div>
      <img alt="кот1" src={indexImage} />
      <div>
        <button
          onClick={() => {
            goToNextPicture();
          }}
        >
          Go
        </button>
        <button
          onClick={() => {
            backToNextPicture();
          }}
        >
          Back
        </button>
      </div>
      <div>
        {index + 1}/{myImg.length}
      </div>
    </div>
  );
};

export default ImageSlider;
