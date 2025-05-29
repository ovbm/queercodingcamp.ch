import React from 'react'
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  HeartIcon,
} from '@heroicons/react/24/solid'
import { useTranslations } from 'next-intl'

import Container from '../components/Container'
import Profile from '../components/Profile'
import Link from '../components/Link'
import olivier from '../public/images/olivier.jpg'
import tabea from '../public/images/tabea.jpeg'
import samuel from '../public/images/SamVonaesch2024.jpeg'
import eva from '../public/images/eva.jpeg'
import liam from '../public/images/liam-small.png'

const Ueber = () => {
  const t = useTranslations()
  return (
    <Container>
      <h2 className='text-4xl font-bold text-left font-display'>
        {t('about.title')}
      </h2>
      <div className='flex flex-col md:flex-row gap-16 mt-4'>
        <div className='flex-1 text-left'>
          <h3 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            {t('about.title-2')}
          </h3>
          <p className='mb-4'>
            {t('about.text-1')}
          </p>
          <p className='mb-4'>
            {t('about.text-2')}
          </p>
          <p>
            <Link
              Icon={ArrowTopRightOnSquareIcon}
              target='_blank'
              href='https://queercodingcamp.notion.site/Statuten-des-Vereins-Queer-Coding-Camp-04-12-2023-159e87a58e3d43ddbbe9fbd0456c7e5c'
            >
              {t('about.statutes')}
            </Link>
          </p>
          <br />
          <h3 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            {t('about.participate')}
          </h3>
          <p className='mb-4'>
            {t.rich('about.participate-text-1', {
              a: (chunks) => (
                <Link Icon={EnvelopeIcon} href='mailto:hi@queercodingcamp.ch'>
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <p className='mb-4'>
            {t.rich('about.participate-text-2', {
              a: (chunks) => (
                <Link Icon={HeartIcon} href='https://docs.google.com/forms/d/e/1FAIpQLSdI_q8afBbx3V4H7rfawevAbRG9lk2zbi5GFP5K4iwQyJqTLQ/viewform?usp=sf_link'>
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
        <div className='flex-1 text-left'>
          <h2 className='text-2xl font-bold text-left font-display mt-12 mb-4'>
            {t('about.board')}
          </h2>
          <div className='flex flex-col'>
            <Profile
              imageSrc={eva}
              name={t('about.eva-name')}
              bio={t('about.eva')}
            />
            <Profile
              imageSrc={liam}
              bsky='iamli.am'
              name={t('about.liam-name')}
              bio={t('about.liam')}
            />
            <Profile
              imageSrc={olivier}
              bsky='iovi.io'
              name={t('about.olivier-name')}
              bio={t('about.olivier')}
            />
            <Profile
              imageSrc={samuel}
              twitter='elephantatwork'
              name={t('about.samuel-name')}
              bio={t('about.samuel')}
            />
            <Profile
              imageSrc={tabea}
              twitter='ElisaItabe'
              name={t('about.tabea-name')}
              bio={t('about.tabea')}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Ueber

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}
