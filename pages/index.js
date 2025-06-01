import Meta from '../components/Meta'
import CampInfoSection from '../components/sections/Info'
import TopSection from '../components/sections/Top'
import SupporterSection from '../components/sections/Supporters'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <>
      <Meta
        title={t('seo-meta.index.title')}
        description={t('seo-meta.index.description')}
      />
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <TopSection id='top' />
        <CampInfoSection id='info' />
        <SupporterSection id='support' />
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}
