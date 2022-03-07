import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import { classNames } from './utils/classNames'
import Button from './Button'

const NewsletterSignup = () => {
  const [email, setEmail] = React.useState()
  const [response, setResponse] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const subscribe = async () => {
    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { msg } = await response.json();
    if (msg) {
      setResponse(msg)
      return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    subscribe()
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='md:flex'>
        <input
          type='email'
          value={email}
          onChange={handleChange}
          className='
          flex-1
          w-full p-3 m-0
          border-2 border-solid border-white
          rounded-xl
          bg-transparent 
          transition
          ease-in-out
          placeholder:text-white/80
          focus:outline-white
          '
          id='email'
          placeholder='Deine Email'
        />
        <Button
          type='submit'
          disabled={loading}
          className='
            border-solid border-2 border-white text-white 
            md:ml-4
            hover:bg-white 
            hover:text-slate-900 transition-width ease-in-out
            disabled:bg-white disabled:text-slate-900
          '
        >
          {loading ? (
            <RefreshIcon
              className={classNames(loading && 'animate-spin', 'block h-8 w-8')}
              aria-hidden='true'
            />
          ) : (
            'Senden'
          )}
        </Button>
      </div>
      {response && <p className='text-sm text-white mt-2'>{response}</p>}
    </form>
  )
}

export default NewsletterSignup
