import React from "react";
import Graph from "./Graph";
import useDragDivider from "@/hooks/useDragDivider";
import { DropDownArrow } from "./svgs/DropDownArrow";
const UpPane = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-5 px-6">
        <div className=" border-solid border-blue-600 border-x-2 border-y-2 rounded-md flex flex-row my-1">
          <p className="pl-2 text-[#41AEFD] font-bold pr-5">
            Profit and Loss Graph
          </p>
          <div className="mt-2 pr-2">
            <DropDownArrow />
          </div>
        </div>
        <div className=" border-solid border-blue-600 border-x-2 border-y-2 rounded-md flex flex-row justify-between my-1">
          <p className="pl-2 text-[#41AEFD] font-bold pr-24">Metric</p>
          <div className="mt-2 pr-2">
            <DropDownArrow />
          </div>
        </div>
      </div>
      <div>
        <Graph />
      </div>
    </div>
  );
};

export default UpPane;
