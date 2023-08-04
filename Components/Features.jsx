"use client"
import ReactDOM from "react-dom";
import FeaturesCard from "./FeaturesCard";
export default function Feature() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#000F20] text-6xl font-bold">Features</h1>
      </div>
      <div className="flex flex-row justify-around items-center">
        <FeaturesCard title="BACKTESTING" line1="25 free backtests every week" line2="20 paisa per backtest per year" line3="Ultra fast" line4="Unlimited backlests starting @ ₹533"/>
        <FeaturesCard title="FORWARD TESTING" line1="25 free backtests every week" line2="20 paisa per backtest per year" line3="Ultra fast" line4="Unlimited backlests starting @ ₹533"/>
        <FeaturesCard title="LIVE TRADE" line1="25 free backtests every week" line2="20 paisa per backtest per year" line3="Ultra fast" line4="Unlimited backlests starting @ ₹533"/>
      </div>

    </div>
  );
}
