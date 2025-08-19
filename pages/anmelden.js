import React from 'react'
import Container from '../components/Container'
import NewlsetterSignup from '../components/NewsletterSignup'
// import Link from '../components/Link'
// import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Button from '../components/Button'
import { useTranslations } from 'next-intl'
import Meta from '../components/Meta'

const SignUp = () => {
  const t = useTranslations()
  return (
    <>
      <Meta
        title={t('seo-meta.signup.title')}
        description={t('seo-meta.signup.description')}
      />
      <Container>
        <h2 className='text-4xl font-bold text-left font-display'>
          {t('signup.title')}
        </h2>
        <div className='flex flex-col md:flex-row gap-12 mt-12'>
          {/* <div className='flex-1 text-left'>
            <p className='text-left mb-4'>
              {t('signup.text')}
            </p>
            <Button
              className='w-full block text-center mb-4 pb-2 font-display font-bold text-indigo-900'
              target='_blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSfUHe57JQj2MPppoKhDxFAs3-c-2O4fHpMc4DV11guqlNx3Jg/viewform'
            >
              {t('signup.button')}
            </Button>
          </div> */}

          <div className='flex-1 text-left'>
            <p className='text-left mb-4'>{t('signup.text-closed')}</p>

            <h2 className='text-2xl font-bold text-left font-display'>
              {t('signup.newsletter')}
            </h2>

            <p className='text-left mb-4'>{t('signup.newsletter-text')}</p>

            <NewlsetterSignup />
          </div>
          <div className='flex-1 text-left'></div>

        </div>
      </Container>
    </>
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
