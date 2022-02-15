import React from 'react'

function SectionContainer({ id, children }) {
  return (
    <section
      className='max-w-4xl pt-24 px-5 sm:px-8 mx-auto w-full'
      id={id}
    >
      {children}
    </section>
  )
}

export default SectionContainer
