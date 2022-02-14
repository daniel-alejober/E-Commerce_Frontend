import React, { useState, useEffect } from "react";
import Product from "./Product";
import { ContainerProducts } from "../styles/containers";
import { clienteAxiosPublic } from "../helpers/axios";

const Products = ({ categoria, filters, sort }) => {
  /**
   * *Vamos a definir los estados, lo vamos a guardar en un array
   */
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  /**
   * * ciente axios ya trae http://localhost:4000/api/ integrada
   * *Cada vez que una categoria cambia se efectuara el useEffect, y asi solo obtendremos los
   * *elementos que estan guardados en la base de datos,
   * *en el backend especificamos que hariamos un query en product.js para poder buscar los productos,
   * * hay dos tipos de busqueda category y new
   * * si existe una categoria vas a mostrarme los elementos que cuenten con usa categoria
   * * si no me muestras todos
   */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await clienteAxiosPublic.get(
          categoria ? `products?category=${categoria}` : "products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categoria]);

  /**
   * *Si hay categorias entonces setFilterProducts se llena con los productos que son los que previamente
   * *obtuvimos de la db, los vamos a filtrar (ya que es un array de objetos)
   * *comparando con el filters, que son las opciones del SELECT que le pasamos por propiedades,
   * !Object.entries() convierte los objectos en arrays ejemplo
   * ? const obt = {foo:'foo', abc: 'abc?} => [['foo','foo'],['abc','abc']]
   * * como los filtros vienen en forma de objeto los convertira en arrays
   * *{color: 'Black', size: 'XS'} => 0: ['color', 'Black'] 1:['size', 'XS'],
   * * el metodo every() todos los elementos del array deben cumplir una condicion,
   * * tomara la clave y el valor de cada arrays, y tomara la key de cada item,
   * * si la key de cada array incluye un valor, lo vamos a
   * *con esto ya nos mostrara los elementos filtrados en tiempo real
   */
  useEffect(() => {
    categoria &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, categoria, filters]);

  /*
   * *Ahora los vamos a empezar a filtrar por precios, del mas nuevo al mas viejo
   * o viceversa tambien por precio del mas caro al mas barato y viceversa,
   * en prev se encuentran guardados todos los productos, y hacemos una copia de ellos
   * en un array para poder asi usar el metodo .sort()
   */
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <ContainerProducts>
      {/*Aqui vamos a iterar los primeros valores son los que vienen con un filtro,
      dependiendo su categoria, precio etc y los segundos son todos los que vienen de la 
      base de datos*/}
      {categoria
        ? filteredProducts.map((item) => <Product key={item._id} item={item} />)
        : products.map((item) => <Product key={item._id} item={item} />)}
    </ContainerProducts>
  );
};

export default Products;
