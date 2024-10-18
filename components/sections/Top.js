import React from 'react'
import Image from 'next/legacy/image'
import illustration from '../../public/images/queercodingcampillu.png'
import SectionContainer from './Container'
import Button from '../Button'

const Top = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <div className='flex flex-col md:flex-row md:mt-8 md:items-center gap-4 md:gap-16'>
        <div className='flex-1'>
          <Image
            className='drop-shadow-[0_5px_5px_rgba(255,255,255,0.35)]'
            src={illustration}
            alt='Pixel-Art Illustration, die eine gruppe queerer Menschen zeigt, die in einer Hütte zusammen programmieren.'
          />
        </div>
        <div className='flex-1 md:text-left'>
          <h1 className='text-3xl md:text-6xl font-bold font-display'>
            Queer Coding&nbsp;Camp
          </h1>
          <p className='text-2xl md:text-2xl font-display font-bold mt-3'>
            Programmieren lernen für junge queere Menschen.
          </p>
          <p className='text-xl md:text-xl font-display mt-4'>
            {/* SAVE THE DATE: <br /> */}
            <span className='font-black'>Oktober 2025</span>
          </p>
          {/* <Button
            href='#anmelden'
            className='font-display font-bold mt-4 inline-block'
          >
            Anmelden
          </Button> */}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Top
