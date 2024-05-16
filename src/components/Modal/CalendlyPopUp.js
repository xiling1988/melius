import React, { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'

const CalendlyPopUp = () => {
  const [rootElement, setRootElement] = useState(null)

  useEffect(() => {
    setRootElement(document.getElementById('calendly-root'))
  }, [])
  return (
    <div id='calendly-root'>
      {rootElement && (
        <PopupButton
          className='rounded-md bg-nexusBlue hover:bg-nexusRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          url='https://calendly.com/alexashenden/free-30-min-consultation-with-alex'
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById('root')}
          text='Get Started'
        />
      )}
    </div>
  )
}

export default CalendlyPopUp
