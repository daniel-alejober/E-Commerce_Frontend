import React from "react";
import { Link } from "react-router-dom";
import { CategoryItems, ContainerInfomation } from "../styles/containers";
import { ButtonCategoryItems } from "../styles/buttons";
import { TitleCategoryItem } from "../styles/text";
import { Image } from "../styles/images";

/**
 * * Aqui es donde le vamos a pasar la categroia en el link para que asi lo redireccione
 * *con la categoria ya el la url
 */
const CategoryItem = ({ item }) => {
  return (
    <CategoryItems>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt={item.title} />
        <ContainerInfomation>
          <TitleCategoryItem>{item.title}</TitleCategoryItem>
          <ButtonCategoryItems>SHOP NOW</ButtonCategoryItems>
        </ContainerInfomation>
      </Link>
    </CategoryItems>
  );
};

export default CategoryItem;
