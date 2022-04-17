import React from 'react'

import styles from './style.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SidebarDrawer from '../components/SidebarDrawer/SidebarDrawer'
import { AuthContext } from '../../context/AuthContext'
import FloatingIcons from '../components/FloatingIcons/FloatingIcons'

function Manifesto() {
  const Card = () => {
    return (
      <div className="flex w-full items-center justify-between p-4">
        <div
          style={{ height: '75px', width: '75px' }}
          className="flex-none rounded border border-black"
        ></div>
        <div className=" flex flex-col items-start justify-start px-2">
          <div>
            <span className="pr-2 text-sm font-bold md:text-base">
              QUAE QUI
            </span>
            <span className="text-sm font-light italic md:text-base">
              PUBLI PRAITERMISSUM
            </span>
          </div>
          <p className="py-1 text-sm font-light md:text-base">
            LOREM I PSUM DOLOR SI T AMET, CONSECTETUR ADI PI SCI NG ELI T. SI NE
          </p>
        </div>
      </div>
    )
  }
  const { showSideBar } = React.useContext(AuthContext)
  return (
      <div className={styles.parent}>
        <Navbar />
      {showSideBar && <SidebarDrawer />}
      <FloatingIcons />

      {/* <div className="hidden md:flex float-right m-auto  w-1/2 items-center justify-center ">
        <div className="flex flex-col mt-28 items-start justify-start px-6 break-words">
          <p className="py-9 font-bold">MANI FESTO</p>
          <p className='py-2'>
            RESTINCTA ENIM SITIS STABILITATEM VOLUPTATIS HABET. INQUIT, ILLA
            AUTEM VOLUPTAS IPSIUS RESTINCTIONIS IN M OTU EST. QUA EX COGNITIONE
            FACILIOR FACTA EST INVESTIGATIO RERUM OCCULTISSIM ARUM . SCRUPULUM ,
            INQUAM , ABEUNTI; QUAE CONTRARIA SUNT HIS, M ALANE? PRAECLARE HOC
            QUIDEM . NEC ENIM , OM NES AVARITIAS SI AEQUE AVARITIAS ESSE DIXERIM
            US, SEQUETUR UT ETIAM AEQUAS ESSE DICAM US.
          </p>
          <p className='py-2'>SIN KAKAN M ALITIAM DIXISSES</p>
          <p className='py-2'>AD ALIUD NOS UNUM CERTUM VITIUM</p>
          <p className='py-2'>CONSUETUDO LATINA TRADUCERET</p>
        </div>
      </div> */}

      <div
        style={{
          minHeight: '300px',
          background: "url('/mobile_5.png')",
          // backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
        className="md:hidden "
      ></div>

<div className="flex md:float-right m-auto w-11/12 md:w-1/2 items-center justify-center ">
        <div className="flex flex-col mb-9 md:mb-0 md:mt-28 items-start justify-start px-6 break-words">
          <p className="py-9 font-bold">MANI FESTO</p>
          <p className='py-2'>
            RESTINCTA ENIM SITIS STABILITATEM VOLUPTATIS HABET. INQUIT, ILLA
            AUTEM VOLUPTAS IPSIUS RESTINCTIONIS IN M OTU EST. QUA EX COGNITIONE
            FACILIOR FACTA EST INVESTIGATIO RERUM OCCULTISSIM ARUM . SCRUPULUM ,
            INQUAM , ABEUNTI; QUAE CONTRARIA SUNT HIS, M ALANE? PRAECLARE HOC
            QUIDEM . NEC ENIM , OM NES AVARITIAS SI AEQUE AVARITIAS ESSE DIXERIM
            US, SEQUETUR UT ETIAM AEQUAS ESSE DICAM US.
          </p>
          <p className='py-2'>SIN KAKAN M ALITIAM DIXISSES</p>
          <p className='py-2'>AD ALIUD NOS UNUM CERTUM VITIUM</p>
          <p className='py-2'>CONSUETUDO LATINA TRADUCERET</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Manifesto
