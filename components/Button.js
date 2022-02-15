import React from 'react'

const Button = ({ children, href, onClick, className }) => {
  const cn = `${className} hover:shadow-lg px-6 py-1 pt-2 rounded-xl font-display text-xl shadow-md transition-all`
  if (href) {
    return (
      <a
        className={cn}
        href={href}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      onClick={onClick}
      className={cn}
    >
      {children}
    </button>
  )
}

export default Button
