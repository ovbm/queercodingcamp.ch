import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { useTranslations } from 'next-intl'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Link from '../components/Link'

const tableClass = 'border border-white/25 px-3 py-2 align-top'
const thClass = `${tableClass} font-display font-bold`

export default function SmePage() {
  const t = useTranslations('sme')

  return (
    <>
      <Meta
        title={t('seo-title')}
        description={t('seo-description')}
      />
      <Container>
        <div className='max-w-3xl mx-auto rounded-xl px-6 py-10 md:px-10 md:py-12 bg-gray-900/50 backdrop-blur-sm backdrop-saturate-200 shadow-lg'>
        <h2 className='text-4xl font-bold text-left font-display mb-4'>
          {t('title')}
        </h2>
        <p className='mb-4 text-left'>
          {t.rich('summary', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <h3 className='text-3xl font-bold text-left font-display mt-12 mb-4'>
          {t('unified-title')}
        </h3>
        <p className='mb-4 text-left'>{t('unified-1')}</p>
        <p className='mb-4 text-left'>{t('unified-2')}</p>

        <h3 className='text-3xl font-bold text-left font-display mt-12 mb-4'>
          {t('finance-heading')}
        </h3>
        <p className='mb-4 text-left'>{t('finance-1')}</p>
        <p className='mb-4 text-left'>
          {t.rich('finance-2', {
            mail: (chunks) => (
              <a
                className='underline underline-offset-2 hover:opacity-80'
                href='mailto:hi@queercodingcamp.ch'
              >
                {chunks}
              </a>
            ),
          })}
        </p>

        <h3 className='text-2xl font-bold text-left font-display mt-10 mb-3'>
          {t('budget-heading')}
        </h3>
        <div className='overflow-x-auto'>
          <table className='w-full max-w-2xl border-collapse text-left text-md md:text-base'>
            <tbody>
              <tr>
                <th className={thClass} scope='col'>
                  {t('table.costs')}
                </th>
                <th className={thClass} scope='col'>
                  {t('table.amount')}
                </th>
              </tr>
              <tr>
                <td className={tableClass}>{t('table.row-accommodation')}</td>
                <td className={tableClass}>{t('table.row-accommodation-val')}</td>
              </tr>
              <tr>
                <td className={tableClass}>{t('table.row-staff')}</td>
                <td className={tableClass}>{t('table.row-staff-val')}</td>
              </tr>
              <tr>
                <td className={tableClass}>{t('table.row-material')}</td>
                <td className={tableClass}>{t('table.row-material-val')}</td>
              </tr>
              <tr>
                <td className={`${tableClass} font-display font-bold text-lg`}>
                  {t('table.total')}
                </td>
                <td className={`${tableClass} font-display font-bold text-lg`}>
                  {t('table.total-costs-val')}
                </td>
              </tr>
              <tr>
                <td className={`${tableClass} font-display font-bold pt-6`} colSpan={2}>
                  {t('table.financing-heading')}
                </td>
              </tr>
              <tr>
                <td className={tableClass}>{t('table.row-prohelvetia')}</td>
                <td className={tableClass}>{t('table.row-prohelvetia-val')}</td>
              </tr>
              <tr className='ring-1 ring-indigo-400/60 bg-indigo-500/15'>
                <td className={`${tableClass} border-indigo-400/60 font-bold`}>
                  {t('table.row-kmu')}
                </td>
                <td className={`${tableClass} border-indigo-400/60 font-bold`}>
                  {t('table.row-kmu-val')}
                </td>
              </tr>
              <tr>
                <td className={tableClass}>{t('table.row-hasler')}</td>
                <td className={tableClass}>{t('table.row-hasler-val')}</td>
              </tr>
              <tr>
                <td className={`${tableClass} font-display font-bold text-lg`}>
                  {t('table.total')}
                </td>
                <td className={`${tableClass} font-display font-bold text-lg`}>
                  {t('table.total-fin-val')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className='text-2xl font-bold font-display mt-12 mb-4'>
          {t('bank-heading')}
        </h3>
        <p className='mb-2 '>
          {t('bank-iban')}
        </p>
        <p className='mb-6'>{t('bank-address')}</p>
        <p>
          <Link
            href='/QR_Rechnung_20220221.pdf'
            Icon={ArrowTopRightOnSquareIcon}
            target='_blank'
          >
            {t('qr-pdf')}
          </Link>
        </p>
        </div>
      </Container>
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
