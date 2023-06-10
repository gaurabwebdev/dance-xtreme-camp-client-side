import React from "react";
import useCart from "../../../Hooks/useCart";

const MyClasses = () => {
  const [refetch, myCart, isLoading] = useCart();
  console.log(myCart);
  return (
    <div>
      <p>My Selected Classes</p>
    </div>
  );
};

export default MyClasses;
