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
          amount: cart.total,
        });
        console.log(respuesta);
        navigate("/success");
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
