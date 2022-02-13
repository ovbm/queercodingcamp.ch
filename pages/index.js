import Head from 'next/head'
import SectionAbout from '../components/sections/About'

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Queer Coding Camp</title>
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        {/* <Hero /> */}
        <section
          className='h-96 flex flex-col w-full items-center justify-center'
          id='home'
        >
          <h1 className='text-6xl font-bold font-display'>Queer Coding Camp</h1>
        </section>
        <section
          className='h-96 flex flex-col w-full items-center justify-center '
          id='middle'
        >
          <h1 className='text-6xl font-bold font-display'>Yaay</h1>
        </section>
        <section
          className='h-96 flex flex-col w-full items-center justify-center'
          id='bottom'
        >
          <h1 className=''>🥰 Coding is Fun</h1>
        </section>
          <SectionAbout id="ueber" />
      </main>
    </>
  )
}
