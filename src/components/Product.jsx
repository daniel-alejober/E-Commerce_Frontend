import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  Search,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import {
  ContainerProduct,
  Circle,
  ContainerInfoProduct,
  ContainerIcon,
} from "../styles/containers";
import { ImageProduct } from "../styles/images";

const Product = ({ item }) => {
  return (
    <ContainerProduct>
      <Circle></Circle>
      <ImageProduct src={item.img} />
      <ContainerInfoProduct>
        <ContainerIcon>
          <ShoppingCartOutlined style={{ fontSize: 25 }} />
        </ContainerIcon>
        <ContainerIcon>
          <Link to={`/product/${item._id}`}>
            <Search style={{ fontSize: 25 }} />
          </Link>
        </ContainerIcon>
        <ContainerIcon>
          <FavoriteBorderOutlined style={{ fontSize: 25 }} />
        </ContainerIcon>
      </ContainerInfoProduct>
    </ContainerProduct>
  );
};

export default Product;
