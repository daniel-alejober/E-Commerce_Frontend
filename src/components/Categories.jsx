import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../helpers/data";
import { ContainerCategory } from "../styles/containers";

const Categories = () => {
  return (
    <ContainerCategory>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </ContainerCategory>
  );
};

export default Categories;
