import { Tab } from '@headlessui/react'
import Image from 'next/image'

import { classNames } from './utils/classNames'
import Button from './Button'
import A from './Link'

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
            Kreditkarte
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
            Twint
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
            PayPal
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl px-4 py-8 focus:outline-none'>
            <h3 className='pb-4 font-display text-lg text-center'>Einmalige Spende 🙌 </h3>

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
            <h3 className='pb-4 font-display text-lg text-center'>Jährliche Spende 🎉 </h3>
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
