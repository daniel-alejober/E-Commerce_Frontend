import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KKDAwHVg71ulzYDgZRJyNTFHPFQBu9RDI73OBQJNaxy8B4vaU5pU2K6oVKNtfscAfnSYwZX790DT8fZI55RYsLe006TYiTIZI"
);
const FormPay = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    </div>
  );
};

const Pay = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <FormPay />
      </Elements>
    </div>
  );
};

export default Pay;
