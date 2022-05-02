import React from 'react'
import Link from './Link'
import Image from 'next/image'
import Milchjugend from '../public/images/Milchjugend.jpg'
import Instagram from '../public/images/Instagram.svg'
import { MailIcon } from '@heroicons/react/solid'

export default function Footer() {
  return (
    <footer className=' bg-slate-900 w-full mt-24'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8  px-4 md:px-6 lg:px-8 py-8 md:py-16'>
        <div>
          <p className='text-base'>
            Verein Queer Coding Camp <br />
            8003 Zürich <br />
            <Link Icon={MailIcon} href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>{' '}
            <br />
            <Link
              Icon={() => (
                <div className='align-top inline-block ml-2 mt-1'>
                  <Image
                    src={Instagram}
                    width={18}
                    height={18}
                    alt='Instagram'
                  />
                </div>
              )}
              href='https://www.instagram.com/queercodingcamp/'
            >
              @queercodingcamp
            </Link>
          </p>
        </div>
        <div>
          <p>
            In Partnerschaft mit:
            <a
              target='_blank'
              rel='noreferrer'
              href='https://milchjugend.ch'
              className='text-md w-16 inline-block ml-2'
            >
              <Image alt='Milchjugend Logo' src={Milchjugend} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
