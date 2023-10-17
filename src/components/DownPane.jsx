import React from "react";
import Table from "./Table";
const DownPane = () => {
  return (
    <div
      className="flex flex-row items-center justify-between border border-black-2"
      style={{ overflow: "scroll", height: "600px" }}
    >
      <Table />
      
    </div>
  );
};

export default DownPane;
