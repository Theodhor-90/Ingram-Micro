import { useSelector, useDispatch } from 'react-redux'
import { updateRoute } from '../../../app/routeSlice'
import { Footer } from '../../../components/footer/footer'
import { Customer } from './customer/Customer'
import { Business } from './business/Business'
import { Competitive } from './competitive/Competitive'
import { Proposal } from './proposal/Proposal'
import { Button } from '../../../components/button/button'
import { AliquaForm } from '../../../components/form/AliquaForm'

export const Static = () => {
  const dispatch = useDispatch()
  const navPosition = useSelector((state: any) => state.routes.position)
  const updateLocationToHome = () =>
    dispatch(updateRoute('Explore Engagement Tools'))
  return (
    <div className='static-container'>
      <div className='mb-lg-40'>
        {navPosition !== 'Explore Engagement Tools' ? (
          <Button
            text='Back to home'
            btnType='ghost'
            className='back-to-home'
            triggerCallBack={function () {
              updateLocationToHome()
            }}
          />
        ) : (
          <div></div>
        )}
      </div>

      <div className='static'>
        {navPosition === 'External Business Drivers' ? (
          <div className='centralizer'>
            <div className='fixed-width-lg'>
              <Business />
            </div>
          </div>
        ) : navPosition === 'Competitive Environment' ? (
          <div className='centralizer'>
            <div className='fixed-width-lg'>
              <Competitive />
            </div>
          </div>
        ) : navPosition === 'Explore Engagement Tools' ? (
          <Customer />
        ) : navPosition === 'Proposal Template' ? (
          <div className='centralizer'>
            <div className='fixed-width-lg proposal'>
              <Proposal />
            </div>
          </div>
        ) : navPosition === 'Request Sales Support' ? (
          <div className='centralizer'>
            <div className='fixed-width-lg'>
              <AliquaForm />
            </div>
          </div>
        ) : (
          <div>ERROR PAGE</div>
        )}
      </div>

      <Footer />
    </div>
  )
}
