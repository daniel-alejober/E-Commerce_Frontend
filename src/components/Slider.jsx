import React, { useState } from "react";
import Slide from "./Slide";
import { sliderItems } from "../helpers/data";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { SliderContainer, Arrow, WrapperSlider } from "../styles/containers";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft style={{ fontSize: 50 }}></ArrowLeft>
      </Arrow>
      <WrapperSlider slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} item={item} />
        ))}
      </WrapperSlider>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight style={{ fontSize: 50 }}></ArrowRight>
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
