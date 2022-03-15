import React from 'react'
import { classNames } from './utils/classNames'

const Link = React.forwardRef(
  ({ href, className, children, alt, target, Icon = () => null }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        alt={alt}
        target={target}
        rel={target === 'blank' && 'noreferrer'}
        className={classNames(
          'underline underline-offset-2 hover:opacity-80',
          className
        )}
      >
        {children}
        <Icon className='inline-block w-4 ml-1' />
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link
