import React from 'react'
import SectionContainer from './Container'
import NewlsetterSignup from '../NewsletterSignup'
import Link from '../Link'
import { MailIcon } from '@heroicons/react/24/solid'

const SignUp = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>Anmelden</h2>
      <div className='flex flex-col md:flex-row gap-12 mt-12'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display'>
            Newsletter
          </h2>
          <p className='text-left mb-4'>
            Die Anmeldung für das Coding Camp 2023 wird nächstes Frühjahr
            möglich sein. Willst du benachrichtigt werden, sobald die Anmeldung
            geöffnet wird? Dann trage dich in unseren Newsletter ein.
          </p>
          <NewlsetterSignup />
          {/* <h2 className='text-2xl font-bold text-left font-display'>
            Letzte Plätze
          </h2>
          <p className='text-left mb-4'>
            Für das Camp im Oktober 2022 gibt es noch ein paar wenige Plätze für
            spontane Anmeldungen. Interessiert? Schreib eine E-Mail an{' '}
            <Link Icon={MailIcon} href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>
            .
          </p> */}
        </div>
        <div className='flex-1 text-left'></div>
      </div>
    </SectionContainer>
  )
}

export default SignUp
