import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

import useActiveSection from './hooks/useActiveSection'

export default function Layout({ children }) {
  const activeSection = useActiveSection()
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?&family=Grandstander:wght@800&family=Signika:wght@500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
      <style global jsx>
        {`
          body {
            color: #fff;
            background: linear-gradient(
              -45deg,
              yellow,
              #f97316,
              #e73c7e,
              #4f46e5,
              #34d399
            );
            background-size: 100% 300%;
            background-position: ${activeSection === 'home'
              ? '0% 10%'
              : activeSection === 'middle'
              ? '0% 45%'
              : '0% 80%'};
            transition: background-position 1s ease-in-out;
          }
        `}
      </style>
    </>
  )
}
