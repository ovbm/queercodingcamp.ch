import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useActiveSection from './hooks/useActiveSection'

const navigation = [
  { name: 'Top', id: 'top' },
  { name: 'Middle', id: 'middle' },
  { name: 'Bottom', id: 'bottom' },
  { name: 'End', id: 'end' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const activeSection = useActiveSection()
  console.log('top' === activeSection)
  return (
    <Disclosure as='nav' className='fixed top-0 w-full'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-full bg-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-7 w-7' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-7 w-7' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.id}`}
                        title={item.name}
                        className={classNames(
                          item.id === activeSection
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                          'px-4 py-1 bg-white rounded-xl font-medium text-xl'
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

          <Transition
            enter='transition duration-200 ease-out'
            enterFrom='transform -translate-y-4 opacity-0'
            enterTo='transform translate-y-0 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform translate-y-0 opacity-100'
            leaveTo='transform -translate-y-4 opacity-0'
            unmount={false}
          >
            <Disclosure.Panel className='sm:hidden' unmount={false}>
              <div className='px-2 pt-2 pb-3 space-y-4 flex flex-col justify-end items-end'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    as='a'
                    key={item.name}
                    href={`#${item.id}`}
                    className={classNames(
                      item.id === activeSection
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                      'px-4 py-2 bg-white rounded-xl font-medium text-xl w-min'
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
        </>
      )}
    </Disclosure>
  )
}
