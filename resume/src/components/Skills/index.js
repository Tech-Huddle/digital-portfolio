import './index.css'

import React from 'react'

const Skills = (props) => {
  
  return (
    <>
    <h1>Skills</h1>

    {
    Object.keys(props.data).map((item,index)=>(
      
      <div key={index}>
      <b>{item}: </b>  {props.data[item]}
      </div>
    ))}
      </>
  )
}

export default Skills
