import React from 'react'
import Image from 'next/legacy/image'
import illustration from '../../public/images/queercodingcampillu.png'
import SectionContainer from './Container'
import Button from '../Button'
import { useTranslations } from 'next-intl'

const Top = ({ id }) => {
  const t = useTranslations()
  return (
    <SectionContainer id={id}>
      <div className='flex flex-col md:flex-row md:mt-8 md:items-center gap-4 md:gap-16'>
        <div className='flex-1'>
          <Image
            className='drop-shadow-[0_5px_5px_rgba(255,255,255,0.35)]'
            src={illustration}
            alt={t('index.illustration')}
          />
        </div>
        <div className='flex-1 md:text-left'>
          <h1 className='text-5xl md:text-7xl font-bold font-display'>
            {t('index.title')}
          </h1>
          <p className='text-3xl mt-3 font-display text-shadow-title'>
            {t('index.subtitle')}
          </p>
          <Button
            href='https://docs.google.com/forms/d/e/1FAIpQLSdZJVU_Ib6HRPwiQCXklXcE1vu8EV1w8fKAsUtkgrunBfl2MA/viewform'
            className='font-display font-bold mt-4 pb-2 inline-block text-indigo-900'
          >
            {t('signup.button')}
          </Button>
          <a
            href='https://www.instagram.com/p/DXPA_McDUp1/'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-block w-full shadow-lg rounded-xl p-4 bg-black/20 backdrop-blur-sm hover:bg-black/10 transition-colors text-left'
          >
            <p className='font-display font-bold text-xl leading-tight'>
              {t('index.event.title')}
            </p>
            <p className='text-sm mt-1'>
              {t('index.event.date')}
            </p>
            <p className='text-sm mt-2'>
              {t('index.event.description')}
            </p>
            <p className='text-sm mt-2 font-semibold underline underline-offset-2'>
              {t('index.event.link')}
            </p>
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Top
