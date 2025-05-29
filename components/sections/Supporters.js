import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import SectionContainer from './Container'
import A from '../Link'
import Supporter from '../Supporter'
import { useTranslations } from 'next-intl'

const Supporters = ({ id }) => {
  const t = useTranslations()
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>
        {t('supporters.title')}
      </h2>
      <p className='text-left mt-8'>
        {t.rich('supporters.text', {
          a: (chunks) => (
            <A
              taget='_blank'
              Icon={ArrowTopRightOnSquareIcon}
              href='https://queercodingcamp.notion.site/Queer-Coding-Camp-KMU-Sponsoring-bb0ed022360e445e92abe94238f78646'
            >
              {chunks}
            </A>
          ),
        })}
      </p>
      <div className='flex flex-wrap gap-8 justify-start items-center md:gap-12 mt-16'>
        <Supporter
          href='https://www.lgbtiyouthfund.ch'
          imageSrc='/images/lgbti_youth_fund.png'
          name='LGBTI Youth Fund'
          width={180}
        />
        <Supporter
          href='https://prohelvetia.ch'
          imageSrc='/images/pro_helvetia.svg'
          name='Pro Helvetia'
          height={80}
          width={180}
        />
        <Supporter
          href='https://haslerstiftung.ch'
          imageSrc='/images/hasler_stiftung.svg'
          name='Hasler Stiftung'
          width={200}
        />
        <Supporter
          href='https://www.fanaka.ch'
          imageSrc='/images/fanaka_logo.svg'
          name='Fanaka'
          height={36}
          width={120}
        />
        <Supporter
          href='https://www.cyon.ch/ueber-cyon/jobs'
          imageSrc='/images/cyon-logo-white.svg'
          name='Cyon'
          height={36}
          width={120}
          hiring={true}
        />
        <Supporter
          href='https://codesmith.ch'
          imageSrc='/images/codesmith-logo.svg'
          name='Codesmith'
        />
        <Supporter
          href='https://www.liip.ch/jobs'
          imageSrc='/images/liip-logo.svg'
          name='Liip'
          height={34}
          width={110}
          hiring
        />
      </div>
    </SectionContainer>
  )
}

export default Supporters
