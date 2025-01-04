import '../styles/globals.css'
import Layout from '../components/Layout'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone='Europe/Vienna'
      messages={pageProps.messages}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  )
}

export default MyApp
