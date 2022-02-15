import React from "react";
import { Add, Remove } from "@material-ui/icons";
import {
  ProductDetails,
  Details,
  ProductColor,
  Left,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Bottom,
} from "../styles/containers";
import { ImageCart } from "../styles/images";
import { ProductSpan, Hr } from "../styles/text";

const ProductPay = ({ product }) => {
  return (
    <>
      <Bottom>
        <ProductDetails>
          <ImageCart src={product.img} />
          <Details>
            <ProductSpan>
              <b>Product:</b> {product.title}
            </ProductSpan>
            <ProductSpan>
              <b>ID:</b> {product._id}
            </ProductSpan>
            <ProductColor color={product.color} />
            <ProductSpan>
              <b>Size:</b> {product.size}
            </ProductSpan>
          </Details>
        </ProductDetails>
        <Left>
          <ProductAmountContainer>
            <Add />
            <ProductAmount>{product.quantity}</ProductAmount>
            <Remove />
          </ProductAmountContainer>
          <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
        </Left>
      </Bottom>
      <Hr />
    </>
  );
};

export default ProductPay;
