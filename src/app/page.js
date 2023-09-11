'use client'

import LeftPane from '@/components/LeftPane'
import useDragDivider from '@/hooks/useDragDivider'
import RightPane from '@/components/RightPane'
import SubmissionContext from '@/context/SubmissionContext'
import { useState } from 'react'
import DividerIconSVG from '@/components/svgs/DividerIcon'

export default function Home() {
  const onMouseDown = useDragDivider("leftplane")

  const [submissionId, setSubmissionId] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState("NOT STARTED");
  return (
    <SubmissionContext.Provider value={{ submissionId, setSubmissionId, submissionStatus, setSubmissionStatus }} >
      <div className='h-[92vh] flex w-[100vw]'>
        <div className='w-3 border-r-[#41AFFF] border-solid border-r-[1px]' />
        <div id="leftplane" className={"w-1/2 flex-grow-0 flex-shrink-0"}>
          <LeftPane />
        </div>
        <div className='w-3 bg-[#04192F] flex flex-col justify-center hover:cursor-ew-resize' onMouseDown={onMouseDown}>
          <DividerIconSVG />
        </div>
        <div className='flex-[100%] flex-shrink-1' >
          <RightPane />
        </div>
        <div className='w-3 border-l-[#41AFFF] border-solid border-l-[1px]' />
      </div>
    </SubmissionContext.Provider>
  )
}
