import React from "react";
import dynamic from "next/dynamic";
import useDragDivider from "@/hooks/useDragDivider";
import { DropDownArrow } from "./svgs/DropDownArrow";
import DropDown from "./DropDown";

const Graph = dynamic(() => import("./Graph"), { ssr: false });
const UpPane = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-5 px-6">
        <div className=" border-solid border-blue-600 border-x-2 border-y-2 rounded-md flex flex-row my-1">
        <DropDown list={["Profit and Loss graph", "Drawdown graph", "Month-wise analytics", "Week-wise analytics"]}/>
        </div>
        <div className=" border-solid border-blue-600 border-x-2 border-y-2 rounded-md flex flex-row justify-between my-1">
       <DropDown list={["Metric", "Documentation", "Leaderboard"]}/>
        </div>
      </div>
      <div>
        <Graph />
      </div>
    </div>
  );
};

export default UpPane;
