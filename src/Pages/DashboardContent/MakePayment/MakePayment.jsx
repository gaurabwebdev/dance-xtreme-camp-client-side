import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../Components/Shared/CheckOutForm/CheckOutForm";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);

const MakePayment = () => {
  const [, myCart] = useCart();
  const totalPrice = parseFloat(
    myCart.reduce((sum, cartItem) => sum + cartItem.price, 0).toFixed(2)
  );
  console.log(totalPrice);
  return (
    <div>
      <p>Make Payment</p>

      <div>
        <div className="max-w-3xl mx-auto my-20 border-2 border-secondary p-16 bg-gray-900 rounded-lg">
          <Elements stripe={stripePromise}>
            <CheckOutForm myCart={myCart} totalPrice={totalPrice} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
