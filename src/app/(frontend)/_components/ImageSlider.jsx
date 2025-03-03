"use client";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlider = ({ locale }) => {
  const [images, setImages] = useState([])
  const fetchData = async() => {
    try{

      const res = await fetch("http://localhost:3000/api/globals/sliders-images/")
      const data = await res.json()
      
      setImages(data.partners)
    } catch(error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <section dir="ltr" className="mt-12 w-screen h-[80vh] overflow-x-hidden">
      <Image
        alt="we care so we create"
        src={`/logos/slider_logo_${locale}.svg`}
        width={550}
        height={550}
        className="mx-auto"
      />
      <div className="-rotate-6 mt-20 w-[105vw] -translate-x-10">
        <Slider
          width="270px"
          duration={80}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {images.map((image, index) => (
            <Slider.Slide
              key={index}
            >
              <img
                src={image.url}
                alt="slider_image"
                className="w-60 aspect-square rounded-[30px] mx-5"
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageSlider;
