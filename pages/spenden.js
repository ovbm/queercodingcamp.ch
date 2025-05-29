import React from 'react'
import Container from '../components/Container'
import DonationBox from '../components/DonationBox'
import { useTranslations } from 'next-intl'

const Donate = () => {
  const t = useTranslations()
  return (
    <Container>
      <h2 className='text-4xl font-bold text-left font-display'>
        {t('donate.title')}
      </h2>
      <div className='flex flex-col md:flex-row md:gap-8 gap-0 mt-16'>
        <div className='flex-1 text-left'>
          <DonationBox />
        </div>
        <div className='flex-1 text-left'>
          <p className='mb-8 mt-8 md:mt-0'>{t('donate.text-1')}</p>
          <p className='mb-8'>{t('donate.text-2')}</p>
          <p className='mb-8'>{t('donate.text-3')}</p>
          <p className='mb-8'>
            {t.rich('donate.text-4', { br: () => <br /> })}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Donate

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}
