import { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from './Head'
import Stars from './Stars'
import useActiveSection from './hooks/useActiveSection'


export default function Layout({ children }) {

  const activeSection = useActiveSection()

  return (
    <>
      <Head />
      <Navbar />
      {children}
      <Footer />
      <Stars />
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
            );
            background-size: 100% 300%;
            background-position: ${activeSection === 'top'
              ? '0% 0%'
              : activeSection === 'info'
              ? '0% 25%'
              : activeSection === 'anmelden'
              ? '0% 50%'
              : activeSection === 'about'
              ? '0% 75%'
              : activeSection === 'donate'
              ? '0% 100%'
              : // Fallback
                '0% 0%'};
            transition: background-position 1s ease-in-out;
          }
        `}
      </style>
    </>
  )
}
