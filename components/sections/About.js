import React from 'react'
import SectionContainer from './Container'
import Profile from '../Profile'
import olivier from '../../public/images/olivierbaumann.png'

const Ueber = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <h1 className='text-2xl font-bold font-display mb-16'>Team</h1>
      <div className='flex flex-col justify-center items-center'>
        <Profile
          imageSrc={olivier}
          name='Olivier Baumann'
          bio='Swiss/Brazilian product developer at Republik Magazin. Prev. co-founder of the climate tech start-up electricityMap.'
        />
        <Profile
          imageSrc={olivier}
          name='Olivier Baumann'
          bio='Ein Developer'
        />
        <Profile
          imageSrc={olivier}
          name='Olivier Baumann'
          bio='Ein Developer'
        />
      </div>
    </SectionContainer>
  )
}

export default Ueber
