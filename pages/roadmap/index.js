import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SidebarDrawer from '../components/SidebarDrawer/SidebarDrawer'
import { AuthContext } from '../../context/AuthContext'
import FloatingIcons from '../components/FloatingIcons/FloatingIcons'
import styles from './style.module.css'

function Roadmap() {
  const { showSideBar } = React.useContext(AuthContext)
  const containerRef = React.useRef(null)
 

  return (
   
    <div className={styles.parent}>
      {showSideBar && <SidebarDrawer />}
      <FloatingIcons />
      <Navbar />
      {/* <div className='mt-24 md:hidden '>

      </div> */}

<div className="h-fit md:hidden pt-24 md:pt-0 ">
        <img src="/mobile_3_bg.png" alt="" className=" h-4/6" />
      </div>
      {/* <div
        className="md:hidden "
      >
        <img src="/mobile_3_bg.png" alt="" className='mobile-bg'/>
      </div> */}

      <div className=" m-auto flex w-11/12 items-center justify-center py-9 md:h-screen md:w-10/12 md:py-0">
        <div className="w-full md:w-2/5">

        <p className="py-4 font-bold">ROADMAP</p>
          <div className="form-check flex items-center justify-start">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              disabled
            />
            <label
              className="form-check-label inline-block text-gray-400"
              htmlFor="flexCheckChecked"
            >
              ATQUI REPERIES, INQUIT
            </label>
          </div>
          <div className="form-check flex items-center justify-start">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              disabled
            />
            <label
              className="form-check-label inline-block text-gray-400"
              for="flexCheckChecked"
            >
              IN HOC QUIDEM PERTINACEM, OMNIA
            </label>
          </div>
          <div className="form-check flex items-center justify-start">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              disabled
            />
            <label
              className="form-check-label inline-block text-gray-400"
              for="flexCheckChecked"
            >
              CONTRARIA
            </label>
          </div>
          <div className="form-check flex items-center justify-start">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mattis, enim sit
            </label>
          </div>
          <div className="form-check flex items-center justify-start">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mattis, enim sit
            </label>
          </div>
          <div className="form-check flex items-center justify-start">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mattis, enim sit
            </label>
          </div>
          <div className="form-check flex flex-col items-center justify-start">
            <div className="form-check flex items-center justify-start ">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 flex-none cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                className=" form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mattis, enim sit
              </label>
            </div>
            <div className="form-check flex flex-col items-center justify-center">
              <div> &gt; Lorem ipsum dolor sit amet</div>
              <div> &gt; Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
        <div className='w-full hidden md:flex h-4/6 justify-end items-center p-2' >

          <div className={`flex justify-start items-center parent-slider ${styles.parentSlider}`}>
            <div className={`flex  justify-start items-center inner-slider ${styles.innerSlider}`}>
                <img src="/3-image_1.png" alt=""/>
                <img src="/3-image_2.jpg" alt=""/>
                <img src="/3-image_3.png" alt=""/>
                <img src="/3-image_4.png" alt=""/>
            </div>

          </div>
          
        </div>
       
      </div>

      <Footer />
    </div>
  )
}

export default Roadmap
