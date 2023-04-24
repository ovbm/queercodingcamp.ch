import Image from 'next/legacy/image'

const Supporter = ({
  name,
  imageSrc,
  href,
  hiring = false,
  width = 180,
  height = 46,
}) => (
  <div>
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      style={{ display: 'inline-block' }}
    >
      <Image src={imageSrc} width={width} height={height} alt={name} />
    </a>
    {hiring && (
      <div className='inline bg-white text-xs relative top-1 rounded-md text-fuchsia-500 font-bold p-1 pb-0.5 mb-4'>
        hiring
      </div>
    )}
  </div>
)

export default Supporter
