import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51NUEcGAzQjuhFyYrMyDy8wwSveZmjBiWFCx83vgQkePnR4mu4hC8UfyBsylz7enDlmYMNUAinfH1qPeV6il4Wh0500hcPSkjhL');
const CheckOut = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3NZ4h6AzQjuhFyYr140q8cIn_secret_s4BIQT8otJqWqY9sdWEf81osr'
  };
  return (
    <Elements stripe={stripePromise}  options={options} >
      <CheckoutForm  />
    </Elements>  )
}

export default CheckOut