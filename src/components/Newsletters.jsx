import React from "react";
import { Send } from "@material-ui/icons";
import { ContainerNewsletters, ContainerInputNew } from "../styles/containers";
import { TitleNewsletters, DescriptionNewsletters } from "../styles/text";
import { InputNewletters } from "../styles/inputs";
import { ButtonNewsLetters } from "../styles/buttons";

const Newsletters = () => {
  return (
    <ContainerNewsletters>
      <TitleNewsletters>Newsletter</TitleNewsletters>
      <DescriptionNewsletters>
        Get timely updates from your favourite products.
      </DescriptionNewsletters>
      <ContainerInputNew>
        <InputNewletters placeholder="Your email" />
        <ButtonNewsLetters>
          <Send style={{ fontSize: 20 }} />
        </ButtonNewsLetters>
      </ContainerInputNew>
    </ContainerNewsletters>
  );
};

export default Newsletters;
