import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useActiveSection from './hooks/useActiveSection'
import { classNames } from './utils/classNames'

const navigation = [
  { name: 'Infos', id: 'info' },
  { name: 'Anmelden', id: 'anmelden' },
  { name: 'Über uns', id: 'about' },
  { name: 'Spenden', id: 'donate' },
]

export default function Navbar() {
  const activeSection = useActiveSection()
  return (
    <Disclosure
      as='nav'
      className={'fixed bottom-0 md:bottom-auto w-full z-10'}
    >
      {({ open }) => (
        <>
          <Transition
            enter='transition duration-200 ease-out'
            enterFrom='transform translate-y-4 opacity-0'
            enterTo='transform translate-y-0 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform translate-y-0 opacity-100'
            leaveTo='transform translate-y-4 opacity-0'
            unmount={false}
          >
            <Disclosure.Panel className='md:hidden' unmount={false}>
              <div className='px-4 pt-2 pb-3 space-y-4 flex flex-col justify-end items-end'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    as='a'
                    key={item.name}
                    href={`#${item.id}`}
                    className={classNames(
                      item.id === activeSection
                        ? 'bg-gray-900/10 -translate-x-5'
                        : 'bg-gray-900/50 hover:bg-gray-700/50',
                      'text-white px-6 py-1 pt-2 rounded-xl font-display text-xl backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                    )}
                    aria-current={
                      item.id === activeSection ? 'page' : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
          <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
            <div className='relative flex justify-between items-center h-20 md:h-24'>
              <a
                key='top'
                href='#top'
                title='top'
                className={classNames(
                  'top' === activeSection
                    ? 'bg-gray-900/10'
                    : 'bg-gray-900/50 hover:bg-gray-700/50 hover:text-white',
                  'hidden p-2 md:block fill-white  rounded-full backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                )}
                aria-current={'top' === activeSection ? 'page' : undefined}
              >
                <svg width='48' height='48' viewBox='0 0 839 432' fill='white'>
                  <path d='M177.196 46.2646C188.4 52.7476 198.031 62.3738 206.09 75.1432C214.149 87.9127 219.751 99.2087 222.896 109.031C195.771 128.677 170.611 147.733 147.418 166.199C124.224 184.469 99.0647 204.999 71.9398 227.787L72.2347 202.445C78.1314 204.409 86.8781 207.552 98.475 211.874C110.268 216.196 122.848 221.108 136.214 226.608C149.58 232.109 161.963 237.61 173.363 243.11C184.763 248.611 193.215 253.522 198.719 257.844C198.522 268.846 196.95 282.303 194.002 298.216C191.053 313.932 187.81 327.487 184.272 338.881C154.985 326.112 125.01 313.637 94.3473 301.457C63.6844 289.277 32.2353 278.177 0 268.158L1.17934 191.247C16.5108 177.692 33.0216 163.252 50.7117 147.929C68.4018 132.409 85.6988 117.577 102.603 103.432C119.507 89.0914 134.543 76.8131 147.713 66.5975C161.078 56.382 170.906 49.6044 177.196 46.2646Z' />
                  <path d='M551.236 432C546.519 430.035 540.425 426.401 532.956 421.097C525.684 415.793 518.116 409.899 510.254 403.416C502.392 396.933 495.414 390.745 489.321 384.851C483.227 379.154 479.1 374.538 476.938 371.001C473.793 373.162 469.075 375.618 462.786 378.368C456.496 380.922 449.027 383.083 440.378 384.851C431.926 386.816 422.688 387.798 412.663 387.798C387.308 387.798 364.212 383.083 343.377 373.653C322.542 364.027 304.557 350.767 289.422 333.872C274.484 316.977 262.985 297.135 254.927 274.346C247.064 251.558 243.133 227.1 243.133 200.971C243.133 171.503 247.261 144.589 255.516 120.229C263.968 95.6726 275.958 74.4557 291.486 56.5785C307.211 38.5048 326.08 24.5566 348.095 14.734C370.109 4.91132 394.679 0 421.803 0C461.508 0 493.94 7.85811 519.099 23.5743C544.455 39.2906 563.128 60.9986 575.118 88.6985C587.304 116.398 593.398 148.125 593.398 183.88C593.398 204.115 592.12 223.465 589.565 241.932C587.206 260.398 582.489 277.293 575.413 292.617C568.533 307.94 558.214 321.004 544.455 331.809C551.924 341.239 561.457 349.883 573.054 357.741C584.847 365.402 595.953 371.787 606.37 376.895C599.884 386.521 591.432 396.344 581.015 406.363C570.597 416.578 560.671 425.124 551.236 432ZM431.533 292.322C429.567 290.357 426.816 286.723 423.278 281.419C419.74 275.918 416.3 270.123 412.958 264.033C409.617 257.943 407.16 252.835 405.587 248.709C409.519 245.37 415.022 241.342 422.098 236.628C429.174 231.913 436.643 227.1 444.506 222.188C452.368 217.277 459.346 213.053 465.439 209.517C468.584 217.572 472.515 226.805 477.232 237.217C482.146 247.629 487.355 256.371 492.859 263.443C495.807 258.728 498.166 250.87 499.935 239.869C501.9 228.671 502.883 213.348 502.883 193.899C502.883 171.307 500.23 151.76 494.923 135.258C489.616 118.559 481.262 105.79 469.862 96.9495C458.658 87.9127 444.113 83.3943 426.226 83.3943C408.339 83.3943 393.106 87.618 380.526 96.0655C368.143 104.316 358.709 116.005 352.222 131.132C345.736 146.259 342.493 163.743 342.493 183.585C342.493 200.873 344.95 218.259 349.864 235.743C354.777 253.031 362.345 267.471 372.566 279.061C382.787 290.652 396.054 296.447 412.369 296.447C418.462 296.447 422.884 295.956 425.636 294.974C428.585 293.795 430.55 292.911 431.533 292.322Z' />
                  <path d='M627.013 101.37C631.927 95.0832 637.726 88.2073 644.409 80.7421C651.288 73.2769 658.364 66.3028 665.637 59.8199C672.909 53.1405 679.592 48.2292 685.686 45.0859C689.617 46.0682 696.988 49.8008 707.798 56.2838C718.609 62.7667 731.287 70.9195 745.832 80.7421C760.574 90.3683 775.905 100.682 791.826 111.683C807.747 122.488 822.686 132.9 836.641 142.919L839 235.154C819.934 244.78 799.59 254.898 777.969 265.506C756.348 275.918 735.709 285.741 716.054 294.974C696.595 304.207 680.182 311.869 666.816 317.959C653.45 324.049 645.293 327.487 642.345 328.273C639.79 325.915 637.038 321.495 634.089 315.012C631.338 308.333 628.684 300.966 626.129 292.911C623.574 284.66 621.411 277.097 619.642 270.221C618.07 263.345 617.284 258.532 617.284 255.782C618.856 254.996 623.574 252.147 631.436 247.236C639.298 242.128 648.929 235.842 660.33 228.376C671.927 220.715 684.211 212.562 697.184 203.918C710.157 195.078 722.54 186.532 734.333 178.281C746.323 169.834 756.544 162.565 764.996 156.475L755.267 189.774C749.567 185.844 741.115 180.147 729.911 172.682C718.904 165.217 706.815 156.966 693.646 147.929C680.673 138.892 668.192 130.248 656.202 121.997C644.212 113.55 634.483 106.674 627.013 101.37Z' />
                </svg>
              </a>

              <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-full bg-gray-900/50 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white backdrop-blur-sm backdrop-saturate-200 shadow-lg'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-9 w-9' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-9 w-9' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center md:items-stretch md:justify-end'>
                <div className='hidden md:block md:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.id}`}
                        title={item.name}
                        className={classNames(
                          item.id === activeSection
                            ? 'bg-gray-900/10 translate-y-1'
                            : 'bg-gray-900/50 hover:bg-gray-700/50 hover:text-white',
                          'text-white px-6 py-1 pt-2 rounded-xl font-display text-xl backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                        )}
                        aria-current={
                          item.id === activeSection ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
