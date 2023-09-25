import React from "react";
import fivestar from "../Assets/fivestar.svg";
import Icon from "../Assets/Icon";
import { upperCase } from "lodash";
const Card = ({ minor, name, major}) => {
  return (
    <div className="h-4/5 w-6/7 flex flex-col items-center card m-6 gap-6 py-6 px-12">
      <div className="rounded-full h-20 w-20"><img src={Icon.ayushPhoto} className=" h-20 w-20 rounded-full"/></div>
      <div className="font-montserrat font-bold text-xl">{upperCase(major)}</div>
      <div className="font-montserrat font-normal leading-8">{minor}</div>
      <div className="">
        <img src={fivestar} alt="stars"/>
      </div>
      <div className="text-gray-lightGray mb-6">{name}</div>
    </div>
  );
};
export default Card;
