import React from 'react'
import SectionContainer from './Container'
import DonationBox from '../DonationBox'

const Donate = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>Spenden</h2>
      <h2 className='text-2xl font-bold text-left font-display mt-12'>
        Hilf uns die Tech-Welt zu queeren!
      </h2>
      <div className='flex flex-col md:flex-row md:gap-8 gap-0 mt-4'>
        <div className='flex-1 text-left'>
          <DonationBox />
          <p className='mb-4 mt-4'>
            Mit deiner Spende ermöglichst du jungen queeren Personen die
            Teilnahme am Queer Coding&nbsp;Camp.
          </p>
        </div>
        <div className='flex-1 text-left'>
          <p className='mb-4'>
            Der Verein Queer Coding Camp wurde 2024 vom Kanton Zürich als
            gemeinnütziger Verein anerkannt und ist damit steuerbefreit.
            Kontaktiere uns für eine Spendenbescheinigungen (für Spenden ab CHF
            100 im Jahr).
          </p>
          <p className='mb-4'>Spenden sind auch via Bankeinzahlung möglich:</p>
          <p>Name: Queer Coding Camp </p>
          <p>Ort: 8003 Zürich</p>
          <p>IBAN: CH25 0900 0000 1584 8382 5</p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Donate
