import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        
        return_url: "http://localhost:5173/paymentSuccees",
      },
    });

    if (error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <div className="w-[90%] md:w-1/2 mx-auto">
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <PaymentElement />
        <button disabled={!stripe} className="p-2 text-white rounded-lg bg-emerald-500/90">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
