import { MessageProvider } from '@/context/MessageContext'
import React from 'react'
import MessageDisplay from './MessageDisplay'
import useDragDivider from '@/hooks/useDragDivider'
import UpPane from './UpPane'
import DownPane from './DownPane'
const RightPane = () => {
    const onMouseDown = useDragDivider("rightplane")
  return (
    <div className='h-[92vh] flex flex-col'>
    <div className='w-3 border-r-[#41AFFF] border-solid border-r-[1px]' />
    My message here
            <MessageDisplay />
    <div id="rightplane" className={"w-1/2 flex-grow-0 flex-shrink-0"}>
      <UpPane />
    </div>
    <div className='h-3 bg-[#04192F] flex justify-center hover:cursor-ns-resize' onMouseDown={onMouseDown}>
  <svg xmlns="http://www.w3.org/2000/svg" className='my-auto' width="23" height="7" viewBox="0 0 23 7" fill="none">
    <path d="M17.4287 0.500361V6.09158C17.4287 6.19055 17.4648 6.28729 17.5323 6.36957C17.5998 6.45185 17.6958 6.51598 17.808 6.55385C17.9203 6.59172 18.0438 6.60163 18.163 6.58233C18.2821 6.56303 18.3916 6.51538 18.4775 6.44541L21.9097 3.6498C22.0249 3.55595 22.0896 3.42868 22.0896 3.29597C22.0896 3.16326 22.0249 3.03599 21.9097 2.94214L18.4775 0.14653C18.3916 0.0765601 18.2821 0.0289125 18.163 0.00961068C18.0438 -0.00969111 17.9203 0.000219766 17.808 0.0380901C17.6958 0.0759605 17.5998 0.14009 17.5323 0.222372C17.4648 0.304654 17.4287 0.401393 17.4287 0.500361Z" fill="#41AFFF" />
    <path d="M4.66089 0.500361V6.09158C4.66086 6.19055 4.62481 6.28729 4.5573 6.36957C4.48978 6.45185 4.39383 6.51598 4.28158 6.55385C4.16932 6.59172 4.0458 6.60163 3.92664 6.58233C3.80747 6.56303 3.698 6.51538 3.61207 6.44541L0.179914 3.6498C0.0647278 3.55595 1.90735e-05 3.42868 1.90735e-05 3.29597C1.90735e-05 3.16326 0.0647278 3.03599 0.179914 2.94214L3.61207 0.14653C3.698 0.0765601 3.80747 0.0289125 3.92664 0.00961068C4.0458 -0.00969111 4.16932 0.000219766 4.28158 0.0380901C4.39383 0.0759605 4.48978 0.14009 4.5573 0.222372C4.62481 0.304654 4.66086 0.401393 4.66089 0.500361Z" fill="#41AFFF" />
  </svg>
</div>

    <div className='flex-[100%] flex-shrink-1' >
      <DownPane />
    </div>
    <div className='w-3 border-l-[#41AFFF] border-solid border-l-[1px]' />
  </div>

       
  )
}

export default RightPane