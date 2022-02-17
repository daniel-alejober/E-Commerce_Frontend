import { mobil } from "./responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { black, hoverBlack, green } from "./colors";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${black};
  font-size: 1.8rem;
  margin: 0 1rem;

  &:hover {
    color: ${hoverBlack};
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
`;
export const Title = styled(H1)`
  margin: 2rem;
`;

export const Logo = styled(H1)`
  text-align: center;
`;

export const Languaje = styled.span`
  font-size: 1.8rem;
  cursor: pointer;
`;

export const TitleCategoryItem = styled(H1)`
  color: ${hoverBlack};
  margin-bottom: 2rem;
`;
export const TitleNewsletters = styled(H1)`
  font-size: 7rem;
  margin-bottom: 2rem;
`;

export const DescriptionNewsletters = styled.h2`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const DescriptionSlide = styled.p`
  margin: 5rem 0;
  font-size: 2rem;
  font-weight: 500;
`;
export const Price = styled.p`
  font-weight: 100;
  font-size: 4rem;
`;
export const DescFooter = styled(DescriptionSlide)`
  margin: 2rem 0;
  font-size: 1.5rem;
`;

export const TitleH3 = styled.h3`
  margin-bottom: 3rem;
`;
export const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
`;

export const SpanFilter = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 2rem;
`;
export const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid ${green};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

export const TitleCard = styled(H1)`
  font-weight: 300;
  text-align: center;
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 1rem;
`;
export const ProductSpan = styled.span`
  ${mobil({ marginBottom: "1rem" })}
`;
export const SpanText = styled.span``;

export const Hr = styled.hr`
  background-color: #131212;
  border: none;
  height: 1px;
`;

export const TitleLogin = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
`;
