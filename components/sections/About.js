import React from 'react'
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'
import SectionContainer from './Container'
import Profile from '../Profile'
import olivier from '../../public/images/olivierbaumann.png'
import tabea from '../../public/images/tabea.jpeg'
import samuel from '../../public/images/SamVonäsch2024.jpeg'
import Link from '../Link'

const Ueber = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>
        Wer sind wir?
      </h2>
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
            <Link
              Icon={ArrowTopRightOnSquareIcon}
              target="_blank"
              href='https://queercodingcamp.notion.site/Statuten-des-Vereins-Queer-Coding-Camp-04-12-2023-159e87a58e3d43ddbbe9fbd0456c7e5c?pvs=4'
            >
              Unsere Statuten
            </Link>
          </p>
          <br />
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Möchtest du mithelfen?
          </h2>
          <p>
            Meld dich bei uns:{' '}
            <Link Icon={EnvelopeIcon} href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Vereinsvorstand
          </h2>
          <div className='flex flex-col'>
            <Profile
              imageSrc={olivier}
              threads='@olivier.iovi'
              name='Olivier Baumann'
              bio='Olivier ist Produkt-Entwickler beim Online Magazin Republik. Davor hat er in Kopenhagen das Klima-Startup electricityMap mitgegründet. Im Herbst 2021 hat er das Projekt Queer Coding Camp initiiert. '
            />
            <Profile
              imageSrc={tabea}
              twitter='ElisaItabe'
              name='Tabea Iseli'
              bio='Tabea ist Gründerin des Game-Studios Stardust und seit über zehn Jahren als Game-Designerin und Programmiererin tätig.'
            />
            <Profile
              imageSrc={samuel}
              twitter='elephantatwork'
              name='Samuel Vonäsch, Programmleitung'
              bio='Samuel engagiert sich mit dem Swiss Game Hub für die Schweizer Game Entwicklung Szene und ist Gründer und Game Maker beim Game Studio lauflauf '
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ueber
