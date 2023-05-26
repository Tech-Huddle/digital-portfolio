import './index.css'

import React from 'react'

const Education = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Education</h1>
      <div className="pl-4">
      <div className=' border-l-2 border-blue-800'>

      {
        props.details.map((item,i)=>
        (  <div key={i}>
          
        <div className="m-2 p-2">
          <span className='circles'></span>
        <div>
        <span className='text-lg'>{item['institute']}</span> | {item['course']} 
        </div>
        <div className="flex justify-between">

        <div>
          {item['major']}
        </div>
        <div>
          Graduation year: {item['pass-year']}
        </div>
        </div>
          </div>
        </div>
          )
          )
        }
        </div>
        </div>

</div>
  )
}

export default Education
