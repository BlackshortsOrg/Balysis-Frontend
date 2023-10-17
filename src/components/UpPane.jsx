import React from "react";
import dynamic from "next/dynamic";
import useDragDivider from "@/hooks/useDragDivider";
import { DropDownArrow } from "./svgs/DropDownArrow";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Graph = dynamic(() => import("./Graph"), { ssr: false });
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
        <Dropdown className="bg-white">
      <DropdownTrigger>
        <Button 
          variant="bordered" style={{color:"white", paddingRight:"20px", paddingLeft:"20px", borderColor:"#41AFFF"}} 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="metric">Metric</DropdownItem>
        <DropdownItem key="documentation">Documentation</DropdownItem>
        <DropdownItem key="leaderboard">Leaderboard</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </div>
      </div>
      <div>
        <Graph />
      </div>
    </div>
  );
};

export default UpPane;
