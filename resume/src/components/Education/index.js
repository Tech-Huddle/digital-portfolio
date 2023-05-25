import './index.css'

import React from 'react'

const Education = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Education</h1>
      {
        props.details.map((item,i)=>
        (  <div key={i}>
        <div>
          {item['course']}
        </div>
        <div>
          {item['institute']}
        </div>
        <div>
          {item['major']}
        </div>
        <div>
          {item['pass-year']}
        </div>
          </div>
          )
        )
      }
    </div>
  )
}

export default Education
