import React from 'react'
import Link from './Link'

export default function Footer() {
  return (
    <footer className='flex bg-slate-900 items-center justify-center w-full h-48 mt-24'>
      <p>
        Verein Queer Coding Camp <br />
        8003 Zürich <br />
        <Link href='mailto:hi@queercodingcamp.ch'>hi@queercodingcamp.ch</Link>
      </p>
    </footer>
  )
}
