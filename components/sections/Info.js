import React from 'react'
import Image from 'next/image'
import SectionContainer from './Container'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import CimaCittaImg from '../../public/images/cimacitta.jpeg'
import A from '../Link'


const FAQ = () => {
  return (
    <div className='w-full'>
      <div className='w-full p-2 mx-auto bg-slate-900/20 rounded-2xl'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Wer kann am Queer Coding Camp teilnehmen?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-left'>
                Das Camp ist ausgerichtet für queere Personen zwischen 16 - 25
                Jahren. FINTA (Frauen, Inter, Nichtbinäre, Trans und Agender
                Menschen) sind in der Tech-Welt stark untervertreten, weshalb
                sie bei der Anmeldung Priorität haben. Bist du älter oder
                jünger? Schreib uns. Die Altersgrenzen sind Richtwerte.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Was kostet das Queer Coding Camp?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2'>
                Dank Unterstützung von Stiftungen und privaten Spenden ist die
                Teilnahme gratis. Die Anfahrt musst du selbst organisieren.
                Falls das für dich nicht möglich ist, kannst du das bei der
                Anmeldung anmerken und wir finden eine Lösung.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Brauche ich Vorkenntnisse oder einen Laptop?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2'>
                Du brauchst keine Programmier-Vorkenntnisse oder Affinität für
                IT. Wenn du einen eigenen Laptop hast, bitten wir dich diesen
                mitzubringen. Falls nicht, organisieren wir einen für dich.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Wo und wann kann ich mich anmelden?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2'>
                Wir öffnen die Anmeldung für das Camp im Mai. Du kannst dich
                jetzt schon in{' '}
                <a className='underline' href='#anmelden'>
                  unseren Email-Verteiler eintragen
                </a>
                , dann melden wir uns bei dir, sobald die Ameldung geöffnet ist.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Ist der Ort rollstuhlgängig?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2'>
                Die Cima Citta ist leider nicht rollstuhlgängig. Wir möchten
                zukünftige Coding Camps an barrierefreien Orten wie z.B. der
                Jugendherberge Burghof durchführen. Dieses Jahr hat es aus
                finanziellen Gründen nicht geklappt.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

const CampInfo = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>Info</h2>
      <div className='flex flex-col gap-12 md:flex-row md:gap-16 mt-12'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            Coding Camp
          </h2>
          <p className='mb-4'>
            Das Queer Coding Camp ist ein einwöchiges Lager, an dem du erste
            Erfahrungen mit Programmieren sammeln kannst. Wie baue ich eine
            Webseite? Was ist queeres Design? Was macht ein Algorithmus? Queere
            Programmierer*innen bringen dir ihre Skills bei und stehen dir als
            Mentor*innen für deine eigenen Projekte zur Seite.
          </p>
          <p className='mb-4'>
            Du lernst Grundkenntnisse in der Programmierung von Webseiten und
            Games. Ausserdem gibt es Workshops und Inputs zu Themen wie
            Datenschutz, Social Media, Algorithmen und künstliche Intelligenz.
          </p>
          <p>
            Am Abend gibt es Spiele, Pen and Paper, Games oder einfach
            gemütliches Zusammensein beim Lagerfeuer. Die Jugendorganisation
            Milchjugend hilft uns in der Ausgestaltung des Abendprogramms.
          </p>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            Location
          </h2>
          <Image
            className='mix-blend-hard-light rounded-xl'
            alt='Cima Citta in Dangio'
            src={CimaCittaImg}
          />
          <p className='mt-4'>
            Das Coding Camp findet im Residency-Haus{' '}
            <A href='https://cimacitta.ch/de' target='_blank' rel="noreferrer" Icon={ExternalLinkIcon}>
              Cima Citta
            </A>
            , in Dangio, Tessin statt. Die Cima Citta befindet sich auf dem
            Gelände der ehemaligen Schokoladenfabrik <i>Cima Norma</i>. Sie
            liegt im Blenio Tal und ist in einer halben Stunde von Biasca mit
            dem Bus erreichbar.
          </p>
          <p className='mt-4'>
            Als Teilnehmer*in übernachtest du in mehrheitlich Zweier- oder
            Viererzimmern im ehemaligen Arbeiterhaus &laquo;Pensionato&raquo;.
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            Weitere Fragen (FAQ)
          </h2>
          <div className='flex flex-col md:flex-row gap-8'>
            <FAQ />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default CampInfo
