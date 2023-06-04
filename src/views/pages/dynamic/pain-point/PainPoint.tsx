import React, {
  FunctionComponent,
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
} from 'react'
import { ChipList } from '../chip-list/ChipList'
import { PainPointExtension } from './PainPointExtension'
import { useDispatch, useSelector } from 'react-redux'
import { Help } from '../../../../icons/Help'
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip } from '../../../../components/tooltip/Tooltip'
import { updateSelectedPainpoint } from '../../../../app/dataSlice'

export const PainPoint: FunctionComponent<{ data: any }> = ({ data }) => {
  const dispatch = useDispatch()
  const [selectedPillar, setSelectedPillar] = useState<null | number>(null)
  const [pillars, setPillars] = useState<any[]>([])
  const [pillarTitle, setPillarTite] = useState<string>('')
  const [description, setDescription] = useState<null | number>(null)
  const [tooltip, setTooltip] = useState<any>(null)
  const [showHover, setShowHover] = useState(false)
  const isPainpointExtended = useSelector(
    (state: any) => state.routes.isPainpointExtended
  )
  const selectedPainpoint = useSelector(
    (state: any) => state.data.selectedPainpoint
  )
  const firstUpdate = useRef(true)
  const painPointRef = useRef<HTMLDivElement>(null)
  const updateSelectedPillar = (selectedPillarIndex: number | null) => {
    if (selectedPillarIndex !== null) {
      setDescription(null)
    }
    if (selectedPillar === selectedPillarIndex) {
      setSelectedPillar(null)
    } else {
      setSelectedPillar(selectedPillarIndex)
    }
    if (selectedPainpoint !== data.index) {
      dispatch(updateSelectedPainpoint(data.index))
    }
  }
  useEffect(() => {
    if (selectedPainpoint !== data.index) {
      setDescription(null)
      setSelectedPillar(null)
    } 
  }, [selectedPainpoint])

  const updateDescription = (newDescription: null | number) => {
    if (newDescription !== null) {
      setSelectedPillar(null)
    }
    if (description === newDescription) {
      setDescription(null)
    } else {
      setDescription(newDescription)
    }
    if (selectedPainpoint !== data.index) {
      dispatch(updateSelectedPainpoint(data.index))
    }
  }

  const closeDescription = () => {
    setDescription(null)
  }
  const firstLevelSelection = useSelector(
    (state: any) => state.data.firstLevelSelection
  )

  const chipDescriptions = () => {
    if (firstLevelSelection === 'experience') {
      return data.painpoint.businessFunctions.map((el: any) => {
        return {
          name: el,
        }
      })
    } else if (firstLevelSelection === 'functions') {
      return data.painpoint.experiences.map((el: any) => {
        return {
          name: el,
        }
      })
    }
    return []
  }

  const closePillar = () => {
    setSelectedPillar(null)
  }

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (selectedPillar !== null) {
      setPillars(
        data.painpoint.businessPillars[
          selectedPillar as keyof typeof data.painpoint.businessPillars
        ].values
      )
      setPillarTite(
        data.painpoint.businessPillars[
          selectedPillar as keyof typeof data.painpoint.businessPillars
        ].name
      )
    } else setPillars([])
  }, [selectedPillar])

  const whenEntering = (e: any, title: string) => {
    const newTooltip: any = {}
    const tooltipPosition = e.target.getBoundingClientRect()
    const painPointPosition = painPointRef.current?.getBoundingClientRect()
    newTooltip.show = true
    newTooltip.text =
      title === 'Relevant Solutions'
        ? 'Select a Relevant Solution to learn more'
        : title === 'Experiences'
        ? 'Select an Experience to learn more'
        : 'Select a Business Function to learn more'
    const height = window.innerHeight
    if (tooltipPosition.top < (3 * height) / 4) {
      newTooltip.position = {
        top: tooltipPosition.top + 30,
        left: tooltipPosition.left,
      }
    } else {
      newTooltip.position = {
        top: tooltipPosition.top - 80,
        left: tooltipPosition.left,
      }
    }

    setTooltip(newTooltip)
  }

  const whenLeaving = () => {
    const newTooltip = JSON.parse(JSON.stringify(tooltip))
    newTooltip.show = false
    setTooltip(newTooltip)
  }

  const dispatchUpdateSelectedPainpoint = (payload: number) => {
    if (selectedPainpoint !== payload) {
      dispatch(updateSelectedPainpoint(payload))
    }
  }

  return (
    <div
      className={`painpoint-card ${
        selectedPainpoint === data.index
          ? 'selected-painpoint'
          : showHover
          ? 'selected-painpoint'
          : ''
      }`}
      ref={painPointRef}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
      onClick={() => dispatchUpdateSelectedPainpoint(data.index)}
    >
      {tooltip && tooltip.show ? (
        <Tooltip text={tooltip.text} position={tooltip.position} />
      ) : null}
      <div className='base-painpoint row'>
        <div className={`col col-12 col-lg-6  pe-lg-4 border-end`}>
          <div className='d-flex justify-content-between'>
            <div className='card-title c-primary'>
              Pain Point {data.index + 1}
            </div>
            {selectedPainpoint !== data.index && showHover ? (
              <div className='painpoint-hover'>
                Click to select this pain point
              </div>
            ) : null}
          </div>
          <p className='m-0'>{data.painpoint.description}</p>
        </div>
        <div className='col col-12 col-lg-6 ps-lg-4'>
          <ChipList
            title={
              firstLevelSelection === 'experience'
                ? 'Business Functions'
                : 'Experiences'
            }
            data={chipDescriptions()}
            onChipClick={updateDescription}
            marginBottom={true}
            selectedPillarIndex={description}
            icon={selectedPainpoint === data.index ? <Help /> : null}
            whenEntering={whenEntering}
            whenLeaving={whenLeaving}
          />
          <ChipList
            title='Relevant Solutions'
            data={data.painpoint.businessPillars}
            onChipClick={updateSelectedPillar}
            selectedPillarIndex={selectedPillar}
            icon={selectedPainpoint === data.index ? <Help /> : null}
            whenEntering={whenEntering}
            whenLeaving={whenLeaving}
          />
        </div>
      </div>
      <AnimatePresence initial={true} exitBeforeEnter={true}>
        {pillars.length || description !== null ? (
          <PainPointExtension
            data={description !== null ? [] : pillars}
            pointNumber={data.index + 1}
            title={description !== null ? undefined : pillarTitle}
            closeExtension={
              description !== null ? closeDescription : closePillar
            }
            descriptionArray={description !== null ? chipDescriptions() : []}
            description={description}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
