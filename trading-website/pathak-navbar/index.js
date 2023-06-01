import React from 'react'
import styles from './index.module.css'
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined'; import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

const TopNav = () => {
  return (
    <div className={styles.topnav}>
      <div className={styles.icons}>
        <ViewInArOutlinedIcon className={`${styles.icon} ${styles.icon - 1}`} />
        <p className={styles.name}>Dashboard</p>
      </div>
      <div className={styles.icons}>
        <StarBorderPurple500OutlinedIcon className={`${styles.icon} ${styles.icon - 2}`} />
        <p className={styles.name}>My stratagies</p>
      </div>
      <div className={styles.icons}>
        <StorefrontOutlinedIcon className={styles.icon} />
        <p className={styles.name}>Marketplace</p>
      </div>
      <div className={styles.icons}>
        <Inventory2OutlinedIcon className={styles.icon} />
        <p className={styles.name}>Products</p>
      </div>
      <div className={styles.icons}>
        <CodeOutlinedIcon className={styles.icon} />
        <p className={styles.name}>Custom code</p>
      </div>
    </div>
  )
}

export default TopNav


