import React from 'react'

function SectionContainer({ id, children }) {
  return (
    <section
      className='max-w-4xl pt-24 first:pt-12 px-5 md:px-8 first:md:pt-24 md:pt-32 mx-auto w-full'
      id={id}
    >
      {children}
    </section>
  )
}

export default SectionContainer
