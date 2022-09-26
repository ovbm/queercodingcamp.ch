import React from 'react'
import Head from 'next/head'

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='og:type' content='website' />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:site_name' content={title} />
      <meta
        name='og:image'
        content='https://queercodingcamp.ch/images/queercodingcamp_og_image.png'
      />
      <meta name='twitter:creator' content='@obauma' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta
        name='twitter:image'
        content='https://queercodingcamp.ch/images/queercodingcamp_og_image.png'
      />
      <meta name='twitter:description' content={description} />
    </Head>
  )
}

export default Meta
