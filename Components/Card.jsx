"use client"
import Image from "next/image";
import { memo } from "react";
import Photo from "../assets/ayushphotu.jpg";
import Fivestar from "../assets/fivestar.svg";
const Card = function ({ minor, name, major, source }) {
  // const stringg = source
  return (
    <div
      className="card flex flex-col items-center rounded-lg relative border-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out h-[90%] w-[80%] mt-[10%] ml-[10%] bg-transparent"
    >
      <div
        className="card-img flex justify-center mt-[10%]"
      >
        <Image
          src={Photo}
          alt="card-img"
          className="rounded-full w-24 h-24"
        />
      </div>
      <div className="card-font text-black font-bold text-center text-xs mt-[5%]">
        <h1>
          <b>{major}</b>
        </h1>
      </div>
      <div className="card-font text-[#000F20] text-center mt-[7%] ml-[5%] mr-[5%]">
        <p classNam="text-justify">{minor}</p>
      </div>
      <div className="mt-[5%]">
        <Image src={Fivestar} alt="stars" />
      </div>
      <div className="card-font text-[#000F20] mt-[7%]">
        <p>{name}</p>
      </div>
    </div>
  );
};
export default memo(Card);
