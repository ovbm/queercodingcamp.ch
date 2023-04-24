import React from 'react'
import { LinkIcon } from '@heroicons/react/24/solid'
import SectionContainer from './Container'
import A from '../Link'
import Supporter from '../Supporter'

// Warum besser rauskommen, Texte nehmen, die schon existieren.

const Supporters = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h2 className='text-6xl font-bold text-left font-display'>
        Ermöglicht durch
      </h2>

      <div className='flex flex-wrap gap-8 justify-start items-center md:gap-12 mt-16'>
        <Supporter
          href='https://haslerstiftung.ch'
          imageSrc='/images/hasler_stiftung.svg'
          name='Hasler Stiftung'
          width={320}
        />
        <Supporter
          href='https://prohelvetia.ch'
          imageSrc='/images/pro_helvetia.svg'
          name='Pro Helvetia'
          height={80}
          width={200}
        />
      </div>

      <h3
        id='supporters'
        className='text-2xl font-bold text-left font-display mt-16 mb-4'
      >
        Und unseren KMU Sponsoren
      </h3>

      <div className='flex flex-wrap gap-8 justify-start items-center md:gap-12 mt-8'>
        <Supporter
          href='https://www.puzzle.ch/de/stellen'
          imageSrc='/images/puzzle_itc_logo.svg'
          name='Puzzle ITC'
          hiring={true}
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
        <Supporter
          href='https://www.89grad.ch'
          imageSrc='/images/89grad.png'
          name='89grad'
          height={38}
          width={160}
        />
      </div>
      <p className='text-left mt-8'>
        Das Queer Coding Camp kann Dank der finanziellen Untertsützung von
        Stiftungen und Sponsoring-Beiträgen von Unternehmen stattfinden. Möchte
        auch dein Unternehmen das Projekt unterstützen? Infos dazu in unserem{' '}
        <A
          taget='_blank'
          Icon={LinkIcon}
          href='https://queercodingcamp.notion.site/Queer-Coding-Camp-KMU-Sponsoring-bb0ed022360e445e92abe94238f78646'
        >
          Sponsoring Aufruf für KMU&apos;s
        </A>
      </p>
    </SectionContainer>
  )
}

export default Supporters
