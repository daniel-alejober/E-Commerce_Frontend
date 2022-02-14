import React from "react";
import {
  SlideContainer,
  InfoContainer,
  ContainerImg,
} from "../styles/containers";
import { ImageSlide } from "../styles/images";
import { TitleNewsletters, DescriptionSlide } from "../styles/text";
import { ButtonSlide } from "../styles/buttons";

const Slide = ({ item }) => {
  return (
    <SlideContainer bg={item.bg}>
      <ContainerImg>
        <ImageSlide src={item.img} alt={item.title}></ImageSlide>
      </ContainerImg>
      <InfoContainer>
        <TitleNewsletters>{item.title}</TitleNewsletters>
        <DescriptionSlide>{item.desc}</DescriptionSlide>
        <ButtonSlide>SHOW NOW</ButtonSlide>
      </InfoContainer>
    </SlideContainer>
  );
};

export default Slide;
