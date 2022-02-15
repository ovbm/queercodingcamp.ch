import React from 'react'
import SectionContainer from './Container'

const Top = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <div className='flex flex-col sm:flex-row items-center mt-36 gap-8'>
        <div className='bg-slate-700 rounded-full flex-1 flex justify-center items-center text-center'>
          <div className='text-6xl font-bold font-display h-24'>Bild</div>
        </div>
        <div className='flex-1 sm:text-left'>
          <h1 className='text-5xl sm:text-6xl font-bold font-display'>
            Queer Coding Camp
          </h1>
          <p className='text-xl sm:text-2xl font-bold mt-4'>
            10. - 16. Oktober 2022
          </p>
          <p className='text-sm font-display mt-3  rounded-lg'>Save the Date</p>
        </div>
      </div>
      <div style={{ height: 400 }}></div>
    </SectionContainer>
  )
}

export default Top
