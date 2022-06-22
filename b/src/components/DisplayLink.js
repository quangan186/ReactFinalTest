import React from 'react'
import "../css/DisplayLink.css"
function DisplayLink(props) {
    const {shortenLink} = props
  return (
    <div className='result'>
        <h3>Link generated!</h3>
        {shortenLink}
    </div>
  )
}

export default DisplayLink