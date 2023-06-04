import{ FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { PieChart } from './PieChart'
import { motion, AnimatePresence } from 'framer-motion'
export const ChartPage: FunctionComponent<{ rightColumnRef: any }> = ({
  rightColumnRef,
}) => {

  const data = useSelector((state: any) => state.data)

  return (
    <motion.div
    layout
    initial={{ translateX: -200, opacity: 0 }}
    animate={{ translateX: 0, opacity: 1 }}
    exit={{ translateX: -200 }}
    transition={{ duration: 0.4 }}
  >
    <AnimatePresence initial={true} exitBeforeEnter={true}>
    <div className='d-flex flex-column'>
      <PieChart
        options={Object.values(data.secondLevelOptions).map((el) => {
          return { property: el as string, value: 10 }
        })}
        firstLevelSelection={data.firstLevelSelection}
        secondLevelSelection={data.secondLevelSelection}
        rightColumnRef={rightColumnRef}
      />
    </div>
    </AnimatePresence>
        </motion.div>
  )
}
