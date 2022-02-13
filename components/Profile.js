import React from 'react'
import Image from 'next/image'

const Profile = ({ imageSrc, name, bio, twitter }) => {
  return (
    <div className='flex max-w-md w-full mb-8'>
      <Image
        className='rounded-full grayscale'
        src={imageSrc}
        layout='fixed'
        width={64}
        height={64}
      />
      <div className="flex-1 ml-4">
        <p className='text-left text-lg font-display'>{name}</p>
        <p className='text-left text-lg'>{bio}</p>
      </div>
    </div>
  )
}

export default Profile
