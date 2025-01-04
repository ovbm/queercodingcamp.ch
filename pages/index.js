import Meta from '../components/Meta'
import CampInfoSection from '../components/sections/Info'
import TopSection from '../components/sections/Top'
import SupporterSection from '../components/sections/Supporters'

export default function Home() {
  return (
    <>
      <Meta
        title='Queer Coding Camp'
        description='Programmieren lernen für junge queere Menschen.'
      />
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <TopSection id='top' />
        <CampInfoSection id='info' />
        <SupporterSection id='support' />
      </main>
    </>
  )
}
