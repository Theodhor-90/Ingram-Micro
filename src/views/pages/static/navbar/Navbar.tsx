import { useSelector, useDispatch } from 'react-redux'
import { updateRoute } from '../../../../app/routeSlice'
import { Button } from '../../../../components/button/button'
import { toggleNav } from '../../../../app/routeSlice'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const actualLocation = useSelector((state: any) => state.routes.position)
  const windowSize = useSelector((state: any) => state.routes.windowSize)
  const pages = [
    'Explore Engagement Tools',
    'External Business Drivers',
    'Competitive Environment',
    'Proposal Template',
  ]
  const dispatch = useDispatch()
  const updateLocation = (newLocation: any) => {
    dispatch(updateRoute(newLocation))
    if (windowSize < 992) {
      dispatch(toggleNav(false))
    }
  }
  return (
    <motion.div
    layout
    initial={{  opacity: 0 }}
    animate={{  opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .4 }}
  >                            <AnimatePresence initial={true} exitBeforeEnter={true}>
      <div className='header-container d-flex flex-column justify-content-between'>
        <div className='padding-lg-64'>
          {pages.map((el) => (
            <div
              className={`nav-element ${el === actualLocation ? 'active' : ''}`}
              key={el}
              onClick={() => updateLocation(el)}
            >
              {el}
            </div>
          ))}
        </div>
        <Button
          text='Request Sales Support'
          btnType='primary'
          triggerCallBack={function () {
            updateLocation('Request Sales Support')
          }}
        />
      </div>
      </AnimatePresence>      </motion.div>
  )
}
