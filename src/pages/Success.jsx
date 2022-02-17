import React from "react";
import { useLocation } from "react-router-dom";

/*
 *Gracias a useLocation() podemos recuperar los datos que le pasamos en useNavigate,
 * de PayLegacy
 */

const Success = () => {
  let location = useLocation();

  return <div>Exito</div>;
};

export default Success;
