import React from 'react'
import SectionContainer from './Container'
import NewlsetterSignup from '../NewsletterSignup'
import Button from '../Button'

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
            Die Anmeldung für das Coding Camp im Oktober 2022 ist geschlossen.
            Willst du Neuigkeiten zum Camp und zukünftige Camps informiert
            werden? Dann trage dich in unseren Newsletter ein.
          </p>
          <NewlsetterSignup />
        </div>
        <div className='flex-1 text-left'></div>
      </div>
    </SectionContainer>
  )
}

export default SignUp
