import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from './utils/classNames'
import { useRouter } from 'next/router'
import Link from 'next/link'

const navigation = [
  { name: 'Camp', href: '/' },
  { name: 'Anmelden', href: '/anmelden' },
  { name: 'Über uns', href: '/about' },
  { name: 'Spenden', href: '/spenden' },
]

export default function Navbar() {
  const router = useRouter()
  const { pathname, locale } = router

  return (
    <>
      <header className='absolute w-full h-20 md:h-24 flex justify-start items-center'>
        <div className='max-w-6xl w-full mx-auto px-4 md:px-6 lg:px-8 flex justify-start'>
          <Link
            href='/'
            title='home'
            aria-current={'/' === pathname ? 'page' : undefined}
          >
            <img
              src='/images/queercodingcamp_logo_color_bright.png'
              width={96.6}
              height={42}
              alt='Queer Coding Camp Logo'
              className='hover:opacity-90'
            />
          </Link>
        </div>
      </header>
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
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.href === pathname
                          ? 'bg-gray-900/10 -translate-x-5'
                          : 'bg-gray-900/50 hover:bg-gray-700/50',
                        'text-white px-6 py-1 pt-2 rounded-xl font-display font-bold text-xl backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                      )}
                      aria-current={item.href === pathname ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <Link href='/' locale={locale === 'en' ? 'de' : 'en'}>
                    {locale === 'en' ? 'DE' : 'EN'}
                  </Link> */}
                </div>
              </Disclosure.Panel>
            </Transition>
            <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
              <div className='relative flex justify-end items-center h-20 md:h-24'>
                <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-full bg-gray-900/50 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white backdrop-blur-sm backdrop-saturate-200 shadow-lg'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-9 w-9' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-9 w-9' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center md:items-stretch md:justify-end'>
                  <div className='hidden md:block md:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          title={item.name}
                          className={classNames(
                            item.href === pathname
                              ? 'bg-gray-900/10 translate-y-1'
                              : 'bg-gray-900/50 hover:bg-gray-700/50 hover:text-white',
                            'text-white px-6 py-1 pt-2 rounded-xl font-display font-bold text-xl backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                          )}
                          aria-current={
                            item.href === pathname ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                      {/* <Link
                        href='/'
                        locale={locale === 'en' ? 'de' : 'en'}
                        className='font-display font-bold text-l'
                      >
                        {locale === 'en' ? 'DE' : 'EN'}
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}
