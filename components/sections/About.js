import React from 'react'
import Image from 'next/image'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import SectionContainer from './Container'
import Profile from '../Profile'
import olivier from '../../public/images/olivierbaumann.png'
import adi from '../../public/images/adi.jpg'
import tabea from '../../public/images/tabea.jpeg'
import A from '../Link'
import Supporter from '../Supporter'

// Warum besser rauskommen, Texte nehmen, die schon existieren.

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
              twitter='obauma'
              name='Olivier Baumann'
              bio='Olivier ist Produkt-Entwickler beim Online Magazin Republik. Davor hat er in Kopenhagen das Klima-Startup electricityMap mitgegründet. Im Herbst 2021 hat er das Projekt Queer Coding Camp initiiert. '
            />
            <Profile
              imageSrc={tabea}
              twitter='ElisaItabe'
              name='Tabea Iseli'
              bio='Tabea ist Gründerin des Game-Studios Stardust und seit über zehn Jahren als Game-Designerin und Programmiererin tätig.'
            />
            {/* <Profile
              imageSrc={adi}
              name='Adrian Demleitner'
              twitter='_thgie'
              bio='Adrian studierte Postindustrie-Design am HyperWerk Basel und hat soeben einen MA in Designforschung an der MAD HKB abgeschlossen. Adrian arbeitet als wissenschaftlicher Softwareprogrammierer an der Uni Basel.'
            /> */}
          </div>
        </div>
      </div>
      <h2
        id='supporters'
        className='text-2xl font-bold text-left font-display mt-12 mb-4'
      >
        Supporters
      </h2>

      <div className='flex flex-wrap gap-8 justify-center items-center md:justify-start md:gap-12 mt-8'>
        <Supporter
          href='https://www.puzzle.ch/de/stellen'
          imageSrc='/images/puzzle_itc_logo.svg'
          name='Puzzle ITC'
          hiring={true}
        />
        <Supporter
          href='https://www.fanaka.ch'
          imageSrc='/images/fanaka_logo.svg'
          name='Fanaka'
        />
        <Supporter
          href='https://www.cyon.ch/ueber-cyon/jobs'
          imageSrc='/images/cyon-logo-white.svg'
          name='Cyon'
          height={36}
          width={120}
          hiring={true}
        />
        <Supporter
          href='https://codesmith.ch'
          imageSrc='/images/codesmith-logo.svg'
          name='Codesmith'
        />
        <Supporter
          href='https://www.liip.ch/jobs'
          imageSrc='/images/liip-logo.svg'
          name='Liip'
          height={34}
          width={110}
          hiring
        />
      </div>
      <p className='text-left mt-8'>
        Das Queer Coding Camp kann Dank der finanziellen Untertsützung von
        Stiftungen und Sponsoring-Beiträgen von Unternehmen stattfinden. Möchte
        auch dein Unternehmen das Projekt unterstützen? Infos dazu in unserem{' '}
        <A
          taget='_blank'
          Icon={ExternalLinkIcon}
          href='https://queercodecamp.notion.site/Queer-Coding-Camp-Sponsoring-bb0ed022360e445e92abe94238f78646'
        >
          Sponsoring Aufruf für KMU&apos;s
        </A>
      </p>
    </SectionContainer>
  )
}

export default Ueber
