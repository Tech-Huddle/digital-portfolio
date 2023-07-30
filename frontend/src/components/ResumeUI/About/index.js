import './index.css'

import React from 'react'

const About = (props) => {
  return (
    <div id="about">
      <h1 className="text-6xl my-3 font-bold">{props.name}</h1>
      <div className="text-center">{props.headline}</div>
      <div className="items-center flex flex-col mx-8">
      <div className="flex flex-wrap">

      <div className='mx-2'>{props.address}</div>
      <div className='mx-2'>{props.email}</div>
      <div className='mx-2'>{props.phone}</div>
      </div>

      <div className="border-x-2 mt-4 rounded-l-xl rounded-r-xl p-2">{props.obj}</div>
      </div>
    </div>
  )
}

export default About
