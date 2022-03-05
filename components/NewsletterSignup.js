import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import { classNames } from './utils/classNames'
import Button from './Button'

const NewsletterSignup = () => {
  const [email, setEmail] = React.useState()
  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState()
  const [loading, setLoading] = React.useState(false)

  const subscribe = async () => {
    const result = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const { error } = await result.json();
    if (error) {
      setError(error)
      return
    }
    setSuccess('🎉 Du erhälst bald eine E-Mail um deine Anmeldung zu bestätigen.')
  }

  const validateEmail = (email) => {
    if (!email) {
      setError('Bitte gib eine E-Mail-Adresse ein.')
      return false
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Oh, oh, das ist keine gültige Email-Adresse')
      return false
    }
    setError(null)
    return true
  }

  const handleBlur = () => {
    validateEmail(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    validateEmail(email)
    subscribe()
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor='email'
        className='form-label inline-block mb-1 text-white'
      >
        Anmeldung
      </label>
      <div className='md:flex'>
        <input
          type='email'
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className='
          flex-1
          w-full p-3 m-0
          bg-white
          text-slate-900
          border-2 border-solid border-white
          rounded-xl
          transition
          ease-in-out
          placeholder:text-white/80
          placeholder-shown:bg-transparent placeholder-shown:text-white
          focus:text-slate-900 focus:bg-white focus:border-slate-900 focus:outline-none
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
      {error && <p className='text-sm text-white mt-1'>{error}</p>}
    </form>
  )
}

export default NewsletterSignup
