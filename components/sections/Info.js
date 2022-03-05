import React from 'react'
import SectionContainer from './Container'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const FAQ = () => {
  return (
    <div className='w-full'>
      <div className='w-full p-2 mx-auto bg-slate-900/20 rounded-2xl'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Wer kann am Queer Coding Camp teilnehmen?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-left text-sm'>
                Queere Personen zwischen 16 - 25 Jahren.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Was kostet das Queer Coding Camp?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2 text-sm'>
                Dank Unterstützung von Stiftungen und privaten Spenden ist
                die Teilnahme gratis.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Brauche ich Vorkenntnisse?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2 text-sm'>
                Nein. Du brauchst keine Programmier-Vorkenntnisse oder Affinität für IT. 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                <span>Wo und wann kann ich mich anmelden?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='text-left px-4 pt-4 pb-2 text-sm'>
                Ab Mai. Hier auf dieser Seite.
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
      <h1 className='text-6xl font-bold text-left font-display'>Info</h1>
      <div className='flex flex-col md:flex-row gap-12 mt-12'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            Coding Camp
          </h2>
          <p>
            Das Queer Coding Camp ist ein einwöchiges Lager, an dem du erste
            Erfahrungen mit Programmieren sammeln kannst. Wie baue ich eine
            Webseite? Was ist ein Algorythmus? Was ist queeres Game-Design?
            Queere Programmierer*innen aus der Branche bringen dir ihre Skills
            bei.
          </p>
          <h2 className='text-2xl font-bold text-left font-display mt-12'>
            Inhalt
          </h2>
          <p>
            Einführungen in Web und Game. Spannende Workshops und Inputs von
            Queeren Coder*innen.
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            Location
          </h2>
          <p>Im Residency-Haus Cima Citta, in Dangio, Tessin.</p>
        </div>
      </div>
      <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
        Weitere Fragen (FAQ)
      </h2>
      <div className='flex flex-col md:flex-row gap-8'>
        <FAQ />
      </div>
    </SectionContainer>
  )
}

export default CampInfo
