import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FaCheckCircle, FaHandHoldingUsd } from "react-icons/fa";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = ({ totalPrice, myCart }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [trnxId, setTrnxId] = useState("");
  const [axiosSecure] = useAxios();
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post(`/create-payment-intent`, { totalPrice })
        .then((data) => {
          if (data.data.clientSecret) {
            setClientSecret(data.data.clientSecret);
          }
        });
    }
  }, [totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("connected");
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Error ", error);
      setCardError(error.message);
    } else {
      console.log("Payment Mehtod ", paymentMethod);
      setCardError("");
    }
    setPaymentProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "N/A",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setPaymentProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTrnxId(transactionId);
      const currentPaymentInfo = {
        email: user?.email,
        name: user?.displayName,
        transactionId,
        cartItemId: myCart.map((cartItem) => cartItem._id),
        className: myCart.map((cartItem) => cartItem.className),
        classId: myCart.map((cartItem) => cartItem.classId),
        paymentDate: new Date(),
        price: totalPrice,
      };
      console.log(currentPaymentInfo);
      axiosSecure.post("/payment", { currentPaymentInfo }).then((data) => {
        if (data.data.insertedId) {
          console.log(data.data);
        }
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#CC279C",
                "::placeholder": {
                  color: "#ffffff",
                },
              },

              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className=" text-center mt-16">
          <button
            className="btn btn-secondary btn-sm"
            type="submit"
            disabled={!stripe || !clientSecret || paymentProcessing}
          >
            <FaHandHoldingUsd className="text-xl" />
            Confirm Payment
          </button>
        </div>
      </form>
      {cardError && <p className="text-xl text-red-500 mt-8">{cardError}</p>}
      {trnxId && (
        <p className="text-xl text-success mt-8">
          Payment Completed. Your transaction id is: {trnxId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
