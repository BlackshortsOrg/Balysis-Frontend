import React from "react";
import Slider from "./Slider";
import Icon from "../Assets/Icon";
const Strategy = () => {
  return (
    <div className="w-full bg-white h-full pt-32">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-6 ml-20 mt-20">
          <div className="text-6xl font-semibold">
            Check out <br /> strategies and <br />
            backtest on data of <br /> your choice
          </div>
          <div className="text-lg font-semibold">
            Get live profit and loss statistics on market data <br />
            by the deployed and published strategies.
          </div>
          <div className="flex flex-row gap-4">
          <button className='bg-blue-balysisblue rounded-lg py-2 px-6 text-white text-base font-semibold flex-auto items-center'>Sign Up</button>
          <button className="font-semibold py-2 px-4 border-black border  rounded-lg flex-auto">Learn to use</button>
          </div>
        </div>
        <img src={Icon.moneyTree} />
      </div>

      <div className="strategy-slider h-screen -mt-16 relative w-full">
        <Slider/>
      </div>
    </div>
  );
};

export default Strategy;
