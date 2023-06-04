import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'
import * as d3 from 'd3'
import { useSelector, useDispatch } from 'react-redux'
import { PainPoint } from './pain-point/PainPoint'
import {
  updateMultipleLevelOptions,
  updateGrwothStageSelection,
} from '../../../app/dataSlice'
import { Dropdown } from './dropdown/Dropdwon'
import { StickyTable } from './sticky-table/StickyTable'
import { motion, AnimatePresence } from 'framer-motion'

export const DynamicPage: FunctionComponent<{}> = () => {
  const dispatch = useDispatch()


  const [stateUpdaterKey,updateStateUpdaterKey] = useState<any>(0)

  const firstLevelSelection = useSelector(
    (state: any) => state.data.firstLevelSelection
  )

  const secondLevelSelection = useSelector(
    (state: any) => state.data.secondLevelSelection
  )

  const thirdLevelSelection = useSelector(
    (state: any) => state.data.thirdLevelSelection
  )
  const multipleLevelOptions = useSelector(
    (state: any) => state.data.multipleLevelOptions
  )

  const growthStagesOptions = useSelector(
    (state: any) => state.data.growthStages
  )

  const selectedGrowthStage = useSelector(
    (state: any) => state.data.selectedGrowthStage
  )

  useEffect(() => {
    updateStateUpdaterKey(stateUpdaterKey+1)
  },[firstLevelSelection, secondLevelSelection, thirdLevelSelection, selectedGrowthStage])

  const filteredData = useSelector(
    (state: any) => state.data.filteredPainPoints
  )

  const isNavbarActive = useSelector((state: any) => state.routes.activeNav)

  const changeMultipleLevelOptions = (optionName: any) => {
    dispatch(updateMultipleLevelOptions(optionName))
  }

  const changeSelectedGrowthStage = (growthStage: any) => {
    dispatch(updateGrwothStageSelection(growthStage))
  }

  const multipleLevelOptionsList = multipleLevelOptions.map(
    (el: any, index: number) => (
      <button
        onClick={() => changeMultipleLevelOptions(el.name)}
        key={`${el.name}-${index}`}
        value={el.name as any}
        className={`mx-1 ${el.selected ? 'option-selected' : ''}`}
      >
        {el.name as any}
      </button>
    )
  )

  const growthStagesOptionsList = Object.values(growthStagesOptions).map(
    (el: any, index: number) => (
      <button
        onClick={() => changeSelectedGrowthStage(el)}
        key={`${el}-${index}`}
        value={el as any}
        className={`${el === selectedGrowthStage ? 'option-selected' : ''}`}
      >
        {el as any}
      </button>
    )
  )

  const painPointsList = filteredData.map((el: any, index: number) => (
    <PainPoint
      key={`painpoint-number-${index}`}
      data={{
        painpoint: el,
        index,
      }}
    />
  ))

  return (
    <div className='dynamic-page' >
            <motion.div
        layout
        initial={{translateX: 150, opacity: 0 }}
        animate={{translateX: 0, opacity: 1 }}
        exit={{translateX: 150, opacity: 0 }}
        transition={{ duration: 0.4 }}
        key={stateUpdaterKey}
      >
        <AnimatePresence initial={true} exitBeforeEnter={true}>
      {Object.keys(multipleLevelOptions).length ? (
        <div className='pt-40'>
          <div className='row mb-4'>
            <div className='col col-6'>
              <div className='regular-title c-primary'>
                {secondLevelSelection ? secondLevelSelection : 'All'}{' '}
                {firstLevelSelection === 'experience'
                  ? secondLevelSelection
                    ? 'Experience'
                    : 'Experiences'
                  : secondLevelSelection
                  ? 'Function'
                  : 'Business Functions'}
              </div>
              <div className='large-title c-white'>
                Exploring {filteredData.length} Pain Points
              </div>
            </div>
            <div className='col col-6'>
              <div className='regular-title align-end c-white mb-2 pe-4'>{`${
                firstLevelSelection === 'experience'
                  ? 'Business Functions'
                  : 'Experience'
              } Filter`}</div>
              <div className='d-flex justify-content-end'>
                {' '}
                <Dropdown
                  itemList={multipleLevelOptions.map((el: any) => el.name)}
                  selectedItemIndex={thirdLevelSelection}
                  triggerCallBack={changeMultipleLevelOptions}
                  width={225}
                />
              </div>
            </div>
          </div>
          <div className='restricted-height'>
            <div className='pb-80'>{painPointsList}</div>
          </div>
          {/* <div className='sticky-table-container'>
              <div className="sticky-table">
              <div className='red'>Growth stages</div>
            {filteredData.length && <div>{growthStagesOptionsList}</div>}
              </div>
          </div> */}
        </div>
      ) : (
        <div className='no-options'>Ingram</div>
      )}
        </AnimatePresence>
      </motion.div>
      {!isNavbarActive ? <StickyTable /> : <div></div>}
    </div>
  )
}
