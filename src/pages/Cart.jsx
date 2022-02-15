import React from "react";
import { useScrollToTop } from "../helpers/useScrollToTop";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import PayLegacy from "./PayLegacy";
import ProductPay from "../components/ProductPay";
import Footer from "../components/Footer";
import {
  Container,
  WrapperCart,
  ContainerCategory,
  TopTexts,
  Bottom,
  Info,
  Summary,
  SummaryItem,
} from "../styles/containers";
import { TitleCard, TopText, H1, SpanText } from "../styles/text";
import { TopButton, CheckButton } from "../styles/buttons";

const Cart = () => {
  useScrollToTop();
  /*
   *Vamos a usar Redux para colocar los productos que haya seleccionado el usuario previamente
   !recuerda que al objeto que guarda los productos lo llamamos cart
   */
  const cart = useSelector((state) => state.cart);

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
          <PayLegacy cart={cart}>
            <CheckButton>CHECKOUT NOW</CheckButton>
          </PayLegacy>
        </ContainerCategory>
        <Bottom>
          <Info>
            {cart &&
              cart.products.map((product) => (
                <ProductPay key={product._id} product={product} />
              ))}
          </Info>
          <Summary>
            <H1>ORDER SUMMARY</H1>
            <SummaryItem>
              <SpanText>Subtotal</SpanText>
              <SpanText>$ {cart.total}</SpanText>
            </SummaryItem>
            <SummaryItem>
              <SpanText>Estimated Shipping</SpanText>
              <SpanText>$ 5.90</SpanText>
            </SummaryItem>
            <SummaryItem>
              <SpanText>Shipping Discount</SpanText>
              <SpanText>$ -5.90</SpanText>
            </SummaryItem>
            <SummaryItem type="total">
              <SpanText>Total</SpanText>
              <SpanText>$ {cart.total}</SpanText>
            </SummaryItem>
            <PayLegacy cart={cart}>
              <CheckButton>CHECKOUT NOW</CheckButton>
            </PayLegacy>
          </Summary>
        </Bottom>
      </WrapperCart>
      <Footer />
    </Container>
  );
};

export default Cart;
