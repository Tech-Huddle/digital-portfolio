import React from 'react'

const Lang = (props) => {
  return (
    <div>
    <h1 className="text-4xl font-bold">Languages</h1>

    <div className="mt-2 border-t-2">

    {
      props.data.map((key,index)=>(<div className='m-2 ' key={index}>{key}</div>))
    }
      
    </div>
    </div>
  )
}

export default Lang
