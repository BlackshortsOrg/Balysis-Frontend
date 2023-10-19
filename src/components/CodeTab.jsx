import React from "react";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Tab } from "@headlessui/react";
import SubmissionContext from "@/context/SubmissionContext";
const CodeTab = ({ defaultName }) => {
  const [visibility, setVisibility] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [tabTitle, setTabTitle] = useState(`Esharky ${defaultName}`);
  const inputRef = useRef(null);

  const deleteTab = () => {
    setVisibility((e) => !e);
  };
  const handleDoubleClick = () => {
    setIsEditing(true);
  };
  const handleChange = (event) => {
    setTabTitle(event.target.value);
  };
  const handleBlur = () => {
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  return (
    <div>
      {visibility && (
        <Tab className="justify-between bg-[#1E5684] rounded-t-lg mr-1 px-4 py-1 ui-not-selected:bg-opacity-50 focus:outline-none">
          <div className="flex justify-between">
            <div
              onDoubleClick={handleDoubleClick}
              className="inline-block px-2 text-white text-sm font-normal drop-shadow-2xl shadow-white"
            >
              {isEditing ? (
                <input
                  type="text"
                  value={tabTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={inputRef}
                  className="bg-[#1E5684] ui-not-selected:bg-opacity-50 focus:outline-none"
                />
              ) : (
                <span>{tabTitle}</span>
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mt-1 fill-[#41AFFF]"
              onClick={deleteTab}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Tab>
      )}
    </div>
  );
};

export default CodeTab;
