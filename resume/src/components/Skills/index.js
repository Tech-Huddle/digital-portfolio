import './index.css'

import React from 'react'

const Skills = (props) => {
  
  return (
    <div>
    <h1 className="text-4xl font-bold">Skills</h1>
    
    {
    Object.keys(props.data).map((item,index)=>(
      
      <div key={index}>
      <b>{item}: </b>  {props.data[item]}
      </div>
    ))}
      </div>
  )
}

export default Skills
