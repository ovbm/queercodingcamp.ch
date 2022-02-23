import React from 'react'
import { classNames } from './utils/classNames'

const Button = ({
  children,
  href,
  onClick,
  className,
  small,
  outline,
  color = 'white',
  textColor = 'slate-900',
  hoverColor = 'white',
  hoverTextColor = 'slate-900',
  ...props
}) => {
  const cn = classNames(
    className,
    outline
      ? `border-${color} text-${color} border-solid border-2 bg-transparent hover:bg-${color} hover:text-${hoverTextColor}`
      : `bg-${color} text-${textColor} hover:bg-${hoverColor} hover:text-${hoverTextColor}`,
    small ? 'text-sm px-2' : 'text-xl px-6 py-1 pt-2',
    'rounded-xl shadow-md hover:shadow-lg transition-all duration-200'
  )
  if (href) {
    return (
      <a className={cn} href={href} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cn} {...props}>
      {children}
    </button>
  )
}

export default Button
