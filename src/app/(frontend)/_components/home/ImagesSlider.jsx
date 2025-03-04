"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";

const ImagesSlider = ({ images }) => {
  return (
    <div className="-rotate-6 mt-20 w-[105vw] -translate-x-10">
      <Slider
        width="270px"
        duration={80}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        {images.map((image, index) => (
          <Slider.Slide key={index}>
            <img
              src={image.url}
              alt="slider_image"
              className="w-60 aspect-square rounded-[30px] mx-5"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default ImagesSlider;
