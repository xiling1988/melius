import React, { useEffect } from 'react'

const TTEWidget = ({ id }) => {
  const initObject = {
    targetDivId: `TTE-${id}`,
    uuid: id,
  }
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://d3saea0ftg7bjt.cloudfront.net/embed/js/embed.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.TTE.init(initObject)
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <a
      id={`TTE-${id}`}
      href='https://10to8.com/book/cgckaxayyvxqulcves/'
      target='_blank'
    >
      See Online Booking Page
    </a>
  )
}

export default TTEWidget
