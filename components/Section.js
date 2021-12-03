import React from 'react'

function Section({ id, children }) {
  return (
    <section
      className='h-96 flex flex-col w-full items-center justify-center'
      id={id}
    >
      {children}
    </section>
  )
}

export default Section
