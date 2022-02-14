import styled from "styled-components";
import { black, white, green, gray, variantwhite } from "./colors";

export const Button = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 1rem;
  border: none;
  color: ${white};
`;

export const ButtonCategoryItems = styled(Button)`
  background-color: ${black};
`;

export const ButtonNewsLetters = styled(Button)`
  height: 100%;
  flex: 0.5;
  background-color: ${green};
`;

export const ButtonSlide = styled(Button)`
  font-size: 2rem;
  background-color: transparent;
  border: 2px solid ${gray};
  color: ${black};
`;

export const ButtonBuy = styled.button`
  padding: 1.5rem;
  border: 2px solid ${green};
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${variantwhite};
  }
`;
