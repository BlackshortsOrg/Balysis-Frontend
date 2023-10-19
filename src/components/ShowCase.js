import React from "react";

const ShowCase = () => {
  return (
    <div className="w-full h-[90vh] bg-[#41afff]">
      <div className="mx-auto h-[60vh] w-[80%] bg-red-50 flex justify-center items-start balysis-box">
        <div className="text-center text-white">
          <h2 className="text-xl mt-12 font-semibold"> Introducing </h2>
          <h1 className="text-6xl font-bold mb-4 mt-2">Balysis</h1>
          <h3 className="text-xl font-semibold">
            Your one-stop place to create, customize, and backtest your trading
            strategies
          </h3>
          <h3 className="text-xl font-semibold">
            without writing a single line of code
          </h3>
        </div>
      </div>
      <div className="w-1/2 h-96 bg-black relative mx-auto bottom-[30%]"></div>
    </div>
  );
};

export default ShowCase;
