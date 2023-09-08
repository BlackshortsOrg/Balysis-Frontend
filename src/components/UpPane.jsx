import React from 'react'
import Graph from './Graph'
import useDragDivider from '@/hooks/useDragDivider'
const UpPane = () => {
  const onLeftDividerMouseDown = useDragDivider("leftplane");
  const onTopDividerMouseDown = useDragDivider("rightplane");
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between mt-5 px-6' onMouseDown={onLeftDividerMouseDown}>
        <div className=' border-solid border-blue-600 border-x-2 border-y-2 rounded-md flex flex-row my-1' >
          <p className='pl-2 text-[#41AEFD] font-bold pr-5'>Profit and Loss Graph</p>
          <div className='mt-2 pr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M5.56859 5.42551C5.25552 5.74183 4.74448 5.74183 4.43141 5.42551L1.15263 2.11276C0.652663 1.60761 1.01049 0.75 1.72123 0.75L8.27877 0.75C8.98951 0.75 9.34734 1.60761 8.84737 2.11276L5.56859 5.42551Z" fill="#41AEFD" />
            </svg>
          </div>
        </div>
        <div className=' border-solid border-blue-600 border-x-2 border-y-2 rounded-md flex flex-row justify-between my-1' onMouseDown={onTopDividerMouseDown}>
          <p className='pl-2 text-[#41AEFD] font-bold pr-24'>Metric</p>
          <div className='mt-2 pr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M5.56859 5.42551C5.25552 5.74183 4.74448 5.74183 4.43141 5.42551L1.15263 2.11276C0.652663 1.60761 1.01049 0.75 1.72123 0.75L8.27877 0.75C8.98951 0.75 9.34734 1.60761 8.84737 2.11276L5.56859 5.42551Z" fill="#41AEFD" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <Graph />
      </div>

    </div>
  )
}

export default UpPane