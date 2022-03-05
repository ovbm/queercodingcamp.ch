import React from 'react'
import Link from './Link'
import Image from 'next/image'
import Milchjugend from '../public/images/Milchjugend.jpg'

export default function Footer() {
  return (
    <footer className=' bg-slate-900 w-full mt-24'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8  px-4 md:px-6 lg:px-8 py-8 md:py-16'>
        <div>
          <p>
            Verein Queer Coding Camp <br />
            8003 Zürich <br />
            <Link href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>
          </p>
        </div>
        <div>
          <p>
            In Partnerschaft mit:
            <a href='https://milchjugend.ch' className='w-16 inline-block ml-2'>
              <Image src={Milchjugend} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
