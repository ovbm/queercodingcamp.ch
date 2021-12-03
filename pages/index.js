import Head from 'next/head'
import Section from '../components/Section'
import Hero from '../components/sections/Hero'
export default function Home({}) {
  return (
    <>
      <Head>
        <title>Queer Coding Camp</title>
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <Hero />
        {/* 
        <Section id='top'>
          <h1 className='text-6xl font-bold font-display'>Queer Coding Camp</h1>
        </Section>
        <Section id='middle'>
          <h1 className='text-6xl font-bold font-display'>Queer Coding Camp</h1>
        </Section>
        <section
          className='h-96 flex flex-col items-center justify-center bg-pink-600'
          id='bottom'
        >
          <h1 className='text-6xl font-bold font-display'>Queer Coding Camp</h1>
        </section>
        <section
          className='h-96 flex flex-col items-center justify-center bg-purple-600'
          id='end'
        >
          <h1 className='text-6xl font-bold font-display'>Queer Coding Camp</h1>
        </section> */}
      </main>
    </>
  )
}
