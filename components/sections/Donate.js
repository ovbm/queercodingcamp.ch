import React from 'react'
import SectionContainer from './Container'
import DonationBox from '../DonationBox'

const Donate = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold text-left font-display'>Spenden</h1>
      <h2 className='text-2xl font-bold text-left font-display mt-12'>
        Hilf uns die Tech-Welt zu queeren!
      </h2>
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='flex-1 text-left'>
          <p>
            Willst du das Queer Coding Camp unterstützen? Sie können den Verein
            folgendermassen unterstützen.
          </p>
          <p>Queer Coding Camp, 8003 Zürich</p>
          <p>IBAN: CH25 0900 0000 1584 8382 5</p>
        </div>
        <div className='flex-1 text-left'>
          <DonationBox />
        </div>
      </div>
    </SectionContainer>
  )
}

export default Donate
