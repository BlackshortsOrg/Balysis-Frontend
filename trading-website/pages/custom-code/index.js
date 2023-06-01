import PathakNavBar from '../../pathak-navbar'
import PathakUserProfile from '../../pathak-sidebar/Userprofile'

export default function CustomCode() {
  return (
    <div style={{ display: 'flex', backgroundColor: "#000f20" }}>
      <div style={{ flex: '0.15' }}>
        <PathakUserProfile />
      </div>
      <div style={{ flex: '0.85' }}>
        <PathakNavBar />
      </div>
    </div>
  )
}
