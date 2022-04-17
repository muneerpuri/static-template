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
    </div>
  )
}

export default Team
