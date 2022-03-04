import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

import useActiveSection from './hooks/useActiveSection'

export default function Layout({ children }) {
  const activeSection = useActiveSection()
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?&family=Grandstander:wght@800&family=Signika:wght@500;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/favicon/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/favicon/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/favicon/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/favicon/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/favicon/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/favicon/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/favicon/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/favicon/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='/favicon/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
      <style global jsx>
        {`
          body {
            color: #fff;
            background-color: #0f172a;
            background: linear-gradient(
              -45deg,
              #c2410c,
              #db2777,
              #7c3aed,
              #1d4ed8,
              #34d399
            );
            background-size: 100% 300%;
            background-position: ${activeSection === 'top'
              ? '0% 10%'
              : activeSection === 'info'
              ? '0% 45%'
              : activeSection === 'about'
              ? '0% 70%'
              : activeSection === 'donate'
              ? '0% 90%'
              : // Fallback
                '0% 10%'};
            transition: background-position 1s ease-in-out;
          }
          /* @media (prefers-color-scheme: dark) {
            body {
              background: linear-gradient(
                -45deg,
                #ca8a04,
                #c2410c,
                #831843,
                #312e81,
                #115e59
              );
              background-size: 100% 300%;
              background-position: ${activeSection === 'top'
            ? '0% 10%'
            : activeSection === 'info'
            ? '0% 45%'
            : activeSection === 'signup'
            ? '0% 70%'
            : '0% 90%'};
              transition: background-position 1s ease-in-out;
            }
          } */
        `}
      </style>
    </>
  )
}
