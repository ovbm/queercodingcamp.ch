import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  const { pathname, locale } = useRouter()
  
  const getBackgroundPosition = () => {
    switch (pathname) {
      case '/':
        return '0% 0%'
      case '/info':
        return '0% 25%'
      case '/anmelden':
        return '0% 50%'
      case '/about':
        return '0% 75%'
      case '/spenden':
        return '0% 100%'
      default:
        return '0% 0%'
    }
  }

  return (
    <>
      <Head>
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
      
      {/* Dedicated background element */}
      <div className="fixed inset-0 -z-10 background-gradient">
      </div>

      <main className='min-h-dvh flex flex-col relative'>
        <Navbar />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </main>
      
      <style global jsx>
        {`
          body {
            color: #fff;
            background-color: #0f172a;
          }

          .background-gradient {
            background: linear-gradient(
                -34deg,
                #00d0b9,
                #1d4ed8,
                #7c3aed,
                #c2410c,
                #db2777
              ),
              url('/images/noise.svg');
            background-size: 100% 300%, 100%;
            background-repeat: no-repeat, repeat;
            background-blend-mode: screen;
            background-position: ${getBackgroundPosition()}, 0 0;
            transition: background-position 1s ease-in-out;
          }

          @media (max-width: 768px) {
            .background-gradient {
              background-size: 100% 300%, 200%;
            }
          }
        `}
      </style>
    </>
  )
}
