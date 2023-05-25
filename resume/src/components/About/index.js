import './index.css'

import React from 'react'

const About = (props) => {
  return (
    <div id="about">
      <h1>{props.name}</h1>
      <div>{props.headline}</div>
      <div>{props.address}</div>
      <div>{props.email}</div>
      <div>{props.phone}</div>
      <div>{props.obj}</div>
    </div>
  )
}

export default About
