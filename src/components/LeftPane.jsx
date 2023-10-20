"use client";
import React, { useEffect, useContext, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Tab } from "@headlessui/react";
import SubmissionContext from "@/context/SubmissionContext";
import CodeTab from "@/components/CodeTab";
import { DropDownArrow } from "./svgs/DropDownArrow";
import { AddIcon } from "./svgs/AddIcon";

const LeftPane = () => {
  const { setSubmissionId, setSubmissionStatus } =
    useContext(SubmissionContext);
  const [activeTab, setActiveTab] = useState(0);
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
    const dummyEditor = { ...codeEditor };
    const lastTab = parseInt(Object.keys(codeEditor).sort().slice(-1)[0]) + 1;
    dummyEditor[lastTab] = { code: "import balysis", tab: "New Tab" };
    console.log(dummyEditor);
    setCodeEditor(dummyEditor);
    setActiveTab(lastTab);
  };
  const handleTabChange = (i, value) => {
    setActiveTab(i);
    // codeEditor[activeTab] = editorRef.current.getValue();
    console.log(activeTab);
  };
  const handleEditorChange = (value) => {
    const dummy = { ...codeEditor };
    dummy[activeTab]["code"] = value;
    setCodeEditor(dummy);
  };
  const getEditorItems = () => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("codeEditor");
      if (storedValue) {
        console.log(JSON.parse(storedValue));
        return JSON.parse(storedValue);
      }
    }
  };
  const tabNameChange = (i, value) => {
    const dummy = { ...codeEditor };
    dummy[i]["tab"] = value;
    setCodeEditor(dummy);
  };
  const [codeEditor, setCodeEditor] = useState({
    0: { code: "import balysis", tab: "Strategy 1" },
  });
  useEffect(() => {
    // When you retrieve the value from localStorage, update the Editor's value
    const storedValue = localStorage.getItem("codeEditor");
    if (storedValue) {
      console.log("use effect called");
      console.log(storedValue);
      const editor_state = JSON.parse(storedValue);
      const tab_ids = Object.keys(editor_state).sort();
      const active_tab_id = tab_ids[0];
      setCodeEditor(editor_state);
      setActiveTab(active_tab_id);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("codeEditor", JSON.stringify(codeEditor));
  }, [codeEditor]);
  return (
    <div className="ml-2 mr-4 h-[90vh]">
      <div className="flex flex-row justify-start pt-4">
        <div className="flex-[65%] pt-2 overflow-x-scroll">
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(i, value) => handleTabChange(i, value)}
          >
            <Tab.List style={{ display: "flex", alignItems: "center" }}>
              {Object.keys(codeEditor)
                .sort()
                .map((i) => (
                  <div key={i}>
                    <CodeTab
                      tabTitle={codeEditor[i].tab}
                      setTabTitle={(title) => {
                        tabNameChange(i, title);
                      }}
                    />
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
        value={codeEditor[activeTab].code}
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
