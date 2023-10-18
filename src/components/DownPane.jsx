import React from "react";
import Table from "./Table";
const DownPane = () => {
  return (
    <div
      className="flex flex-row items-center justify-center border border-black-2 pl-[1.6rem]"
      style={{ overflow: "scroll", height: "600px" }}
    >
      <Table />
      
    </div>
  );
};

export default DownPane;
