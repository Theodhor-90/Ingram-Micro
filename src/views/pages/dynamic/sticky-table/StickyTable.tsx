import { FunctionComponent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateGrwothStageSelection } from '../../../../app/dataSlice'
import { clickGrowhtStage } from '../../../../app/routeSlice'
import { Button } from '../../../../components/button/button'

const growthStagesCopies = {
  Startup: 'Startups and small business with less organisational complexity.',
  Expansion:
    'Business moving into a new market, entering a new category, or going through M&As.',
  Maturity:
    'Large, mature business with established market footing and defined operations.',
}

export const StickyTable: FunctionComponent<{}> = () => {
  const dispatch = useDispatch()
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const hasGrowthStageBeenClicked = useSelector((state:any) => state.routes.hasGrowthStageBeenClicked)
  const toggleIsExpanded = () => {
    if(!hasGrowthStageBeenClicked){
      dispatch(clickGrowhtStage())
    }
    setIsExpanded(!isExpanded)
  }
  const growthStages = useSelector((state: any) =>
    Object.values(state.data.growthStages)
  )
  const selectedGrowthStage = useSelector(
    (state: any) => state.data.selectedGrowthStage
  )

  const changeSelectedGrowthStage = (growthStage: any) => {
    if(growthStage ==='Startup' || growthStage === 'Maturity' || growthStage === 'Expansion') setIsExpanded(false)
    dispatch(updateGrwothStageSelection(growthStage))
  }
  return (
    <div className={`sticky-table-container ${isExpanded ? 'expanded' : ''}`}>
      <div className='sticky-table'>
        <Button
          text={selectedGrowthStage ? `Growth Stage: ${selectedGrowthStage}` :`Select Growth Stage`}
          btnType='primary'
          className={`table-header rotated ${hasGrowthStageBeenClicked ? '' : 'scale-pulse'}`}
          triggerCallBack={toggleIsExpanded}
        />
        <div className='row m-0 border-bottom-neutral'>
          {growthStages.map((el: any, index: number) => (
            <div className='col col-12 col-lg-4 p-0' key={`${el}-${index}`}>
              <div
                className={`growth-stage-card d-flex d-lg-block ${
                  index === 0 ? 'no-border' : ''
                } ${el === selectedGrowthStage ? 'option-selected' : ''}`}
                onClick={() => changeSelectedGrowthStage(el)}
              >
                <div className='d-flex align-items-end mb-2'>
                  <div className={`bar bar-1 me-1 filled`}></div>
                  <div
                    className={`bar bar-2 me-1 ${
                      el === 'Expansion' || el === 'Maturity' ? 'filled' : ''
                    }`}
                  ></div>
                  <div
                    className={`bar bar-3 ${el === 'Maturity' ? 'filled' : ''}`}
                  ></div>
                </div>
                <div className='ms-4 ms-lg-0'>
                  <div className='card-title mb-1'>{el}</div>
                  <p className='m-0 p-0 growth-stage-paragraph'>
                    {growthStagesCopies[el as keyof typeof growthStagesCopies]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
