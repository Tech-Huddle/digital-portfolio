import './index.css'

import React from 'react'

const About = (props) => {
  return (
    <div id="about">
      <h1 className="text-6xl font-bold">{props.name}</h1>
      <div className="text-center">{props.headline}</div>
      <div className="items-center flex flex-col mx-8">
      <div className="flex flex-wrap">

      <div className='mx-2'>{props.address}</div>
      <div className='mx-2'>{props.email}</div>
      <div className='mx-2'>{props.phone}</div>
      </div>

      <div className=''>{props.obj}</div>
      </div>
    </div>
  )
}

export default About
