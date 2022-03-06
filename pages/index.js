import Head from 'next/head'
import SectionAbout from '../components/sections/About'
import CampInfoSection from '../components/sections/Info'
import TopSection from '../components/sections/Top'
import DonateSection from '../components/sections/Donate'
import SignupSection from '../components/sections/Signup'

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Queer Coding Camp</title>
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <TopSection id='top' />
        <CampInfoSection id='info' />
        <SignupSection id="anmelden" />
        <SectionAbout id='about' />
        <DonateSection id='donate' />
      </main>
    </>
  )
}
