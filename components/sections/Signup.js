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
          <Button
            className='w-full block text-center mb-4 font-display font-bold text-indigo-900'
            target="_blank"
            href='https://docs.google.com/forms/d/e/1FAIpQLSfXutn8txR7TqF5A_fNW9wzronFDe6bSYVumEzBdYGHF5goUg/viewform?usp=sf_link'
          >
            Zum Anmeldeformular
          </Button>
          <p className='text-left mb-4'>
            Die Anmeldung ist ab sofort bis und mit 10. Juli 2022 möglich. Bis
            am 17. Juli 2022 benachrichtigen wir dich, ob du am Camp teilnehmen
            kannst. Falls wir mehr Anmeldungen haben als Plätze verfügbar sind,
            wird es eine Warteliste geben.
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display'>
            Newsletter
          </h2>
          <p className='text-left mb-4'>
            Willst du Neuigkeiten zum Camp und zukünftige Camps informiert
            werden? Dann trage dich in unseren Newsletter ein.
          </p>
          <NewlsetterSignup />
        </div>
      </div>
    </SectionContainer>
  )
}

export default SignUp
