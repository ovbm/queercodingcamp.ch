import { useState, useEffect } from 'react'

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset + 200
      const sections = document.querySelectorAll('section')
      const activeSection = sections[0]
      sections.forEach((section) => {
        if (section.offsetTop <= scrollTop) {
          activeSection = section
        }
      })
      setActiveSection(activeSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeSection?.id
}
