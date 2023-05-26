import './index.css'

import React from 'react'

const Skills = (props) => {
  
  return (
    <div>
    <h1 className="text-4xl font-bold">Skills</h1>
    
      <div className="mt-2 border-t-2">

    {
      Object.keys(props.data).map((item,index)=>(
      
        <div key={index} className='m-2'>
      <b>{item}: </b>  {props.data[item]}
      </div>
    ))}
    
    </div>
    
    </div>
  )
}

export default Skills
