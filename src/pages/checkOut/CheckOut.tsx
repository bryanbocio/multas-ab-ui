import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51NUEcGAzQjuhFyYrMyDy8wwSveZmjBiWFCx83vgQkePnR4mu4hC8UfyBsylz7enDlmYMNUAinfH1qPeV6il4Wh0500hcPSkjhL"
);
const CheckOut = () => {
  const { pathname } = useLocation();
  const client = pathname.split("/")[2];
  const options = {
    // passing the client secret obtained from the server
    clientSecret: client,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckOut;
