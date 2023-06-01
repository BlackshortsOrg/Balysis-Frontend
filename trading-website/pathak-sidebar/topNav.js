import React from 'react'
import styles from './topNav.module.css'
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

const TopNav = () => {
  return (
    <div className='topnav'>
      <div className="icons">
        <ViewInArOutlinedIcon className='icon icon-1' />
        <p className={styles.name}>Dashboard</p>
      </div>
      <div className="icons">
        <StarBorderPurple500OutlinedIcon className='icon icon-2' />
        <p className={styles.name}>My stratagies</p>
      </div>
      <div className="icons">
        <StorefrontOutlinedIcon className='icon icon-3' />
        <p className={styles.name}>Marketplace</p>
      </div>
      <div className="icons">
        <Inventory2OutlinedIcon className='icon icon-4' />
        <p className={styles.name}>Products</p>
      </div>
      <div className="icons">
        <CodeOutlinedIcon className='icon icon-5' />
        <p className={styles.name}>Custom code</p>
      </div>
    </div>
  )
}

export default TopNav

