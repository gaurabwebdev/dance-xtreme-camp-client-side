import React from "react";
import useCart from "../../../Hooks/useCart";
import MyCartTable from "../MyCartTable/MyCartTable";
import { FaWallet } from "react-icons/fa";

const MyClasses = () => {
  const [, myCart] = useCart();
  const totalPrice = myCart.reduce((sum, cartItem) => sum + cartItem.price, 0);
  console.log(myCart);
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-lg">Total Selected CLasses : {myCart?.length}</p>
        <p className="text-lg">Total Price : ${totalPrice}</p>
      </div>
      <div>
        <MyCartTable totalPrice={totalPrice} />
      </div>

      <div className="text-center mt-16">
        <button className="btn btn-secondary btn-sm">
          <FaWallet className="" />
          Proceed To Pay
        </button>
      </div>
    </div>
  );
};

export default MyClasses;
