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
          <p className='text-2xl mt-3 font-display'>{t('index.subtitle')}</p>
          <Button
            href='https://docs.google.com/forms/d/e/1FAIpQLSfUHe57JQj2MPppoKhDxFAs3-c-2O4fHpMc4DV11guqlNx3Jg/viewform'
            className='font-display font-bold mt-4 pb-2 inline-block text-indigo-900'
          >
            {t('signup.button')}
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Top
