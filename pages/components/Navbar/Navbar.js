import React from 'react'
import classes from './style.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from "next/link";
import {AuthContext} from '../../../context/AuthContext'
function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);

  const {showSideBar,dispatch} =React.useContext(AuthContext)
  const router = useRouter();
  return (
    <div className="w-full md:w-11/12 m-auto flex justify-between items-center fixed top-5 left-0 right-0">
        <img className="hidden md:flex" src="/logo.png" alt="Vercel Logo" width={100} height={30} />
        <div className={"hidden md:flex justify-between items-center"}>
          {console.log(router.pathname)}
            <Link  href="/"><a className={ router.pathname == "/"  || router.pathname == "/home" ? classes.active : classes.navItem}>home</a></Link>
            <Link  href="/team"><a className={router.pathname == "/team" ? classes.active : classes.navItem}>team</a></Link>
            <Link  href="/manifesto"><a className={router.pathname == "/manifesto" ? classes.active : classes.navItem}>manifesto</a></Link>
            <Link  href="/mindmap"><a className={router.pathname == "/mindmap" ? classes.active : classes.navItem}>mindmap</a></Link>
        </div>
      

      <div className="w-full p-3.5 m-auto md:hidden flex justify-between items-center">
      <Image src="/logo.png" alt="Vercel Logo" width={100} height={30} />

      <Image onClick={()=>{
        dispatch({type:"SIDEBAR"})
      }} src="/hamburger.svg" alt="Vercel Logo" width={100} height={30} />

      
</div>
    </div>
  )
}

export default Navbar