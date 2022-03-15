import React from 'react'
import Image from 'next/image'

const Profile = ({ imageSrc, name, bio, twitter }) => {
  return (
    <div className='flex max-w-md w-full mb-8'>
      <Image
        className='rounded-full grayscale'
        src={imageSrc}
        layout='fixed'
        width={56}
        height={56}
        alt={name}
      />
      <div className="flex-1 ml-4">
        <p className='text-left text-lg font-display font-bold'>{name}</p>
        <p className='text-left leading-tight font-normal'>{bio}</p>
      </div>
    </div>
  )
}

export default Profile
