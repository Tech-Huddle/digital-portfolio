import React from 'react'

const Lang = (props) => {
  return (
    <div>
    <h1 className="text-4xl font-bold">Languages</h1>
    {
        props.data.map((key,index)=>(<div key={index}>{key}</div>))
    }
      
    </div>
  )
}

export default Lang
