import React from 'react'

import styles from './style.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SidebarDrawer from '../components/SidebarDrawer/SidebarDrawer'
import { AuthContext } from '../../context/AuthContext'
import FloatingIcons from '../components/FloatingIcons/FloatingIcons'

function Manifesto() {

  const { showSideBar } = React.useContext(AuthContext)
  return (
    <div className={styles.parent}>
      {showSideBar && <SidebarDrawer />}
      <FloatingIcons />
      <Navbar />

      <div className="relative hidden md:flex inset-y-1/4  w-full items-center justify-center">
        <div className="w-1/2 px-28">
          <div className="relative flex h-full w-full items-center justify-center">
            <img src="/mobile_4.png" className="h-full" alt="" />
            <div
              className={`absolute h-full w-full ${styles.gridBox} bg-transparent`}
            >
              <div className={styles.itemActive}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <p className="py-4 font-bold">MINDMAP</p>
          <div onScroll={(e)=>{
            let cards  = document.querySelectorAll(".cardData");
            // cards.forEach((el,index)=>{
            //   let position = el.getBoundingClientRect()
              
            //   if(window.pageXOffset + window.innerHeight >) {
            //     console.log('Element is fully visible in screen'+index);
            //   }
            //   if(position.top < window.innerHeight && position.bottom >= 0) {
            //     console.log('Element is partially visible in screen'+index);
            //   }
            // })
          }} className={`overflow-x-auto flex ${styles.scrolldiv}`}>
            <div className={styles.blurDiv}> </div>

          <div  className="w-fit cardData">
            <p className="py-4 text-xs  md:text-sm font-bold">QUANTUM ARI STOXENI I NGENI UM</p>
            <p style={{width:'350px'}} className='text-xs  md:text-sm font-light py-2'>
              LOREM I PSUM DOLOR SI T AMET, LOREM I PSUM DOLOR SI T AMET,
              CONSECTETUR ADI PI SCI NG ELI T. SI NE EA CONSECTETUR ADI PI SCI
              NG ELI T. SI NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
          </div>
          <div  className="w-fit cardData">
            <p className="py-4 text-xs  md:text-sm font-bold">QUANTUM ARI STOXENI I NGENI UM</p>
            <p style={{width:'350px'}} className='text-xs  md:text-sm font-light py-2'>
              LOREM I PSUM DOLOR SI T AMET, LOREM I PSUM DOLOR SI T AMET,
              CONSECTETUR ADI PI SCI NG ELI T. SI NE EA CONSECTETUR ADI PI SCI
              NG ELI T. SI NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
          </div>
          <div  className="w-fit cardData">
            <p className="py-4 text-xs  md:text-sm font-bold">QUANTUM ARI STOXENI I NGENI UM</p>
            <p style={{width:'350px'}} className='text-xs  md:text-sm font-light py-2'>
              LOREM I PSUM DOLOR SI T AMET, LOREM I PSUM DOLOR SI T AMET,
              CONSECTETUR ADI PI SCI NG ELI T. SI NE EA CONSECTETUR ADI PI SCI
              NG ELI T. SI NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className='w-full flex md:hidden pt-28 justify-center items-center'>
      <img src="/mobile_4.png" className="h-full" alt="" />
      </div>
          <p className="font-bold text-center py-4 md:hidden">MINDMAP</p>
      <div class="carousel md:hidden mt-9 w-full">
  <div id="slide1" class="carousel-item relative w-full flex-col ">
  <p className="py-4 text-xs  w-9/12 m-auto md:text-sm font-bold">QUANTUM ARI STOXENI I NGENI UM</p>
            <p className='text-xs w-9/12 m-auto  md:text-sm font-light py-2'>
              LOREM I PSUM DOLOR SI T AMET, LOREM I PSUM DOLOR SI T AMET,
              CONSECTETUR ADI PI SCI NG ELI T. SI NE EA CONSECTETUR ADI PI SCI
              NG ELI T. SI NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
      <a href="#slide3" ><img width="30" src="/lArrow.svg"/></a> 
      <a href="#slide2" ><img width="30" src="/rArrow.svg"/></a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full flex-col ">
  <p className="py-4 text-xs w-9/12 m-auto md:text-sm font-bold">QUANTUM ARI STOXENI I NGENI UM</p>
            <p className='text-xs w-9/12 m-auto  md:text-sm font-light py-2'>
              LOREM I PSUM DOLOR SI T AMET, LOREM I PSUM DOLOR SI T AMET,
              CONSECTETUR ADI PI SCI NG ELI T. SI NE EA CONSECTETUR ADI PI SCI
              NG ELI T. SI NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
      <a href="#slide1" ><img width="30" src="/lArrow.svg"/></a> 
      <a href="#slide3" ><img width="30" src="/rArrow.svg"/></a>
    </div>
  </div> <div id="slide3" class="carousel-item relative w-full flex-col ">
  <p className="py-4 text-xs w-9/12 m-auto  md:text-sm font-bold">QUANTUM ARI STOXENI I NGENI UM</p>
            <p  className='text-xs w-9/12 m-auto  md:text-sm font-light py-2'>
              LOREM I PSUM DOLOR SI T AMET, LOREM I PSUM DOLOR SI T AMET,
              CONSECTETUR ADI PI SCI NG ELI T. SI NE EA CONSECTETUR ADI PI SCI
              NG ELI T. SI NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
      <a href="#slide2" ><img width="30" src="/lArrow.svg"/></a> 
      <a href="#slide1" ><img width="30" src="/rArrow.svg"/></a>
    </div>
  </div> 
</div>

      <Footer />
    </div>
  )
}

export default Manifesto
