import React, { useRef } from 'react'
import { Editor } from '@monaco-editor/react'
import { Tab } from '@headlessui/react'

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
    const editorRef = useRef(null);
    const submitCode = async () => {
        console.log("here")
        const data = {
            "sourceCode": editorRef.current.getValue(),
            "language": "python",
            "userId": 1,
            "submissionId": 2,
            "startDate": "2020-01-01",
            "endDate": "2022-12-31",
            "timeframe": "1D",
            "strategyName": "EsharkyStrat",
            "symbol": "MSFT"
        }
        console.log(data)
        await fetch("http://localhost:3000/backtest/new", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': "application/json; charset=UTF-8"
            }
        })
    }
    const EditorOnMount = (editor, monaco) => {
        editorRef.current = editor
        monaco.editor.defineTheme("blackshortsTheme", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                // "editor.foreground": "#ffffff",
                "editor.background": "#001122"
            }
        })
        monaco.editor.setTheme("blackshortsTheme")
    }
    return (
        <div className='ml-2 mr-4 h-[90vh]'>
            <div className='flex flex-row justify-start pt-4'>
                <div className='flex-[65%] pt-2'>
                    <Tab.Group>
                        <Tab.List style={{ display: 'flex', alignItems: 'center' }}>
                            <Tab className="justify-between bg-[#1E5684] rounded-t-lg px-4 py-1 ui-not-selected:bg-opacity-50 focus:outline-none">
                                <div className="flex justify-between">
                                    <div className='inline-block px-2 text-white text-sm font-normal drop-shadow-2xl shadow-white'> Esharky </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-1 fill-[#41AFFF]">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </Tab>
                            <Tab className="justify-between bg-[#1E5684] rounded-t-lg px-4 py-1 ui-not-selected:bg-opacity-50 focus:outline-none">
                                <div className="flex justify-between">
                                    <div className='inline-block px-2 text-white text-sm font-normal drop-shadow-2xl shadow-white'> Esharky </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-1 fill-[#41AFFF]">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </Tab>
                            <Tab className="justify-between bg-[#1E5684] rounded-t-lg px-4 py-1 ui-not-selected:bg-opacity-50 focus:outline-none">
                                <div className="flex justify-between">
                                    <div className='inline-block px-2 text-white text-sm font-normal drop-shadow-2xl shadow-white'> Esharky </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-1 fill-[#41AFFF]">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </Tab>
                            <Tab className='ml-1 ui-selected:focus:outline-none' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.4766" cy="12.4763" r="8.82205" transform="rotate(45 12.4766 12.4763)" fill="white" />
                                    <path d="M13.4105 13.3901L16.7446 13.3883C16.9757 13.3736 17.1925 13.2713 17.351 13.1024C17.5094 12.9335 17.5976 12.7106 17.5976 12.479C17.5976 12.2474 17.5094 12.0245 17.351 11.8556C17.1925 11.6867 16.9757 11.5845 16.7446 11.5697L13.4105 11.568L13.411 8.22577C13.411 8.10607 13.3874 7.98755 13.3416 7.87696C13.2958 7.76638 13.2286 7.6659 13.144 7.58126C13.0594 7.49662 12.9589 7.42948 12.8483 7.38368C12.7377 7.33787 12.6192 7.31429 12.4995 7.31429C12.3798 7.31429 12.2613 7.33787 12.1507 7.38368C12.0401 7.42948 11.9396 7.49662 11.855 7.58126C11.7703 7.6659 11.7032 7.76638 11.6574 7.87696C11.6116 7.98755 11.588 8.10607 11.588 8.22577L11.5885 11.568L8.25484 11.5693C8.13108 11.5623 8.00721 11.5807 7.89081 11.6233C7.77441 11.6659 7.66792 11.7318 7.57785 11.8169C7.48779 11.9021 7.41605 12.0047 7.36702 12.1186C7.31799 12.2324 7.2927 12.3551 7.2927 12.479C7.2927 12.603 7.31799 12.7256 7.36702 12.8394C7.41605 12.9533 7.48779 13.0559 7.57785 13.1411C7.66791 13.2262 7.77441 13.2921 7.89081 13.3347C8.00721 13.3773 8.13108 13.3957 8.25484 13.3888L11.5885 13.3901L11.588 16.722C11.588 16.9637 11.6841 17.1955 11.855 17.3665C12.0259 17.5374 12.2578 17.6334 12.4995 17.6334C12.7412 17.6334 12.9731 17.5374 13.144 17.3665C13.3149 17.1955 13.411 16.9637 13.411 16.722L13.4105 13.3901Z" fill="#000E1D" />
                                </svg>
                            </Tab>
                        </Tab.List>
                    </Tab.Group>
                </div>
                <div className='flex flex-1 border-solid border-blue-600 border-x-2 border-y-2 rounded-md justify-between my-1'>
                    <p className='pl-2 text-[#41AEFD] font-bold'>Backtest</p>
                    <div className='mt-2 pr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M5.56859 5.42551C5.25552 5.74183 4.74448 5.74183 4.43141 5.42551L1.15263 2.11276C0.652663 1.60761 1.01049 0.75 1.72123 0.75L8.27877 0.75C8.98951 0.75 9.34734 1.60761 8.84737 2.11276L5.56859 5.42551Z" fill="#41AEFD" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* <textarea className='bg-[rgba(0,17,34,0.2)] h-[75vh] w-full mt-2 border-solid border-x-[6px] border-y-[6px] border-[rgba(65,175,255,0.4)] rounded-md resize-none focus:border-blue-400 focus:ring-0 text-white' defaultValue={"Code Editor"} /> */}
            <Editor height="75vh" defaultLanguage='python' defaultValue='import balysis' onMount={EditorOnMount} theme='blackshortsTheme' className='' />
            <div className='flex flex-row-reverse mt-2'>
                <button className='mx-2 bg-[#41AFFF] px-4 rounded-md text-white font-semibold'>Save</button>
                <button className='mx-2 bg-[#41AFFF] px-4 rounded-md text-white font-semibold'>Save & Execute</button>
                <button className='mx-2 bg-[#41AFFF] px-4 rounded-md text-white font-semibold' onClick={async () => await submitCode()}>Execute</button>
            </div>
        </div >
    )
}

export default LeftPane