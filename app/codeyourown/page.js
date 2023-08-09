
import NavbarCodeTool from '../../Components/Codeyourown/NavbarCodeTool'
import Movable from '../../Components/Codeyourown/Movable'
import Codeeditor from '../../Components/Codeyourown/Codeeditor'
const codeyourown = () => {
  return (<>
  <NavbarCodeTool />

  <div className='w-[100vw] h-[90vh]'>
  <Codeeditor />
  </div>
  </>
    
  )
}

export default codeyourown