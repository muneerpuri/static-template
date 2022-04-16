import React from 'react'
import styles from './style.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SidebarDrawer from '../components/SidebarDrawer/SidebarDrawer'
import { AuthContext } from '../../context/AuthContext'
import FloatingIcons from '../components/FloatingIcons/FloatingIcons'
function Home() {
  const { showSideBar } = React.useContext(AuthContext)
  return (
    <div className={styles.parent}>
      {showSideBar && <SidebarDrawer />}
      <FloatingIcons/>
      <Navbar />
      {/* <div className='md:hidden bg-center bg-no-repeat bg-auto h-96' style={{background:"url('/1_bg.png')"}}> */}

      <div className="h-fit md:hidden pt-24 md:pt-0 ">
        <img src="/mobile_1_bg.png" alt="" className=" h-4/6" />
      </div>
      <div className="w-full px-9  py-9 md:hidden">
        <p className="py-2 font-bold">DASD</p>
        <p className="font-light py-2">
          LOREM I PSUM DOLOR SI T AMET, CONSECTETUR ADI PI SCI NG ELI T. SI NE
          EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Home
