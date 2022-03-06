import React from 'react'
import SectionContainer from './Container'
import NewlsetterSignup from '../NewsletterSignup'

const SignUp = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold text-left font-display'>Anmelden</h1>
      <div className='flex flex-col md:flex-row gap-12 mt-12'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            E-Mail Verteiler
          </h2>
          <NewlsetterSignup />

          <p className='mt-4'>
            Möchtest du benachrichtigt werden, wenn du dich fürs Queer Coding
            Camp anmelden kannst. Trag dich in unseren E-Mail Verteiler ein und
            du kriegst eine Mail sobald die Anmeldung möglich ist.
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            Ab Mai
          </h2>
          <p>
            Die Vorbereitungen für das erste Queer Coding Camp sind in vollem
            Gang. Ab Mitte Mai öffnen wir die Anmeldung fürs Camp.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default SignUp
