import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateIsScreenMobile, updateWindowSize } from './app/routeSlice'
import { LeftColumn } from './views/LeftColumn'
import { RightColumn } from './views/RightColumn'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state.data)
  const isScreenMobile = useSelector((state: any) => state.routes.isScreenMobile)
  const windowSize = useSelector((state: any) => state.routes.windowSize)
  const isNavbarActive = useSelector((state: any) => state.routes.activeNav)
  const position = useSelector((state: any) => state.routes.position)

  const rightColumnRef = useRef()
  const [firstLevelSelection, setFirstLevelSelection] = useState(
    data.firstLevelSelection
  )
  window.addEventListener('resize', function(){
    if(this.window.innerWidth < 992){
      if(!isScreenMobile){
        dispatch(updateIsScreenMobile(true))
      }
    } else {
      if(isScreenMobile){
        dispatch(updateIsScreenMobile(false))
      }
    }
    dispatch(updateWindowSize(this.window.innerWidth))
  })
  useEffect(() => {
    if(isScreenMobile && isNavbarActive){
      window.scrollTo(0,0)
      document.body.style.overflow = 'hidden'
    } else {
     document.body.style.overflow = 'auto'
    }
  },[isNavbarActive])

  return (
    <div className='app-container'>
      <div className={`row m-0 ${windowSize < 992 && position !== 'Explore Engagement Tools' ? 'full-height-mobile' : ''}`}>
        {/* <div className='col col-12 col-lg-5'>
          <Title />
          {isNavbarActive ? <Navbar /> : <ChartPage />}
        </div>
        <div className='col col-12 col-lg-7'>
          <DynamicPage />
        </div> */}
        
        <LeftColumn rightColumnRef={rightColumnRef}/>
        <RightColumn rightColumnRef={rightColumnRef}/>
      </div>
    </div>
  )
}

export default App
