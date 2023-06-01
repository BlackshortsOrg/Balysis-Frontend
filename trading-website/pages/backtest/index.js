import Flow from "./flow";
import PathakSideBar from '../../pathak-sidebar/App'
import PathakNavBar from '../../pathak-navbar'
import PathakUserProfile from '../../pathak-sidebar/Userprofile'

export default function Backtest() {
  return (
    <div style={{ backgroundColor: '#000f20' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0.15' }}>
          <PathakUserProfile />
        </div>
        <div style={{ flex: '0.85' }}>
          <PathakNavBar />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 0.15 }}>
          {/* <h1>Box</h1> */}
        </div>
        <div style={{ flex: 0.85, height: '100vh', backgroundColor: '#000000' }}>
          <Flow />
        </div>
      </div>
    </div>
  )
}
