import React, { useEffect, useState } from "react";
import { clienteAxiosPublic } from "../helpers/axios";
import { useScrollToTop } from "../helpers/useScrollToTop";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletters";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Right,
  ContainerFlex,
  FilterContainer,
  FilterColor,
  AddContainer,
  AmountContainer,
} from "../styles/containers";
import { H1, DescFooter, Price, FilterTitle, Amount } from "../styles/text";
import { ImageBuy } from "../styles/images";
import { FilterSize, SelectOptions } from "../styles/inputs";
import { ButtonBuy } from "../styles/buttons";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  useScrollToTop();
  const location = useLocation();
  /**
   * *Vamos a dividir el string de pathname con .split()
   * * lo dividira cada vez que encuentre un "/" y los valores quedan en un array
   * * como la ruta es /products/id lo dividira en 3 ya que hay dos /
   * * ['', 'products', '152rere1'] y tomaremos el segundo elemento [0,1,2]
   * ! Ese sera nuestra id
   */
  const id = location.pathname.split("/")[2];
  const [product, setproduct] = useState({});
  const [quantify, setquantify] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await clienteAxiosPublic.get(`products/find/${id}`);
        setproduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  /*Aumentaremos o disminuiremos la quantify de los productos */
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantify > 1 && setquantify(quantify - 1);
    } else {
      setquantify(quantify + 1);
    }
  };

  /**
   * *Esta funcion es para poder actualizar el carrito de compras
   */
  const handleClick = () => {
    /*
     *Aqui vamos a llenar el payload del redux, vamos a llenar el objeto
     *de de product que especificamos en el payload con product y ya que se llaman igual podemos
     *simplemente llamarlo product, y para poder mandarlo al redux tenemos que usar un hook
     !usaremos useDispatch para mandarlo al redux
     *pasamos todo el objeto del producto, la cantidad, color, tamaño,
     !al llamar igual color y size en lugar de mandar el array de colores y size
     !sustituye esos valores del objeto por estos nuevos ya que solo es un string de 1
     */
    dispatch(
      addProduct({
        ...product,
        quantify,
        color,
        size,
      })
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Right>
          <ImageBuy src={product.img} />
        </Right>
        <Right>
          <H1>{product.title}</H1>
          <DescFooter>{product.description}</DescFooter>
          <Price>${product.price}</Price>
          <FilterContainer>
            <ContainerFlex>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  key={color}
                  color={color.toLowerCase()}
                  onClick={() => setColor(color)}
                />
              ))}
            </ContainerFlex>
            <ContainerFlex>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                onChange={(e) => setSize(e.target.value)}
                defaultValue={"----"}
              >
                <SelectOptions value="----" disabled>
                  ----
                </SelectOptions>
                {product.size?.map((size) => (
                  <SelectOptions key={size}>{size}</SelectOptions>
                ))}
              </FilterSize>
            </ContainerFlex>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <div
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              >
                <Remove style={{ fontSize: 22 }} />
              </div>
              <Amount>{quantify}</Amount>
              <div
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer" }}
              >
                <Add style={{ fontSize: 22 }} />
              </div>
            </AmountContainer>
            <ButtonBuy onClick={handleClick}>ADD TO CART</ButtonBuy>
          </AddContainer>
        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
