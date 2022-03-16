import '../styles/globals.css'
import Layout from '../components/Layout'
import { polyfill } from 'smoothscroll-polyfill'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
