import React from 'react'
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  HeartIcon,
} from '@heroicons/react/24/solid'
import Container from '../components/Container'
import Profile from '../components/Profile'
import Link from '../components/Link'
import olivier from '../public/images/olivierbaumann.png'
import tabea from '../public/images/tabea.jpeg'
import samuel from '../public/images/SamVonaesch2024.jpeg'

const Ueber = () => {
  return (
    <Container>
      <h2 className='text-4xl md:text-6xl font-bold text-left font-display'>
        Wer sind wir?
      </h2>
      <div className='flex flex-col md:flex-row gap-16 mt-4'>
        <div className='flex-1 text-left'>
          <h3 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Queer Coding Tech!
          </h3>
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
              target='_blank'
              href='https://queercodingcamp.notion.site/Statuten-des-Vereins-Queer-Coding-Camp-04-12-2023-159e87a58e3d43ddbbe9fbd0456c7e5c'
            >
              Unsere Statuten
            </Link>
          </p>
          <br />
          <h3 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Möchtest du mithelfen?
          </h3>
          <p>
            <Link
              Icon={HeartIcon}
              href='https://docs.google.com/forms/d/e/1FAIpQLSdI_q8afBbx3V4H7rfawevAbRG9lk2zbi5GFP5K4iwQyJqTLQ/viewform?usp=sf_link'
            >
              Werde Mitglied
            </Link>{' '}
            beim Verein Queer Coding Camp oder meld dich bei uns:{' '}
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
              bsky="iovi.io"
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
    </Container>
  )
}

export default Ueber
