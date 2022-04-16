import React from 'react'
import style from './style.module.css'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SidebarDrawer from '../components/SidebarDrawer/SidebarDrawer'
import { AuthContext } from '../../context/AuthContext'
import FloatingIcons from '../components/FloatingIcons/FloatingIcons'
function Terms() {
  const { showSideBar } = React.useContext(AuthContext)
  return (
    <div className={style.parent}>
      <Navbar />
      {showSideBar && <SidebarDrawer />}

      <div style={{height:"500px"}} className={`w-11/12 md:w-1/2 m-auto flex flex-col items-start justify-start overflow-y-scroll px-9 md:px-16 ${style.scrollDiv}`}>
        <p className="py-9 font-bold">TERMS</p>
        <p className="py-2 font-light">
          LOREM IPSUM DOLOR SIT AM ET, CONSECTETUR ADIPISCING ELIT. AT ZENO EUM
          NON BEATUM M ODO, SED ETIAM DIVITEM DICERE AUSUS EST. SED NON ALIENUM
          EST, QUO FACILIUS VIS VERBI INTELLEGATUR, RATIONEM HUIUS VERBI
          FACIENDI ZENONIS EXPONERE. CUPIT ENIM DÍCERE NIHIL POSSE AD BEATAM
          VITAM DEESSE SAPIENTI. ITAQUE HIC IPSE IAM PRIDEM EST REIECTUS; DUO
          REGES: CONSTRUCTIO INTERRETE. BEATUS AUTEM ESSE IN M AXIM ARUM RERUM
          TIM ORE NEM O POTEST. <b>QUID DE PYTHAGORA?</b> DUO ENIM GENERA QUAE
          ERANT, FECIT TRIA
        </p>
        <p className="py-2 font-light">
          LOREM IPSUM DOLOR SIT AM ET, CONSECTETUR ADIPISCING ELIT. AT ZENO EUM
          NON BEATUM M ODO, SED ETIAM DIVITEM DICERE AUSUS EST. SED NON ALIENUM
          EST, QUO FACILIUS VIS VERBI INTELLEGATUR, RATIONEM HUIUS VERBI
          FACIENDI ZENONIS EXPONERE. CUPIT ENIM DÍCERE NIHIL POSSE AD BEATAM
          VITAM DEESSE SAPIENTI. ITAQUE HIC IPSE IAM PRIDEM EST REIECTUS; DUO
          REGES: CONSTRUCTIO INTERRETE. BEATUS AUTEM ESSE IN M AXIM ARUM RERUM
          TIM ORE NEM O POTEST. <b>QUID DE PYTHAGORA?</b> DUO ENIM GENERA QUAE
          ERANT, FECIT TRIA
        </p>
        <p className="py-2 font-light">
          LOREM IPSUM DOLOR SIT AM ET, CONSECTETUR ADIPISCING ELIT. AT ZENO EUM
          NON BEATUM M ODO, SED ETIAM DIVITEM DICERE AUSUS EST. SED NON ALIENUM
          EST, QUO FACILIUS VIS VERBI INTELLEGATUR, RATIONEM HUIUS VERBI
          FACIENDI ZENONIS EXPONERE. CUPIT ENIM DÍCERE NIHIL POSSE AD BEATAM
          VITAM DEESSE SAPIENTI. ITAQUE HIC IPSE IAM PRIDEM EST REIECTUS; DUO
          REGES: CONSTRUCTIO INTERRETE. BEATUS AUTEM ESSE IN M AXIM ARUM RERUM
          TIM ORE NEM O POTEST. <b>QUID DE PYTHAGORA?</b> DUO ENIM GENERA QUAE
          ERANT, FECIT TRIA
        </p>
      </div>

      <Footer />
      <FloatingIcons />
    </div>
  )
}

export default Terms
