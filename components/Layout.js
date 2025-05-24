import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  const { pathname, locale } = useRouter()
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Funnel+Display:wght@700&family=Funnel+Sans:ital@0;1&display=swap'
          rel='stylesheet'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#db2777' />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#0f172a' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </Head>
      <main className='min-h-dvh flex flex-col'>
        <Navbar />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </main>
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
                #00d0b9
              ),
              url('/images/noise.svg');
            background-size: 100% 300%, 100%;
            background-repeat: no-repeat, repeat;
            background-blend-mode: screen;
            background-position: ${pathname === '/'
              ? '0% 0%'
              : pathname === '/info'
              ? '0% 25%'
              : pathname === '/anmelden'
              ? '0% 50%'
              : pathname === '/about'
              ? '0% 75%'
              : pathname === '/spenden'
              ? '0% 100%'
              : // Fallback
                '0% 0%'};
            transition: background-position 1s ease-in-out;
          }

          @media (max-width: 768px) {
            body {
              background-size: 100% 300%, 200%;
            }
          }
        `}
      </style>
    </>
  )
}
