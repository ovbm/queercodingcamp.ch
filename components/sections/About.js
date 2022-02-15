import React from 'react'
import SectionContainer from './Container'
import Profile from '../Profile'
import olivier from '../../public/images/olivierbaumann.png'
import Donate from '../Donate'
import A from '../Link'

const Ueber = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold text-left font-display'>
        Wer sind wir?
      </h1>
      <h2 className='text-2xl font-bold text-left font-display mt-12'>
        Verein Queer Coding Camp
      </h2>
      <div className='flex flex-col sm:flex-row gap-4 p-4'>
        <div className='flex-1 text-left'>
          <p>
            Ein Paragraph der erklärt wer wir sind und was unsere Ziele sind.
          </p>
          <br />
          <p>
            <A
              taget='_blank'
              href='https://queercodecamp.notion.site/Statuten-des-Vereins-Queer-Coding-Camp-45b6ed0a758b4be59ebb5afcc5b5d6a7'
            >
              Unsere Statuten
            </A>
          </p>
          <br />
          <p>Möchtest du Mitglied werden und dich engagieren?</p>
          <p>
            <A
              taget='_blank'
              href='mailto:hi@queercodingcamp.ch'
            >
              hi@queercodingcamp.ch
            </A>
          </p>
        </div>
        <div className='flex-1 text-left'>
          <div className='flex flex-col'>
            <Profile
              imageSrc={olivier}
              name='Olivier Baumann'
              bio='Swiss/Brazilian product developer at Republik Magazin. Prev. co-founder of the climate tech start-up electricityMap.'
            />
            <Profile
              imageSrc={olivier}
              name='Tabea Iseli'
              bio='Ein Developer'
            />
            <Profile
              imageSrc={olivier}
              name='Olivier Baumann'
              bio='Ein Developer'
            />
          </div>
        </div>
      </div>
      <h2 className='text-2xl font-bold text-left font-display mt-12'>
        Spenden
      </h2>
      <div className='flex flex-col sm:flex-row gap-4 p-4'>
        <div className='flex-1 text-left'>
          <p>
            Wollen Sie das Queer Coding Camp unterstützen? Sie können den Verein
            folgendermassen unterstützen.
          </p>
          <p>IBAN 234234 3434 343 2224</p>
        </div>
        <div className='flex-1 text-left'>
          <Donate />
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ueber
