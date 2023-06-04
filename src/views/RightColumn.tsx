import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { DynamicPage } from './pages/dynamic/DynamicPage'
import { Static } from './pages/static/Static'
import { ChartTooltip } from './pages/chart/ChartTooltip'
import { motion, AnimatePresence } from 'framer-motion'

export const RightColumn: FunctionComponent<{ rightColumnRef: any }> = ({
  rightColumnRef,
}) => {
  const navPosition = useSelector((state: any) => state.routes.position)
  const isNavbarActive = useSelector((state: any) => state.routes.activeNav)
  const isScreenMobile = useSelector(
    (state: any) => state.routes.isScreenMobile
  )
  const firstLevelSelection = useSelector(
    (state: any) => state.data.firstLevelSelection
  )
  const isChartInViewport = useSelector(
    (state: any) => state.routes.isChartInViewport
  )

  return (
    <div
      className='col col-12 col-lg-7 back-blue-gradient p-0'
      ref={rightColumnRef}
    >
      <motion.div
        layout
        initial={{translateX: 150, opacity: 0 }}
        animate={{translateX: 0, opacity: 1 }}
        exit={{translateX: 150, opacity: 0 }}
        transition={{ duration: 0.4 }}
        key={`${navPosition}-${firstLevelSelection}`}
      >
        <AnimatePresence initial={true} exitBeforeEnter={true}>
          {navPosition === 'Explore Engagement Tools' && firstLevelSelection ? (
            <DynamicPage />
          ) : (
            <Static />
          )}
          {navPosition === 'Explore Engagement Tools' &&
          !isChartInViewport &&
          isScreenMobile &&
          !isNavbarActive ? (
            <ChartTooltip />
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
