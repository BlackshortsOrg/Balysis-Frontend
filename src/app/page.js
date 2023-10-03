"use client";

import LeftPane2 from "@/components/LeftPane2";
import useDragDivider from "@/hooks/useDragDivider";
import RightPane from "@/components/RightPane";
import SubmissionContext from "@/context/SubmissionContext";
import { useState } from "react";
import DividerIconSVG from "@/components/svgs/DividerIcon";
import LeftPane from "@/components/LeftPane";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ChartContext from "@/context/CharContext";

export default function Home() {
  const [submissionId, setSubmissionId] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState("NOT STARTED");
  const [dragging, setDragging] = useState(0);

  return (
    <SubmissionContext.Provider
      value={{
        submissionId,
        setSubmissionId,
        submissionStatus,
        setSubmissionStatus,
      }}
    >
      <ChartContext.Provider value={{ dragging, setDragging }}>
        <div>
          <PanelGroup direction="horizontal">
            <Panel collapsible={true} defaultSize={55} minSize={30}>
              <LeftPane />
            </Panel>
            <PanelResizeHandle className="w-3 bg-[#04192F] flex flex-col justify-center hover:cursor-ew-resize">
              <DividerIconSVG />
            </PanelResizeHandle>
            <Panel
              collapsible={true}
              minSize={31.69}
              onResize={(x) => {
                setDragging(dragging + 1);
              }}
            >
              <RightPane />
            </Panel>
          </PanelGroup>
        </div>
      </ChartContext.Provider>
    </SubmissionContext.Provider>
  );
}
