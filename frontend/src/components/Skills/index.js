import './index.css'

import React from 'react'

const Skills = (props) => {
  
  return (
    <div>
    <h1 className="text-4xl font-bold">Skills</h1>
    
      <div className="mt-2 border-t-2 ">

    {
      Object.keys(props.data).map((item,index)=>(
      
        <div key={index} className='m-2'>
      <div className='text-justify'>{item}</div> 
       {
       props.data[item].split(", ").map((x,i)=>(
        <span key={i} className="bg-blue-100 mr-1 mt-1 font-bold px-1 inline-block rounded-md" style={{"color":"rgb(78, 78, 120)"}}>
          {x}
        </span>
       ))
       }
      </div>
    ))}
    
    </div>
    
    </div>
  )
}

export default Skills
