import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/*en canidad son 2000 ya que stripe maneja centavos seran igual a 200
stripeKey es la clave publica */
const publicKey =
  "pk_test_51KKDAwHVg71ulzYDgZRJyNTFHPFQBu9RDI73OBQJNaxy8B4vaU5pU2K6oVKNtfscAfnSYwZX790DT8fZI55RYsLe006TYiTIZI";
const PayLegacy = () => {
  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const respuesta = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            /*tokenId y amount son valores que ya le especificamos al backen que va a recibir
            por eso llevan ese nombre */
            tokenId: stripeToken.id,
            amount: 20000,
          }
        );
        console.log(respuesta);
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken,navigate]);
  return (
    <div>
      <StripeCheckout
        name="Daniel"
        image="https://cdn3.iconfinder.com/data/icons/animals-nature-body-add-on-vol-2/48/v-37-512.png"
        billingAddress
        shippingAddress
        description="Your total is $200"
        amount={20000}
        token={onToken}
        stripeKey={publicKey}
      >
        <button>Enviar</button>
      </StripeCheckout>
    </div>
  );
};

export default PayLegacy;
