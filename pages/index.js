import Head from 'next/head'
import config from '../config'
import SectionAbout from '../components/sections/About'
import CampInfoSection from '../components/sections/Info'
import TopSection from '../components/sections/Top'
import DonateSection from '../components/sections/Donate'
import SignupSection from '../components/sections/Signup'

const { title, description } = config

export default function Home({}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta
          property='og:image'
          content='https://queercodingcamp.ch/images/queercodingcamp_og_image.png'
        />
        <meta property='twitter:card' content='summary' />
        <meta property='twitter:title' content={title} />
        <meta
          property='twitter:image'
          content='https://queercodingcamp.ch/images/queercodingcamp_og_image.png'
        />
        <meta property='twitter:description' content={description} />
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <TopSection id='top' />
        <CampInfoSection id='info' />
        <SignupSection id='anmelden' />
        <SectionAbout id='about' />
        <DonateSection id='spenden' />
      </main>
    </>
  )
}
