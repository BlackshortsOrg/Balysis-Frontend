import Tag from '../Codeyourown/Tag'
import '../../app/globals.css'
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Codeeditor = () => {
  return (
    <>
    <div className='absolute top-24 left-6'>
    <Tag name="Abhishek"/>
    <div className='absolute top-0 left-[550px]'>
    <button className='outline-button'>Backtest 
    {/* icon */}
     </button>
    </div>
    <div className="border-[1px] border-[#41AEFD] w-[655px] h-[540px] rounded-lg ">
    <div className="bg-[#001122] opacity-20 ">
    </div>
    </div>
    </div>
    
    <div className='flex flex-row relative top-[690px] left-[28px] mb-2'>
    <h1 className='text-white font-regular text-base mr-2'>Settings</h1>
    <SettingsIcon />
    </div>
    <div className='flex flex-row items-center relative top-[650px] left-[450px]'>
     <button className='primary-btn'>Execute</button>
     <button className='primary-btn ml-3'>Save & Execute</button>
    </div>
    
    </>
    
  )
}

export default Codeeditor