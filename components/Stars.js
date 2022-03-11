import { useState, useEffect } from 'react'

const getRandomInt = (max) => Math.floor(Math.random() * max)
const createStars = (n, h) => {
  let stars = ''
  for (let i = 0; i <= n; i++) {
    stars += ` ${getRandomInt(2000)}px ${getRandomInt(
      2000
    )}px rgba(255,255,255,${Math.random().toPrecision(2)}) ${
      i === n ? '' : ','
    }`
  }
  return stars
}

const smallStars = createStars(400)
const mediumStars = createStars(300)

const Stars = () => {
  const [starsY, setStarsY] = useState(0)
  const [starsH, setStarsH] = useState(1)

  useEffect(() => {
    const moveStars = () => {
      if (starsH !== 3) {
        setStarsH(3)
      }
      setStarsY(Math.floor(window.pageYOffset * 0.05))
      const timer = setTimeout(() => {
        setStarsH(1)
      }, 150)
    }
    window.addEventListener('scroll', moveStars)
    return () => {
      window.removeEventListener('scroll', moveStars)
    }
  }, [])
  return (
    <>
      <div
        style={{ top: starsY, height: 1 * starsH }}
        className='stars'
        id='stars-1'
      />
      <div
        style={{ top: starsY * 2, height: 2 * starsH }}
        className='stars'
        id='stars-2'
      />
      <style jsx>
        {`
          #stars-1 {
            position: fixed;
            z-index: -1;
            background: transparent;
            width: 1px;
            height: 1px;
            box-shadow: ${smallStars};
            transition: height 0.3s ease-out;
          }
          #stars-2 {
            position: fixed;
            z-index: -1;
            background: transparent;
            width: 2px;
            height: 2px;
            box-shadow: ${mediumStars};
            transition: height 0.3s ease-out;
          }
        `}
      </style>
    </>
  )
}

export default Stars
