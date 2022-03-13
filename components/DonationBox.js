import { Tab } from '@headlessui/react'
import Image from 'next/image'

import { classNames } from './utils/classNames'
import Button from './Button'

import twintQR from '../public/images/twintQR.png'
import paypalQR from '../public/images/paypalQR.png'

export default function Donate() {
  return (
    <div className='w-full max-w-md'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-gray-900/50 backdrop-saturate-200 rounded-xl'>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white text-slate-900 shadow'
                  : 'hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-1 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
              Kreditkarte
            </span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white text-slate-900 shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            <span>
              <svg
                className='h-6 w-6 mr-1 inline'
                viewBox='0 0 21 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.01 7.04205L14.6414 11.9785L12.9221 9.34348L14.9043 6.37491C15.2729 5.84777 16.0621 4.38991 15.15 2.40491C14.4129 0.788482 12.8164 0.015625 11.4129 0.015625C10.0093 0.015625 8.48286 0.735624 7.65858 2.40491C6.72858 4.31991 7.53572 5.81277 7.88643 6.32277C7.88643 6.32277 8.99143 7.9392 9.90429 9.30919L11.3957 11.4699L13.6414 14.9135C13.6593 14.9313 14.01 15.4756 14.6414 15.4756C15.2379 15.4756 15.6064 14.9313 15.6593 14.8785L20.9221 7.07848H18.01V7.04348V7.04205ZM11.3957 7.16491C11.3957 7.16491 10.5186 5.82991 9.93929 4.89848C9.325 3.89705 10.0093 2.4042 11.3957 2.4042C12.7814 2.4042 13.4657 3.89777 12.8521 4.89848C12.2907 5.82991 11.3957 7.16491 11.3957 7.16491Z'
                  fill='currentColor'
                />
                <path
                  d='M8.16787 11.8206L4.86929 7.18275C4.86929 7.18275 3.99215 5.84775 3.41286 4.91632C2.79858 3.91489 3.48286 2.42204 4.86929 2.42204C5.04501 2.42204 5.20286 2.43989 5.36072 2.49204L6.51858 0.366322C5.99215 0.13775 5.41358 0.0148926 4.88715 0.0148926C3.48358 0.0148926 1.95715 0.734893 1.13286 2.40418C0.202864 4.31918 1.01001 5.81204 1.36072 6.32204L7.13287 14.8778C7.18572 14.9478 7.55358 15.4928 8.16787 15.4928C8.78215 15.4928 9.13287 14.9656 9.18572 14.8956L10.9229 12.2428L9.43144 10.047L8.16858 11.8213L8.16787 11.8206Z'
                  fill='currentColor'
                />
              </svg>
              Twint
            </span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white text-slate-900 shadow'
                  : 'hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            <span>
              <svg
                stroke='currentColor'
                fill='currentColor'
                className='h-6 w-6 mr-1 inline'
                strokeWidth='0'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path d='M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z'></path>
                </g>
              </svg>
              PayPal
            </span>
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl px-4 py-8 focus:outline-none'>
            <h3 className='pb-4 font-display text-lg text-center'>
              Einmalige Spende 🙌{' '}
            </h3>

            <div className='flex flex-row flex-wrap gap-4 justify-center'>
              <Button
                outline
                href='https://buy.stripe.com/14keY5g9yd5xeUEaEJ'
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                25 CHF
              </Button>
              <Button
                outline
                href='https://buy.stripe.com/9AQg297D28Ph4g03cc'
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                50 CHF
              </Button>
              <Button
                outline
                href='https://buy.stripe.com/7sI6rz4qQ6H94g07st'
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                100 CHF
              </Button>
            </div>
            <hr className='border-white/50 my-6' />
            <h3 className='pb-4 font-display text-lg text-center'>
              Jährliche Spende 🎉{' '}
            </h3>
            <div className='flex flex-row flex-wrap gap-4 justify-center'>
              <Button
                target='_blank'
                href='https://buy.stripe.com/bIYaHPbTic1t8wg146'
                className='font-display text-slate-700 hover:opacity-80'
              >
                50 CHF
              </Button>
              <Button
                target='_blank'
                href='https://buy.stripe.com/6oEcPXe1q9Tl7sc147'
                className='font-display text-slate-700 hover:opacity-80'
              >
                100 CHF
              </Button>
              <Button
                target='_blank'
                href='https://buy.stripe.com/6oEg29aPed5x13O4gk'
                className='font-display text-slate-700 hover:opacity-80'
              >
                250 CHF
              </Button>
            </div>
          </Tab.Panel>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl px-4 py-8 focus:outline-none'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-1/2 mb-4'>
                <Image src={twintQR} alt='Twint QR code' />
              </div>
              <Button
                target='_blank'
                href='https://pay.raisenow.io/wcxgy'
                outline
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                Mit Twint spenden
              </Button>
            </div>
          </Tab.Panel>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl px-4 py-8 focus:outline-none'>
            <div className='flex flex-col items-center justify-center '>
              <div className='w-1/2 mb-4'>
                <Image src={paypalQR} alt='Twint QR code' />
              </div>
              <Button
                target='_blank'
                href='https://www.paypal.com/donate/?hosted_button_id=497MHVPBEXZJS'
                outline
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                Mit PayPal spenden
              </Button>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
