import React from 'react'
import SectionContainer from './Container'

const CampInfo = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold font-display'>Info</h1>
      <div style={{ height: 400 }}></div>
    </SectionContainer>
  )
}

export default CampInfo
