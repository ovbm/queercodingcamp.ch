import React from 'react'

function Container({ children }) {
  return (
    <section className='max-w-6xl pt-32 px-4 mx-auto w-full md:px-6 md:pt-42 lg:px-8 '>
      {children}
    </section>
  )
}

export default Container
