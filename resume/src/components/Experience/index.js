import './index.css'

import React from 'react'

const Experience = (props) => {
  return (
    <div>
        <h1 className="text-4xl font-bold">Work Experience</h1>
        <div className="p-2">

        {
          props.exp.map(
            (item,i)=> (
              <div key={i}>
                <div className="flex justify-between border-b-2 border-blue-800 rounded-b-sm">

                <h3 className="text-lg font-bold text-blue-800">{item['organization']} </h3>
                <div>{item['duration']}</div>
                </div>
                <div className="m-2 p-2 border-l-2 border-blue-800">

                {item['history'].map((x,i)=>(
                  <div key={i}>
                    <span className='chompa'></span>
                    <div className="mx-3 text-justify">

                  <div className='text-lg'>{x['designation']}</div>
                  <div>{x['duration']}</div>

                  <div>{x['role']}</div>
                  <div>{x['contribution']}</div>
                  <div className='text-blue-800'> <span className='text-blue-800 font-bold'>Tech Stack:</span>    {x['technology-used']}</div>
                  <div>{x['core-responsibility']}</div>
                    </div>
                  </div>
                  ))}

                  </div>
              </div>
            )
          )
        }
        </div>
    </div>
  )
}

export default Experience
