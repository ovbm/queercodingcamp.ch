import React from 'react'
import Container from '../components/Container'
import NewlsetterSignup from '../components/NewsletterSignup'
import Link from '../components/Link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Button from '../components/Button'
import { useTranslations } from 'next-intl'

const SignUp = () => {
  const t = useTranslations()
  return (
    <Container>
      <h2 className='text-4xl font-bold text-left font-display'>
        {t('signup.title')}
      </h2>
      <div className='flex flex-col md:flex-row gap-12 mt-12'>
        {/* <div className='flex-1 text-left'>
          <Button
            className='w-full block text-center mb-4 font-display font-bold text-indigo-900'
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSe8ERwIG9f01FAJ2leGcpXDv3VrwiVPK1T2PpqiVxx0xpEepQ/viewform?usp=sf_link'
          >
            Zum Anmeldeformular
          </Button>
          <p className='text-left mb-4'>
            Für das Camp im Oktober sind noch ein paar wenige Plätze verfügbar.
          </p>
        </div>
        <p className='text-left mb-4'>
          Die Anmeldungen für das Camp im Oktober 2024 sind geschlossen. Es kann
          sein, dass im Herbst kurzfristig Plätze frei werden. Willst du
          Neuigkeiten zum Camp und zukünftigen Aktivitäten des Vereins
          informiert werden? Dann trage dich in unseren Newsletter ein.
        </p>  */}
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display'>
            {t('signup.newsletter')}
          </h2>

          <p className='text-left mb-4'>
            {t('signup.newsletter-text')}
          </p>

          <NewlsetterSignup />
        </div>
        <div className='flex-1 text-left'></div>
      </div>
    </Container>
  )
}

export default SignUp

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}
