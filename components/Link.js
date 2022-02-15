import React from 'react'
import { classNames } from './utils/classNames'

const Link = React.forwardRef(
  ({ href, className, children, alt, target, showIcon = true }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        alt={alt}
        target={target}
        className={classNames(
          className,
          'underline underline-offset-2 hover:text-white/90 transition-colors'
        )}
      >
        {showIcon && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2 inline-block'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        )}

        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link
