import React from 'react'
import Button from './Button'

const Donate = () => {
  return (
    <div className='bg-white/80 p-4 py-6 shadow-lg rounded-xl'>
      <p className='text-center text-gray-900 pb-4 font-display'>🎁 Einmalige Spende</p>
      <div className='flex flex-row flex-wrap gap-2 items-center justify-center'>
        <Button className='border-solid border-2 border-gray-900 text-gray-900 hover:bg-slate-900 hover:text-white'>
          25 CHF
        </Button>
        <Button className='border-solid border-2 border-gray-900 text-gray-900 hover:bg-slate-900 hover:text-white'>
          50 CHF
        </Button>
        <Button className='border-solid border-2 border-gray-900 text-gray-900 hover:bg-slate-900 hover:text-white'>
          100 CHF
        </Button>
      </div>
      <hr className='border-gray-500 my-6' />
      <p className='pb-4 text-center text-gray-900 font-display'>🥳 Jährliche Spende</p>
      <div className='flex flex-row flex-wrap gap-2 items-center justify-center'>
        <Button className='bg-gradient-to-r from-fuchsia-700 to-pink-700 hover:opacity-80'>
          50 CHF
        </Button>
        <Button className='bg-gradient-to-r from-pink-700 to-red-700 hover:opacity-80'>
          100 CHF
        </Button>
        <Button className='bg-gradient-to-r from-red-700 to-orange-500 text-white hover:opacity-80'>
          250 CHF
        </Button>
      </div>
    </div>
  )
}

export default Donate
