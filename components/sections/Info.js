import React from 'react'
import Image from 'next/legacy/image'
import SectionContainer from './Container'
import { Disclosure } from '@headlessui/react'
import {
  ChevronUpIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid'
import LocationImg from '../../public/images/schlafschloss.jpg'
import A from '../Link'
import Instagram from '../../public/images/Instagram.svg'
import { useTranslations } from 'next-intl'

const FAQ = () => {
  const t = useTranslations()

  const faq = [
    {
      question: t('info.faq.who'),
      answer: t('info.faq.who-text'),
    },
    {
      question: t('info.faq.cost'),
      answer: t('info.faq.cost-text'),
    },
    {
      question: t('info.faq.skills'),
      answer: t('info.faq.skills-text'),
    },
    {
      question: t('info.faq.when'),
      answer: t('info.faq.when-text'),
    },
    {
      question: t('info.faq.accessibility'),
      answer: t('info.faq.accessibility-text'),
    },
    {
      question: t('info.faq.language'),
      answer: t('info.faq.language-text'),
    },
  ]
  return (
    <div className='w-full'>
      <div className='w-full p-3 mx-auto bg-slate-900/20 rounded-2xl '>
        {faq.map((item) => (
          <Disclosure key={item.question} as='div' className='mt-3 first:mt-0'>
            {({ open }) => (
              <>
                <Disclosure.Button className='text-xl font-display flex justify-between w-full px-4 py-2 text-left rounded-lg bg-gray-900/50 hover:bg-gray-700/50 backdrop-blur-sm backdrop-saturate-200 shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''} w-5 h-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-left text-lg'>
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

const CampInfo = ({ id }) => {
  const t = useTranslations()
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>
        {t('info.title')}
      </h2>
      <div className='flex flex-col gap-12 md:flex-row md:gap-16 mt-12'>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            {t('info.coding-camp')}
          </h2>
          <p className='mb-4 '>{t('info.coding-camp-text')}</p>
          <p className='mb-4 '>{t('info.coding-camp-text-2')}</p>
          <p className=''>{t('info.coding-camp-text-3')}</p>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            {t('info.location')}
          </h2>
          <Image
            className='rounded-xl'
            alt='Cima Citta in Dangio'
            src={LocationImg}
          />
          <p className='mt-4 '>
            {t.rich('info.location-text', {
              a: (chunks) => (
                <A
                  href='https://www.schlafschloss.ch'
                  target='_blank'
                  rel='noreferrer'
                  Icon={ArrowTopRightOnSquareIcon}
                >
                  {chunks}
                </A>
              ),
            })}
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mb-4'>
            {t('info.faq-title')}
          </h2>
          <div className='flex flex-col md:flex-row gap-8'>
            <FAQ />
          </div>
          <p className='mt-8'>{t('info.faq-contact')}</p>
          <div className='flex gap-8'>
            <a
              href='https://www.instagram.com/queercodingcamp/'
              target='_blank'
              rel='noreferrer'
              className='flex-1 rounded-xl p-4 mt-6 bg-gradient-to-r from-pink-700/80 to-red-600/80 hover:backdrop-brightness-200 flex items-center shadow-md hover:shadow-lg transition-all duration-200'
            >
              <Image src={Instagram} width={32} height={32} alt='Instagram' />
              <span className='ml-4'>Instagram.</span>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default CampInfo
