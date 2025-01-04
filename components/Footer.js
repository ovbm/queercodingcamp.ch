import React from 'react'
import Link from './Link'
import Image from 'next/legacy/image'
import Instagram from '../public/images/Instagram.svg'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className='bg-slate-900 w-full mt-24'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8  px-4 md:px-6 lg:px-8 py-8 md:py-16'>
        <div>
          <p className='text-base'>
            Verein Queer Coding Camp <br />
            8003 Zürich <br />
            <Link Icon={EnvelopeIcon} href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>{' '}
            <br />
            <Link
              Icon={() => (
                <span className='align-top inline-block mt-1'>
                  <Image
                    src={Instagram}
                    width={18}
                    height={18}
                    alt='Instagram'
                  />
                </span>
              )}
              href='https://www.instagram.com/queercodingcamp/'
            >
              @queercodingcamp
            </Link>
          </p>
        </div>
        <div>
          <img
            src='/images/queercodingcamp_logo_color_bright.png'
            width={184}
            alt='Queer Coding Camp Logo'
            className='hover:opacity-90'
          />
        </div>
      </div>
    </footer>
  )
}
