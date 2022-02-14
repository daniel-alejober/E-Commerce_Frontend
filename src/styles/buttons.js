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
export const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid black")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const CheckButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${black};
  color: ${white};
  font-weight: 600;
  border-radius: 0.1rem;
  border: none;
  cursor: pointer;
`;
