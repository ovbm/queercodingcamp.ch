import React from 'react'
import Container from '../components/Container'
import DonationBox from '../components/DonationBox'

const Donate = () => {
  return (
    <Container >
      <h2 className='text-4xl font-bold text-left font-display'>
        Hilf uns die Tech-Welt zu queeren!
      </h2>
      <div className='flex flex-col md:flex-row md:gap-8 gap-0 mt-16'>
        <div className='flex-1 text-left'>
          <DonationBox />
        </div>
        <div className='flex-1 text-left'>
          <p className='mb-8 mt-8 md:mt-0'>
            Mit deiner Spende ermöglichst du jungen queeren Personen die
            Teilnahme am Queer Coding&nbsp;Camp.
          </p>
          <p className='mb-8'>
            Der Verein Queer Coding Camp wurde 2024 vom Kanton Zürich als
            gemeinnütziger Verein anerkannt und ist damit steuerbefreit.
            Kontaktiere uns für eine Spendenbescheinigungen (für Spenden ab CHF
            100 im Jahr).
          </p>
          <p className='mb-8'>
            Spenden sind auch via Bankeinzahlung möglich:
          </p>
          <p className='mb-8'>
            {' '}
            Name: Queer Coding Camp <br />
            Ort: 8003 Zürich
            <br />
            IBAN: CH25 0900 0000 1584 8382 5
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Donate
