import React from 'react'
import SectionContainer from './Container'
import NewlsetterSignup from '../NewsletterSignup'

const SignUp = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-6xl font-bold text-left font-display'>Anmelden</h1>
      <p className='text-left mt-12 mb-4'>
        Die Vorbereitungen für das erste Queer Coding Camp sind im vollen Gange.
        Die Anmeldung fürs Camp wird ab <b>Mai 2022</b> möglich sein. Willst du
        benachrichtigt werden, sobald die Anmeldung freigeschaltet wird? Dann
        trage dich in unseren Email-Verteiler ein.
      </p>
      <div className='flex flex-col md:flex-row gap-12'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            E-Mail Verteiler
          </h2>
          <NewlsetterSignup />
        </div>
        <div className='flex-1 text-left'></div>
      </div>
    </SectionContainer>
  )
}

export default SignUp
