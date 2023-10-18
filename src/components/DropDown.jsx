import React from 'react'
import { DropDownArrow } from "./svgs/DropDownArrow";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useState } from 'react';

const DropDown = ({list}) => {
    const menuList = list;
    const [selectedMenuItem, setSelectedMenuItem]= useState("Metric");
  return (
    <div>
    <Dropdown className="bg-[#032D59]">
      <DropdownTrigger>
        <Button 
          variant="bordered" style={{color:"#41AFFF", font:"bold", paddingRight:"20px", paddingLeft:"20px", borderColor:"#41AFFF"}} 
        >
          <span className='font-bold outline-none'>{selectedMenuItem}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {
            menuList.map(value=>{
                return <DropdownItem key={value} className="text-[#41AFFF] bg-[#032D59] cursor-pointer px-4 py-2 rounded-lg" onClick={()=>setSelectedMenuItem(value)}>{value}</DropdownItem>
            })
        }
       
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}

export default DropDown