import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import SectionContainer from './Container'
import Profile from '../Profile'
import olivier from '../../public/images/olivierbaumann.png'
import adi from '../../public/images/adi.jpg'
import tabea from '../../public/images/tabea.jpeg'
import A from '../Link'

const Ueber = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold text-left font-display'>
        Wer sind wir?
      </h1>
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Queer Coding Tech!
          </h2>
          <p className='text-md mb-4'>
            Die Tech-Branche ist heute für Personen die nicht cis, männlich,
            weiss oder heterosexuell und für Personen, die von
            Mehrfachdiskriminierungen betroffen sind, ausschliessend.
          </p>
          <p className='text-md mb-4'>Das war nicht immer so!</p>
          <p>
            <A
              taget='_blank'
              Icon={ExternalLinkIcon}
              href='https://queercodecamp.notion.site/Statuten-des-Vereins-Queer-Coding-Camp-45b6ed0a758b4be59ebb5afcc5b5d6a7'
            >
              Unsere Statuten
            </A>
          </p>
          <br />
          <p>Möchtest du dich engagieren?</p>
          <p>
            <A taget='_blank' href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </A>
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Vereinsvorstand
          </h2>
          <div className='flex flex-col'>
            <Profile
              imageSrc={olivier}
              name='Olivier Baumann'
              bio='Olivier ist Produkt-Enwtickler beim Online Magazin Republik. Davor hat er in Kopenhagen das Klima-Startup electricityMap mitgegründet. Im Herbst 2021 hat er das das Queer Coding Camps ins Leben gerufen. '
            />
            <Profile
              imageSrc={tabea}
              name='Tabea Iseli'
              bio='Ein Developer'
            />
            <Profile
              imageSrc={adi}
              name='Adrian Demleitner'
              bio='Ein Developer'
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ueber
