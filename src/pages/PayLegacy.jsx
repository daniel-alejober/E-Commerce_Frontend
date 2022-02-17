import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { clienteAxiosPublic } from "../helpers/axios";

/*en canidad son 2000 ya que stripe maneja centavos seran igual a 200
stripeKey es la clave publica */
const publicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const PayLegacy = ({ children, cart }) => {
  const [stripeToken, setStripeToken] = useState(null);

  let navigate = useNavigate();
  /*
   *Esta funcion solo genera un token que despues se lo pasaremos para que pueda mandar los datos
   *al backend
   */
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const respuesta = await clienteAxiosPublic.post("checkout/payment", {
          /*tokenId y amount son valores que ya le especificamos al backen que va a recibir
            por eso llevan ese nombre, le vamos a pasar la cantidad que esta en cart*/
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        /*despues de que los datos se envien al backend vamos a redireccionar al usuario
        a la pagina /success con un objeto llamado data que trae la respuesta del backend,
        tenemos que especificar que se llenara el state si no lo mandara null*/
        navigate("/success", { state: { data: respuesta.data } });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart.total]);
  return (
    <StripeCheckout
      name="DanielPuppy"
      image="https://avatars.githubusercontent.com/u/74944181?v=4"
      billingAddress
      shippingAddress
      description={`Your total is ${cart.total}`}
      amount={cart.total * 100}
      token={onToken}
      stripeKey={publicKey}
    >
      {children}
    </StripeCheckout>
  );
};

export default PayLegacy;
