import React, { useContext } from "react";
import UpPane from "./UpPane";
import DownPane from "./DownPane";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import HorizontalDividerIconSVG from "./svgs/HorizontalDividerIcon";

const RightPane = () => {
  return (
    <div className="h-[92vh] flex flex-col">
      <div className="w-3 border-r-[#41AFFF] border-solid border-r-[1px]" />
      <PanelGroup direction="vertical">
        <Panel>
          <UpPane />
        </Panel>
        <PanelResizeHandle>
          <div className="h-3 bg-[#04192F] flex justify-center hover:cursor-ns-resize">
            <HorizontalDividerIconSVG />
          </div>
        </PanelResizeHandle>
        <Panel
          defaultSize={30}
          minSize={30}
          maxSize={85}
          style={{ overflow: "scroll", height: "600px" }}
        >
          <DownPane />
        </Panel>
      </PanelGroup>
      <div className="w-3 border-l-[#41AFFF] border-solid border-l-[1px]" />
    </div>
  );
};

export default RightPane;
