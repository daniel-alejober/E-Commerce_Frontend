import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  ContainerNav,
  PositionContainer,
  SearchContainer,
} from "../styles/containers";
import { Input } from "../styles/inputs";
import { StyledLink, H1, Languaje } from "../styles/text";
import { useSelector } from "react-redux";

const Navbar = () => {
  /*
   *Asi usamos el redux ya que "cart" fue el nombre que dimo podemos acceder a todas sus propiedades
   *products: []
   *quantity: 0
   *total: 0
   */
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <ContainerNav>
      <PositionContainer position="start">
        <Languaje>EN</Languaje>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "#836c6c", fontSize: 18 }} />
        </SearchContainer>
      </PositionContainer>
      <PositionContainer>
        <StyledLink to="/">
          <H1>E-Commerce</H1>
        </StyledLink>
      </PositionContainer>
      <PositionContainer position="end">
        <StyledLink to="/register">REGISTER</StyledLink>
        <StyledLink to="/login">SIGN IN</StyledLink>
        <StyledLink to="/card">
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined style={{ fontSize: 25 }} />
          </Badge>
        </StyledLink>
      </PositionContainer>
    </ContainerNav>
  );
};

export default Navbar;
