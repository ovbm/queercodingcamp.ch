import React from 'react'
import { classNames } from '../utils/classNames'

function SectionContainer({ id, children }) {
  return (
    <section
      className={classNames(
        'max-w-6xl pt-24 px-4 mx-auto w-full',
        'md:px-6 md:pt-32 lg:px-8 ',
        'first:pt-12 first:md:pt-24'
      )}
      id={id}
    >
      {children}
    </section>
  )
}

export default SectionContainer
