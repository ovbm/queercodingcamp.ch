import React from 'react'
import Image from 'next/image'
import placeholder from '../../public/images/filler.jpeg'

import SectionContainer from './Container'

const Top = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <div className='flex flex-col md:flex-row md:mt-20 gap-8'>
        <div className='flex-1'>
          <Image src={placeholder} alt='Placeholder' />
        </div>
        <div className='flex-1 md:text-left'>
          <h1 className='text-5xl md:text-6xl font-bold font-display'>
            Queer Coding Camp
          </h1>
          <p className='text-2xl font-display font-normal mt-3'>
            Programmieren lernen, von queeren Menschen für junge queere
            Menschen.
          </p>
          <p className='text-xl md:text-xl font-regular mt-4'>
            10. - 16. Oktober 2022 <br />
            Cima Citta, Dangio - Tessin
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Top
