import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  /**
   * *useLocation() no da un objeto donde nos da la ruta de donde estamos,
   * *hash: ""
   * *key: "u8qyjw4p"
   * *pathname: "/products/jeans"
   * *search: ""
   * *state: null
   * * y gracia a eso podemos decir que cada vez que cambia la localizacion podemos ejecutar esa funcion
   */
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
};
