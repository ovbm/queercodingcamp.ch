import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import SectionContainer from './Container'
import Profile from '../Profile'
import olivier from '../../public/images/olivierbaumann.png'
import adi from '../../public/images/adi.jpg'
import tabea from '../../public/images/tabea.jpeg'
import A from '../Link'

// Warum besser rauskommen, Texte nehmen, die schon existieren.

const Ueber = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold text-left font-display'>
        Wer sind wir?
      </h1>
      <div className='flex flex-col md:flex-row gap-16 mt-4'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Queer Coding Tech!
          </h2>
          <p className='text-md mb-4'>
            Die Tech-Branche ist für Personen die nicht cis, männlich, weiss und
            hetero sind, ausschliessend. Das war nicht immer so. Und muss sich
            ändern!
          </p>
          <p className='text-md mb-4'>
            Der Verein Queer Coding Camp will mit Bildung und Förderung junger
            queerer Menschen und der Vernetzung von LBGTQ+ Personen in der
            Tech-Branche diesem Umstand entgegenwirken. Wir queeren die
            Tech-Welt, damit sie in Zukunft inklusiver, gerechter und ein
            sicherer Ort für queere Menschen wird.
          </p>
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
              bio='Olivier ist Produkt-Enwtickler beim Online Magazin Republik. Davor hat er in Kopenhagen das Klima-Startup electricityMap mitgegründet. Im Herbst 2021 hat er das Projekt Queer Coding Camp initiiert. '
            />
            <Profile
              imageSrc={tabea}
              name='Tabea Iseli'
              bio='Tabea ist Gründerin des Game-Studios Stardust und seit über zehn Jahren als Game-Designerin und Programmiererin tätig.'
            />
            <Profile
              imageSrc={adi}
              name='Adrian Demleitner'
              bio='Adrian studierte Postindustrie-Design am HyperWerk Basel. Er ist Initiator von ckster und Mitglied bei RAST.'
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ueber
