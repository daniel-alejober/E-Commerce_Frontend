import React from "react";
import { useScrollToTop } from "../helpers/useScrollToTop";
import { Add, Remove } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {
  Container,
  WrapperCart,
  ContainerCategory,
  TopTexts,
  Bottom,
  Info,
  ProductDetails,
  Details,
  ProductColor,
  Left,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryItem,
} from "../styles/containers";
import {
  TitleCard,
  TopText,
  ProductSpan,
  Hr,
  H1,
  SpanText,
} from "../styles/text";
import { TopButton, CheckButton } from "../styles/buttons";
import { ImageCart } from "../styles/images";

const Cart = () => {
  useScrollToTop();
  return (
    <Container>
      <Navbar />
      <Announcement />
      <WrapperCart>
        <TitleCard>YOUR BAG</TitleCard>
        <ContainerCategory>
          <TopButton>CONINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </ContainerCategory>
        <Bottom>
          <Info>
            <Bottom>
              <ProductDetails>
                <ImageCart src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductSpan>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductSpan>
                  <ProductSpan>
                    <b>ID:</b> 91526748595
                  </ProductSpan>
                  <ProductColor color="red" />
                  <ProductSpan>
                    <b>Size:</b> 38
                  </ProductSpan>
                </Details>
              </ProductDetails>
              <Left>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </Left>
            </Bottom>
            <Hr />
          </Info>
          <Summary>
            <H1>ORDER SUMMARY</H1>
            <SummaryItem>
              <SpanText>Subtotal</SpanText>
              <SpanText>$ 30</SpanText>
            </SummaryItem>
            <SummaryItem>
              <SpanText>Estimated Shipping</SpanText>
              <SpanText>$ 5</SpanText>
            </SummaryItem>
            <SummaryItem>
              <SpanText>Shipping Discount</SpanText>
              <SpanText>$ -5</SpanText>
            </SummaryItem>
            <SummaryItem type="total">
              <SpanText>Total</SpanText>
              <SpanText>$ 30</SpanText>
            </SummaryItem>
            <CheckButton>CHECKOUT NOW</CheckButton>
          </Summary>
        </Bottom>
      </WrapperCart>
      <Footer />
    </Container>
  );
};

export default Cart;
