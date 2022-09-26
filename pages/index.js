import Meta from '../components/Meta'
import SectionAbout from '../components/sections/About'
import CampInfoSection from '../components/sections/Info'
import TopSection from '../components/sections/Top'
import DonateSection from '../components/sections/Donate'
import SignupSection from '../components/sections/Signup'
import SupporterSection from '../components/sections/Supporters'

export default function Home({}) {
  return (
    <>
      <Meta
        title='Queer Coding Camp'
        description='Programmieren lernen für junge queere Menschen.'
      />
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
