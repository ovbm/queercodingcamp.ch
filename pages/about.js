import React from 'react'
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  HeartIcon,
} from '@heroicons/react/24/solid'
import Container from '../components/Container'
import Profile from '../components/Profile'
import Link from '../components/Link'
import olivier from '../public/images/olivier.jpg'
import tabea from '../public/images/tabea.jpeg'
import samuel from '../public/images/SamVonaesch2024.jpeg'
import eva from '../public/images/eva.jpeg'

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
          <p className='text-lg mb-4'>
            Die Tech-Branche ist für Personen die nicht cis, männlich, weiss und
            hetero sind, ausschliessend. Das war nicht immer so. Und muss sich
            ändern!
          </p>
          <p className='text-lg mb-4'>
            Der Verein Queer Coding Camp will mit Bildung und Förderung junger
            queerer Menschen und der Vernetzung von LBGTQ+ Personen in der
            Tech-Branche diesem Umstand entgegenwirken. Wir queeren die
            Tech-Welt, damit sie in Zukunft inklusiver, gerechter und ein
            sicherer Ort für queere Menschen wird.
          </p>
          <p className='text-lg'>
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
            Möchtest du mitmachen?
          </h3>
          <p className='text-lg mb-4'>
            Wir sind immer nach der Suche nach Tutor*innen oder Mentor*innen,
            die am Camp unterrichten wollen. Meld dich bei{' '}
            <Link Icon={EnvelopeIcon} href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>
            .
          </p>
          <p className='text-lg mb-4'>
            Du kannst ausserdem
            <Link
              Icon={HeartIcon}
              href='https://docs.google.com/forms/d/e/1FAIpQLSdI_q8afBbx3V4H7rfawevAbRG9lk2zbi5GFP5K4iwQyJqTLQ/viewform?usp=sf_link'
            >
              Mitglied
            </Link>{' '}
            beim Verein Queer Coding Camp werden. Dann erhälst du eine Einladung
            zu unserer Mitgliederversammlung, bei der du über zukünftige
            Projekte mitbestimmen kannst. Mitgliederversammlung ein und oder
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Vereinsvorstand
          </h2>
          <div className='flex flex-col'>
            <Profile
              imageSrc={olivier}
              bsky='iovi.io'
              name='Olivier Baumann (er/ihm), Vorstand'
              bio='Olivier ist Produkt-Entwickler beim Online Magazin Republik. Davor hat er in Kopenhagen das Klima-Startup electricityMap mitgegründet. Im Herbst 2021 hat er das Projekt Queer Coding Camp initiiert. '
            />
            <Profile
              imageSrc={tabea}
              twitter='ElisaItabe'
              name='Tabea Iseli (she/they), Vorstand'
              bio='Tabea ist Gründerin des Game-Studios Stardust und seit über zehn Jahren als Game-Designerin und Programmiererin tätig.'
            />
            <Profile
              imageSrc={eva}
              name='Eva Bracey (they/she), Vorstand'
              bio='Eva is a neuroscientist studying the hypothalamus, an academic mentor and peer counsellor, and giant trans person.'
            />
            <Profile
              imageSrc={samuel}
              twitter='elephantatwork'
              name='Samuel Vonäsch (er/ihm), Programmleitung'
              bio='Samuel engagiert sich mit dem Swiss Game Hub für die Schweizer Game Entwicklung Szene und ist Gründer und Game Maker beim Game Studio lauflauf '
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Ueber
