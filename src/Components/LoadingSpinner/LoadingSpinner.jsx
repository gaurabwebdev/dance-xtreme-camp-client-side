import React, { useState } from "react";
import Lottie from "react-lottie";
import spinner from "../../../public/loading-spinner.json";

const LoadingSpinner = () => {
  const [playLottie, setPlayLottie] = useState(true);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Lottie
        options={{
          animationData: spinner,
          loop: true,
          autoplay: playLottie,
        }}
        height={200}
        width={200}
      />
    </div>
  );
};

export default LoadingSpinner;
