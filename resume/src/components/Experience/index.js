import './index.css'

import React from 'react'

const Experience = (props) => {
  return (
    <div>
        <h1 className="text-4xl font-bold">Work Experience</h1>
        {
          props.exp.map(
            (item,i)=> (
              <div key={i}>
                <h3>{item['organization']} </h3>
                <div>{item['duration']}</div>
                {item['history'].map((x,i)=>(
                  <div key={i}>
                  <div>{x['designation']}</div>
                  <div>{x['duration']}</div>
                  <div>{x['role']}</div>
                  <div>{x['contribution']}</div>
                  <div>{x['technology-used']}</div>
                  <div>{x['core-responsibility']}</div>
                  </div>
                  ))}
              </div>
            )
          )
        }
    </div>
  )
}

export default Experience
