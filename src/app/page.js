"use client";

import LeftPane2 from "@/components/LeftPane2";
import useDragDivider from "@/hooks/useDragDivider";
import RightPane from "@/components/RightPane";
import SubmissionContext from "@/context/SubmissionContext";
import { useState } from "react";
import DividerIconSVG from "@/components/svgs/DividerIcon";
import LeftPane from "@/components/LeftPane";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Home() {
  const [submissionId, setSubmissionId] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState("NOT STARTED");
  return (
    <SubmissionContext.Provider
      value={{
        submissionId,
        setSubmissionId,
        submissionStatus,
        setSubmissionStatus,
      }}
    >
      <div>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={55} minSize={30}>
            <LeftPane />
          </Panel>
          <PanelResizeHandle className="w-3 bg-[#04192F] flex flex-col justify-center hover:cursor-ew-resize">
            <DividerIconSVG />
          </PanelResizeHandle>
          <Panel>
            <RightPane />
          </Panel>
        </PanelGroup>
      </div>
    </SubmissionContext.Provider>
  );
}
