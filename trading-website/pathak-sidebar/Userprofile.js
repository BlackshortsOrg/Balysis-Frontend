import React from 'react'
import styles from './Userprofile.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Userprofile = () => {
  return (
    <div className={styles.userprofile}>
      <div className={styles.user_data}>
        <h2 className={styles.username}>Bruce Wayne</h2>
        <p className={styles.edit}>Edit Profile</p>
      </div>
      {/* <AccountCircleIcon className='profile-icon icon' /> */}
      <AccountCircleIcon className={`${styles.icon} ${styles.profile_icon}`} />
    </div>
  )
}

export default Userprofile
