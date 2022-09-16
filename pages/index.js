import Head from 'next/head'
import config from '../config'
import SectionAbout from '../components/sections/About'
import CampInfoSection from '../components/sections/Info'
import TopSection from '../components/sections/Top'
import DonateSection from '../components/sections/Donate'
import SignupSection from '../components/sections/Signup'
import SupporterSection from '../components/sections/Supporters'

const { title, description } = config

export default function Home({}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:type' content='website' />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        <meta name='og:site_name' content={title} />
        <meta
          name='og:image'
          content='https://queercodingcamp.ch/images/queercodingcamp_og_image.png'
        />
        <meta name='twitter:creator' content='@obauma' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:image'
          content='https://queercodingcamp.ch/images/queercodingcamp_og_image.png'
        />
        <meta name='twitter:description' content={description} />
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <TopSection id='top' />
        <CampInfoSection id='info' />
        <SignupSection id='anmelden' />
        <SectionAbout id='about' />
        <SupporterSection id='support' />
        <DonateSection id='spenden' />
      </main>
    </>
  )
}
