import styled from "styled-components";
import { mobil } from "./responsive";
import {
  green,
  white,
  gray,
  beige,
  lightBlue,
  skyBlue,
  variantwhite,
} from "./colors";
// ${mobil({ textAling: "center", fontSize: "1.5rem", padding: "0 1rem" })}

export const Container = styled.div`
  width: 100%;
`;

export const ContainerFlex = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobil({ flexDirection: "column" })}
`;
export const Info = styled.div`
  flex: 3;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
export const ContainerAnnouncement = styled(ContainerFlex)`
  height: 3rem;
  background-color: ${green};
  color: ${white};
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ContainerNav = styled(ContainerFlex)`
  padding: 0.5rem 2rem;
`;
export const PositionContainer = styled(ContainerFlex)`
  flex: 1;
  justify-content: ${(props) => `flex-${props.position}`};
`;
export const SearchContainer = styled(ContainerFlex)`
  width: 50%;
  border: 1px solid ${gray};
  margin-left: 2.5rem;
  padding: 0.5rem;
`;
export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled(ContainerFlex)`
  width: 5rem;
  height: 5rem;
  background-color: ${beige};
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "2rem"};
  right: ${(props) => props.direction === "right" && "2rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;
`;
export const WrapperSlider = styled.div`
  height: 100%;
  display: flex;
  /*aqui va la logica del slider */
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
export const ContainerCategory = styled(ContainerFlex)`
  justify-content: space-between;
  padding: 2rem;
`;

export const CategoryItems = styled.div`
  flex: 1;
  margin: 0.5rem;
  height: 80vh;
  position: relative;
`;

export const ContainerInfomation = styled(ContainerFlex)`
  flex-direction: column;
  text-align: center;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s ease;

  &:hover {
    background-color: ${white};
    opacity: 0.6;
  }
`;
export const ContainerInfoProduct = styled(ContainerInfomation)`
  flex-direction: row;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
    z-index: 100;
  }
`;
export const ContainerProducts = styled(ContainerFlex)`
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2.5rem;
`;
export const ContainerProduct = styled(ContainerFlex)`
  flex: 1;
  margin: 0.5rem;
  min-width: 28rem;
  height: 35rem;
  background-color: ${lightBlue};
  position: relative;
`;
export const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-color: ${skyBlue};
  position: absolute;
`;

export const ContainerIcon = styled(ContainerFlex)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${white};
  margin: 1rem;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ContainerNewsletters = styled(ContainerFlex)`
  flex-direction: column;
  height: 60vh;
  background-color: ${variantwhite};
`;
export const ContainerInputNew = styled(ContainerFlex)`
  justify-content: space-between;
  width: 50%;
  height: 4rem;
  background-color: ${white};
  border: 1px solid ${gray};
`;
export const SlideContainer = styled(ContainerFlex)`
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
export const ContainerImg = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 5rem;
`;
export const Right = styled.div`
  flex: 1;
  padding: 0 5rem;
`;
export const Left = styled(ContainerFlex)`
  flex: 1;
  flex-direction: column;
  padding: 2rem;
`;

export const SocialIcon = styled(ContainerFlex)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: ${white};
  background-color: #${(props) => props.color};
  margin-right: 2rem;
  cursor: pointer;
`;

export const ContactItem = styled(ContainerFlex)`
  margin-bottom: 2rem;
  justify-content: flex-start;
`;
export const Filter = styled.div`
  margin: 2rem;
`;
export const Wrapper = styled(ContainerFlex)`
  padding: 5rem 0;
  align-items: flex-start;
`;

export const FilterContainer = styled(ContainerFlex)`
  width: 50%;
  margin: 3rem 0;
  justify-content: space-between;
`;
export const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${gray};
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
  cursor: pointer;
`;
export const AddContainer = styled(ContainerFlex)`
  width: 50%;
  justify-content: space-between;
`;
export const AmountContainer = styled(ContainerFlex)`
  justify-content: flex-start;
  font-weight: 700;
`;
export const WrapperCart = styled.div`
  padding: 2rem;
`;
export const TopTexts = styled.div`
  ${mobil({ display: "none" })}
`;

export const Details = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobil({ margin: ".5rem 0" })}
`;
export const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobil({ marginBottom: "1rem" })}
`;
export const ProductAmountContainer = styled(ContainerFlex)`
  justify-content: none;
  margin-bottom: 2rem;
`;
export const ProductAmount = styled.div`
  font-size: 2.4rem;
  margin: 0.5rem;
  ${mobil({ margin: ".5rem 1.5rem", fontSize: "3rem" })}
`;
export const ProductPrice = styled.div`
  font-size: 3rem;
  font-weight: 200;
  ${mobil({ margin: "1rem 0" })}
`;
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 1rem;
  padding: 2rem;
  max-height: 60vh;
  ${mobil({ marginTop: "2rem" })}
`;
export const SummaryItem = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "2.4rem"};
`;

export const ContainerLogin = styled(ContainerFlex)`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;
export const WrapperLogin = styled.div`
  width: 30%;
  padding: 2rem;
  background-color: ${white};
  border-radius: 1rem;
  ${mobil({ width: "90%" })}
`;
