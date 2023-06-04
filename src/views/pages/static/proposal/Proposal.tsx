import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { updateRoute } from '../../../../app/routeSlice'
import { Button } from '../../../../components/button/button'

export const Proposal: FunctionComponent = () => {
  const dispatch = useDispatch()
    const updateLocation = (newLocation: any) => dispatch(updateRoute(newLocation))
    const downloadTemplate = () => {
      fetch('https://cors-anywhere.herokuapp.com/https://images.go.ingrammicrocloud.com/Web/IngramMicroCloud/%7Be2b67f39-6e99-46c5-8b1c-03b1f48922dc%7D_How_to_access_Marketing_as_a_Partner_portal.pdf?', {
      }).then(response => {
        console.log("FETCHED", response)
        response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = fileURL
          link.download = 'IngramMicroCloudProposalTemplate.pdf'
          link.click()
          link.remove();
        })
      })
    }
  return (
    <div className='proposal--page-container'>
      <div className='proposal--rich-text'>
        <h3 className='ingram--title'>Build an Informed Proposal</h3>
        <h4 className='ingram--sub-title'>
          This workflow will help you build a sales proposal that is relevant to
          all stakeholders, not only those closest to the technology.
        </h4>
        <ul className='proposal--list'>
          <li>
            Familiarise yourself with the customer’s competitive environment and
            the business drivers that impact their organisation.
          </li>
          <li>
            Use the Ingram Micro Cloud Consult tool to select the customer’s
            pain points and identify relevant solutions to address them.
          </li>
          <li>
            Use the proposal template below to frame your proposed solutions in
            the context of the customer’s pain points and tie them to external
            competitive forces and business drivers.
          </li>
        </ul>
        <p className='proposal--link'>
          Need help? Request sales support <a href='#' onClick={() => updateLocation('Request Sales Support')}>here.</a>
        </p>
        <Button text='Download Template' triggerCallBack={function(){downloadTemplate()}}/>
      </div>
    </div>
  )
}
