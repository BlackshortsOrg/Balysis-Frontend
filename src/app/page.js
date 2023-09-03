'use client'

import LeftPane from '@/components/LeftPane'
import useDragDivider from '@/hooks/useDragDivider'
import RightPane from '@/components/RightPane'
import { MessageProvider } from '@/context/MessageContext'
export default function Home() {

  const onMouseDown = useDragDivider("leftplane")

  return (
    <MessageProvider>

    <div className='h-[92vh] flex '>
      <div className='w-3 border-r-[#41AFFF] border-solid border-r-[1px]' />
      <div id="leftplane" className={"w-1/2 flex-grow-0 flex-shrink-0"}>
        <LeftPane />
      </div>
      <div className='w-3 bg-[#04192F] flex flex-col justify-center hover:cursor-ew-resize' onMouseDown={onMouseDown}>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto' width="7" height="23" viewBox="0 0 7 23" fill="none">
          <path d="M0.500361 17.4287H6.09158C6.19055 17.4287 6.28729 17.4648 6.36957 17.5323C6.45185 17.5998 6.51598 17.6958 6.55385 17.808C6.59172 17.9203 6.60163 18.0438 6.58233 18.163C6.56303 18.2821 6.51538 18.3916 6.44541 18.4775L3.6498 21.9097C3.55595 22.0249 3.42868 22.0896 3.29597 22.0896C3.16326 22.0896 3.03599 22.0249 2.94214 21.9097L0.14653 18.4775C0.0765601 18.3916 0.0289125 18.2821 0.00961068 18.163C-0.00969111 18.0438 0.000219766 17.9203 0.0380901 17.808C0.0759605 17.6958 0.14009 17.5998 0.222372 17.5323C0.304654 17.4648 0.401393 17.4287 0.500361 17.4287Z" fill="#41AFFF" />
          <path d="M0.500361 4.66089H6.09158C6.19055 4.66086 6.28729 4.62481 6.36957 4.5573C6.45185 4.48978 6.51598 4.39383 6.55385 4.28158C6.59172 4.16932 6.60163 4.0458 6.58233 3.92664C6.56303 3.80747 6.51538 3.698 6.44541 3.61207L3.6498 0.179914C3.55595 0.0647278 3.42868 1.90735e-05 3.29597 1.90735e-05C3.16326 1.90735e-05 3.03599 0.0647278 2.94214 0.179914L0.14653 3.61207C0.0765601 3.698 0.0289125 3.80747 0.00961068 3.92664C-0.00969111 4.0458 0.000219766 4.16932 0.0380901 4.28158C0.0759605 4.39383 0.14009 4.48978 0.222372 4.5573C0.304654 4.62481 0.401393 4.66086 0.500361 4.66089Z" fill="#41AFFF" />
        </svg>
      </div>
      <div className='flex-[100%] flex-shrink-1' >
        <RightPane />
      </div>
      <div className='w-3 border-l-[#41AFFF] border-solid border-l-[1px]' />
    </div>
    </MessageProvider>
  )
}
