import { useDispatch } from 'react-redux'
import { updateRoute } from '../../../../app/routeSlice'
import { FunctionComponent } from 'react'
import { Button } from '../../../../components/button/button'

export const Customer: FunctionComponent = () => {
  const dispatch = useDispatch()
  const updateLocation = (newLocation: any) =>
    dispatch(updateRoute(newLocation))
  return (
    <div className='customer-centric--page-container'>
      <div className='customer-centric--page-wrapper'>
        <div className='col col-12 col-lg-7 left--container'>
          <div className='rich--text'>
            <h3 className='ingram--title'>
              The value of customer-centric selling
            </h3>
            <p className='ingram--paragraph'>
              Buyers today research features and benefits independently before
              engaging with a salesperson, so they don’t need you to educate
              them on those elements. Instead, they increasingly demand that
              tech sellers understand the competitive and market pressures that
              pose challenges to them and create needs within their businesses.
            </p>

            <p className='ingram--paragraph'>
              Ingram Micro Cloud Consult will guide you through the due
              diligence process necessary to understand those external
              pressures, and help you{' '}
              <strong>
                identify Ingram Micro Cloud SKUs that address the needs they create.
              </strong>{' '}
              Explore challenges that arise as a business grows from startup to
              maturity impacting three critical Experiences: Customer,
              Supplier/Partner, and Employee. Or, if you’re exploring sales
              opportunities in a new sector, click Business Drivers and
              Competitive Landscape to explore the external factors impacting
              SMBs and ensure deeper engagement with senior stakeholders.
            </p>
          </div>
        </div>

        <div className='col col-12 col-lg-5'>
          <div className='right--container'>
            <h3 className='ingram--title'>Engagement tools</h3>
            <Button text='External Business Drivers' leftAligned triggerCallBack={function(){updateLocation('External Business Drivers')}}/>
            <Button text='Competitive Environment' leftAligned className='mt-2' triggerCallBack={function(){updateLocation('Competitive Environment')}}/>
            <Button text='Proposal Template' leftAligned className='mt-2' triggerCallBack={function(){updateLocation('Proposal Template')}}/>
            <Button
              text='Request Sales Support'
              leftAligned
              className='mt-2 mb-2'
              triggerCallBack={function(){updateLocation('Request Sales Support')}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
