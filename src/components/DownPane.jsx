import React from "react";
import Table from "./Table";
const DownPane = () => {
  return (
    <div
      className="flex flex-row items-center justify-between"
      style={{ overflow: "scroll", height: "600px" }}
    >
      <Table />
      <Table />
    </div>
  );
};

export default DownPane;