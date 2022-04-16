import React from 'react'
import styles from './styles.module.css'
import { AuthContext } from '../../../context/AuthContext'
import Link from 'next/link'
function SidebarDrawer() {

  const {dispatch} =React.useContext(AuthContext)
  return (
    <div className={styles.parent}>
        <div className={styles.menu}>
            <div className={styles.logobox}>
            <img src="/logo.png" alt="Vercel Logo" width={100} height={30} />
            </div>
            <div className={styles.navlinks}>
            <Link  href="/"><a className={styles.navLink}>home</a></Link>
            <Link  href="/team"><a className={styles.navLink}>team</a></Link>
            <Link  href="/manifesto"><a className={styles.navLink}>manifesto</a></Link>
            <Link  href="/mindmap"><a className={styles.navLink}>mindmap</a></Link>

            </div>

        </div>
        <div onClick={()=>{
        dispatch({type:"SIDEBAR"})
      }} className={styles.menuoff}>

        </div>
    </div>
  )
}

export default SidebarDrawer