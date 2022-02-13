import React from 'react'

function SectionContainer({ id, children }) {
  return (
    <section
      className='max-w-screen-lg py-4 px-4 mx-auto w-full'
      id={id}
    >
      {children}
    </section>
  )
}

export default SectionContainer
