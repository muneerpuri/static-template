import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SidebarDrawer from '../components/SidebarDrawer/SidebarDrawer'
import { AuthContext } from '../../context/AuthContext'
import FloatingIcons from '../components/FloatingIcons/FloatingIcons'
import styles from './style.module.css'

function Team() {
  function transformScroll(event) {
    if (!event.deltaY) {
      return
    }

    event.currentTarget.scrollLeft += event.deltaY + event.deltaX
    event.preventDefault()
  }
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  })
  const { showSideBar } = React.useContext(AuthContext)
  React.useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
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

  return (
    <div className={styles.parent}>
      {showSideBar && <SidebarDrawer />}
      <FloatingIcons />
      <Navbar />
      {/* <div className='md:hidden bg-center bg-no-repeat bg-auto h-96' style={{background:"url('/1_bg.png')"}}> */}
      <div className="m-auto flex w-11/12 items-center justify-center md:m-0 md:w-full md:justify-end">
        <div
          style={
            windowSize.width <= 800
              ? {
                  background: 'url("/mobile_2_bg.png")',
                  backgroundAttachment: 'fixed',
                }
              : {}
          }
          className=" sm-py-0 mt-24 h-fit justify-self-end pt-28 md:mt-5 md:flex md:w-1/2 md:items-center  md:justify-end "
        >
          <div className="md:pr-14 ">
            <p className="text-sm font-bold md:text-base">
              QUANTUM ARI STOXENI I NGENI UM
            </p>
            <p className="py-4 text-sm font-light md:text-base">
              LOREM I PSUM DOLOR SI T AMET, CONSECTETUR ADI PI SCI NG ELI T. SI
              NE EA I GI TUR I UCUNDE NEGAT POSSE SE VI VERE?
            </p>
            <div className={styles.fadeScrollBox}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <div
        style={{
          height: '300px',
          background: "url('/mobile_3_bg.png')",
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
        className="md:hidden"
      ></div>

      <div className=" m-auto flex w-11/12 items-center justify-center py-9 md:h-screen md:w-10/12 md:py-0">
        <div className="w-full md:w-1/2">

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
        {/* <div className={styles.trapezoidParent}>
          
        <div className={styles.trapezoid} style={{background: "url('/3-image_1.png')",}}>Some dummy text.</div>

        <div className={styles.trapezoid} style={{background: "url('/3-image_2.png')",}}>Some dummy text.</div>
        <div className={styles.trapezoid} style={{background: "url('/3-image_3.png')",}}>Some dummy text.</div>
        <div className={styles.trapezoid} style={{background: "url('/3-image_4.png')",}}>Some dummy text.</div>

        </div> */}
        {/* <main
          className={styles.main}
          onWheel={(evt) => {
            const scrollContainer = document.querySelector('main')

            evt.preventDefault()
            scrollContainer.scrollLeft += evt.deltaY
          }}
        >
          <section className={styles.section}>
            <h1 className={styles.h1}>Beep</h1>
          </section>
          <section className={styles.section}>
            <h1 className={styles.h1}>Boop</h1>
          </section>
          <section className={styles.section}>
            <h1 className={styles.h1}>Boooom</h1>
          </section>
          <section className={styles.section}>
            <h1 className={styles.h1}>The End</h1>
          </section>
        </main> */}
      </div>
    </div>
  )
}

export default Team
