import React, { useEffect, useContext, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Tab } from "@headlessui/react";
import SubmissionContext from "@/context/SubmissionContext";
import CodeTab from "@/components/CodeTab";
import { DropDownArrow } from "./svgs/DropDownArrow";
import { AddIcon } from "./svgs/AddIcon";
// {
//     "sourceCode": "def EsharkyStrat(o,h,l,c,t):\tif (c < 200):\n\t\tbuy(MARKET_ORDER, qty=1)\n\telif (c > 200):\n\t\tsell(MARKET_ORDER, qty=1)",
//     "language": "python",
//     "userId": 1,
//     "submissionId": 2,
//     "startDate": "2020-01-01",
//     "endDate": "2020-12-31",
//     "timeframe": "1D",
//     "strategyName": "EsharkyStrat",
//     "symbol": "MSFT"
// }

const LeftPane = () => {
  const { setSubmissionId, setSubmissionStatus } =
    useContext(SubmissionContext);
  const [codeTab, setCodeTab] = useState([1]);
  const [activeTab, setActiveTab] = useState(1);
  const editorRef = useRef(null);
  const submitCode = async () => {
    const data = {
      sourceCode: editorRef.current.getValue(),
      language: "python",
      userId: 1,
      startDate: "2020-01-01",
      endDate: "2022-12-31",
      timeframe: "1D",
      strategyName: "EsharkyStrat",
      symbol: "MSFT",
    };
    const resp = await fetch("http://localhost:3000/backtest/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const res = await resp.json();
    setSubmissionId(res["id"]);
    setSubmissionStatus("STARTED");
  };
  const EditorOnMount = (editor, monaco) => {
    editorRef.current = editor;
    monaco.editor.defineTheme("blackshortsTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        // "editor.foreground": "#ffffff",
        "editor.background": "#001122",
      },
    });
    monaco.editor.setTheme("blackshortsTheme");
  };
  const addTab = () => {
    setCodeTab([...codeTab, [codeTab.length + 1]]);
    setCodeEditor([
      ...codeEditor,
      { id: codeEditor.length + 1, code: "monaco code here" },
    ]);
  };
  const handleTabChange = (index) => {
    setActiveTab(index);
    console.log(active);
  };
  const handleEditorChange = (value) => {
    setCodeEditor([...codeEditor, { id: codeEditor.length + 1, code: value }]);
  };
  const getEditorItems = () => {
    let value = localStorage.getItem("codeEditor");
    if (value) {
      return JSON.parse(value);
    }
  };
  const [codeEditor, setCodeEditor] = useState(
    getEditorItems() || [{ id: 1, code: "" }]
  );
  useEffect(() => {
    localStorage.setItem("codeEditor", JSON.stringify(codeEditor));
  }, [codeEditor]);
  return (
    <div className="ml-2 mr-4 h-[90vh]">
      <div className="flex flex-row justify-start pt-4">
        <div className="flex-[65%] pt-2 overflow-x-scroll">
          <Tab.Group>
            <Tab.List style={{ display: "flex", alignItems: "center" }}>
              {codeTab.map((i) => (
                <div key={i}>
                  <CodeTab tabtitle="Esharky" />
                </div>
              ))}
              <Tab
                className="ml-1 ui-selected:focus:outline-none"
                onClick={addTab}
              >
                <AddIcon />
              </Tab>
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="flex flex-1 border-solid border-blue-600 border-x-2 border-y-2 rounded-md justify-between my-1">
          <p className="pl-2 text-[#41AEFD] font-bold">Backtest</p>
          <div className="mt-2 pr-2">
            <DropDownArrow />
          </div>
        </div>
      </div>
      <Editor
        height="75vh"
        defaultLanguage="python"
        defaultValue="import balysis"
        onMount={EditorOnMount}
        theme="blackshortsTheme"
        onChange={handleEditorChange}
      />
      <div className="flex flex-row-reverse mt-2">
        <button className="mx-2 bg-[#41AFFF] px-4 rounded-md text-white font-semibold">
          Save
        </button>
        <button className="mx-2 bg-[#41AFFF] px-4 rounded-md text-white font-semibold">
          Save & Execute
        </button>
        <button
          className="mx-2 bg-[#41AFFF] px-4 rounded-md text-white font-semibold"
          onClick={async () => await submitCode()}
        >
          Execute
        </button>
      </div>
    </div>
  );
};

export default LeftPane;
