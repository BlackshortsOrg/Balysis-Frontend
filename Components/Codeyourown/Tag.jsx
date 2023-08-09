import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
const Tag = (props) => {
  return (
    <div className="w-32 h-10 flex flex-row items-center justify-center bg-[#1E5887] mx-2 rounded-t-md ">
        <h1 className='font-medium text-sm text-white mr-3'>{props.name}</h1>
        <CancelIcon size={12} color="blue" />
    </div>
  )
}

export default Tag