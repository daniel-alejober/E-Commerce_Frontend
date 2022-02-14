import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrollToTop } from "../helpers/useScrollToTop";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletters";
import Footer from "../components/Footer";
import { Container, ContainerFlex, Filter } from "../styles/containers";
import { Title, SpanFilter } from "../styles/text";
import { SelectOptions, Select } from "../styles/inputs";

const ProductList = () => {
  useScrollToTop();
  const location = useLocation();
  /**
   * *Vamos a dividir el string de pathname con .split()
   * * lo dividira cada vez que encuentre un "/" y los valores quedan en un array
   * * como la ruta es /products/jeans lo dividira en 3 ya que hay dos /
   * * ['', 'products', 'jeans'] y tomaremos el segundo elemento [0,1,2]
   * ! Ese sera nuestra categoria-- nu nombre "jeans"
   */
  const categoria = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  /**
   * *Para el sorteo lo pusimos directamente en el select ya que es solo un elemento
   */
  const [sort, setSort] = useState("newest");

  /**
   * *Esta funcion se escarga de guardar lo que seleccionemos en los options,
   * !copiar estar funcion en el futuro
   */
  const handleFilters = (e) => {
    setFilter({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Shopping</Title>
      <ContainerFlex>
        <Filter>
          <SpanFilter>Filter Products:</SpanFilter>
          <Select onChange={handleFilters} defaultValue={"color"} name="color">
            <SelectOptions value="color">Color</SelectOptions>
            <SelectOptions>White</SelectOptions>
            <SelectOptions>Black</SelectOptions>
            <SelectOptions>Red</SelectOptions>
            <SelectOptions>Blue</SelectOptions>
            <SelectOptions>Yellow</SelectOptions>
            <SelectOptions>Green</SelectOptions>
            <SelectOptions>Beige</SelectOptions>
            <SelectOptions>Gray</SelectOptions>
          </Select>
          <Select onChange={handleFilters} defaultValue={"size"} name="size">
            <SelectOptions value="size">Size</SelectOptions>
            <SelectOptions>XS</SelectOptions>
            <SelectOptions>S</SelectOptions>
            <SelectOptions>M</SelectOptions>
            <SelectOptions>L</SelectOptions>
            <SelectOptions>XL</SelectOptions>
          </Select>
        </Filter>
        <Filter>
          <SpanFilter>Sort Products:</SpanFilter>
          <Select
            onChange={(e) => setSort(e.target.value)}
            defaultValue={"newest"}
          >
            <SelectOptions value="newest">Newest</SelectOptions>
            <SelectOptions value="asc">Price (asc)</SelectOptions>
            <SelectOptions value="desc">Price (desc)</SelectOptions>
          </Select>
        </Filter>
      </ContainerFlex>
      <Products categoria={categoria} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
