import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?&family=Fredoka+One&family=Signika:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}
