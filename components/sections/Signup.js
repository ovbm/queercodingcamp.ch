import React from 'react'
import SectionContainer from './Container'
import NewlsetterSignup from '../NewsletterSignup'
import Link from '../Link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Button from '../Button'

const SignUp = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>Anmelden</h2>
      <div className='flex flex-col md:flex-row gap-12 mt-12'>
        {/* <div className='flex-1 text-left'>
          <Button
            className='w-full block text-center mb-4 font-display font-bold text-indigo-900'
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSeO1bMSZ-pxFA7F4iOrhtqV_XQv6pU6vc4PzubifDukCgdZzA/viewform?usp=sf_link'
          >
            Zum Anmeldeformular
          </Button>
          <p className='text-left mb-4'>
            Die Anmeldung ist ab sofort bis und mit Sonntag <b>2. Juli 2023</b>
            möglich. Bis am 4. Juli 2023 benachrichtigen wir dich, ob du am Camp
            teilnehmen kannst. Falls wir mehr Anmeldungen haben als Plätze
            verfügbar sind, wird es eine Warteliste geben.
          </p>
        </div> */}
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display'>
            Newsletter
          </h2>
          <p className='text-left mb-4'>
            Die Anmeldung für das Coding Camp 2024 wird im Juni 2024
            möglich sein. Willst du benachrichtigt werden, sobald die Anmeldung
            geöffnet wird? Dann trage dich in unseren Newsletter ein.
          </p>
          {/* <p className='text-left mb-4'>
            Die Anmeldungen für das Camp im Oktober 2023 sind geschlossen. Es
            kann sein, dass im Herbst kurzfristig Plätze frei werden. Willst du
            Neuigkeiten zum Camp und zukünftigen Aktivitäten des Vereins
            informiert werden? Dann trage dich in unseren Newsletter ein.
          </p> */}
          <NewlsetterSignup />
        </div>
        <div className='flex-1 text-left'></div>
      </div>
    </SectionContainer>
  )
}

export default SignUp
