import { Button } from "../../../button/button"

export const FormSubmitButton = () => {
  return (
    <div className='row'>
      <div className='grid-layout-col'>
        <div className='layout-col col-sm-12 col-xs-12'>
          <div
            id='formElement13'
            className='elq-field-style form-element-layout row'
          >
            <div className='col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-xs-12'>
                  <div>
                    <Button
                      typeAttribute='submit'
                      text='Submit'
                      className='mt-3'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
