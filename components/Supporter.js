import Image from 'next/image'

const Supporter = ({ name, imageSrc, href, hiring = false }) => (
  <div>
    <a href={href} target='_blank' rel='noreferrer'>
      <Image src={imageSrc} width={180} height={50} alt={name} />
    </a>
    {hiring && (
      <div className='inline bg-white text-xs relative top-1 rounded-md text-fuchsia-500 font-bold p-1 pb-0.5 mb-4'>
        hiring
      </div>
    )}
  </div>
)

export default Supporter
