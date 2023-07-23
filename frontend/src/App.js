import React from 'react'
import BasicDetails from './components/UserForm/BasicDetails'
import Part2 from './components/UserForm/ExperienceDetails'
import EducationDetails from './components/UserForm/EducationDetails'
import OtherDetails from './components/UserForm/OtherDetails'

const App = () => {
  // use state diye part1 r part2 er modheye switch korte hobe
  
  return (
    <div>
      <BasicDetails></BasicDetails>
      <Part2></Part2>
      <EducationDetails/>
      <OtherDetails></OtherDetails>
    </div>
  )
}

export default App
