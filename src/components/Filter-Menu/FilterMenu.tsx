import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronUpIcon, ViewListIcon, XIcon } from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import Cards from '../Cards/Cards'
import MusicList from '../Music-List/MusicList'
import Pagination from '../Pagination/Pagination'

const subCategories = [
  { name: 'Mood', href: '#' },
  { name: 'Licença', href: '#' },
  { name: 'Preço', href: '#' },
]

const filters = [
  {
    title: 'Sertanejo',
    subFilters: [
      'Todos',
      'Pop',
      'Romântico',
      'Bachata',
      'Raíz- viola/ modão',
      'Arrocha',
      'Vaneira',
      'Forró- pisadinha - universitário - forronejo',
      'Country',
      'Funknejo',
      'Brega',
      'Sofrencia',
      'Reggeaton',
    ],
  },
  {
    title: 'Rock',
    subFilters: [
      'Todos',
      'Pop rock',
      'Rock alternativo',
      'Grunge',
      'Punk rock',
      'Pop punk',
      'New wave',
      'Heavy metal',
      'Hardcore',
      'Hard rock',
      'Folk rock',
      'Glam rock',
      'Rock progressivo',
      'Rock psicodélico',
      'Surf Music',
      'Indie Rock',
      'Emo',
      'Metalcore',
      'Post-Hardcore',
      'Post-Punk',
    ],
  },
  {
    title: 'Samba',
    subFilters: [
      'Todos',
      'Samba de breque',
      'Samba de partido alto',
      'Samba raiz',
      'Samba choro',
      'Samba sincopado',
      'Samba carnavalesco',
      'Sambalanço',
      'Samba rock',
      'Samba reggae',
      'Bossa nova',
      'MPB',
    ],
  },
  {
    title: 'Gospel',
    subFilters: [
      'Todos',
      'Hinos',
      'Louvores',
      'Forró gospel',
      'Rock gospel',
      'Axé gospel',
      'Worship',
      'Funk gospel',
    ],
  },
  {
    title: 'Funk',
    subFilters: ['Todos', 'Ostentação', 'Carioca', 'Consciente', 'Pop'],
  },
  {
    title: 'Infantil',
    subFilters: ['Todos', 'Cantigas de roda', 'Poéticas'],
  },
  {
    title: 'Pagode',
    subFilters: ['Todos', 'Pagode carioca', 'Pagode baiano', 'Axé'],
  },
  {
    title: 'Jazz',
    subFilters: ['Todos', 'Blues', 'Soul', 'RnB', 'Zouk', 'Ska'],
  },
  {
    title: 'Latina',
    subFilters: [
      'Todos',
      'Reggeaton',
      'Tango',
      'Cumbia',
      'Conga',
      'Merengue',
      'Salsa',
      'Lambada',
    ],
  },
  {
    title: 'Reggae',
    subFilters: [
      'Todos',
      'Early reggae',
      'Roots reggae',
      'Rockers',
      'Dancehall',
      'New roots',
      'Rock reggae',
      'Pop reggae',
      'Samba reggae',
    ],
  },
  {
    title: 'Eletrônica',
    subFilters: [
      'Todos',
      'House',
      'Acid house',
      'Drum and bass',
      'Psy and Trance',
      'Electro music',
      'Lounge',
      'Minimal',
      'Techno',
      'Tech house',
      'Braziliam Bass',
      'Dance Music',
      'Euro Dance',
      'Deep House',
      'Música psicadélica',
      'Noise',
      'New wave (música)',
      'New age',
      'Hip hop',
      'Dub',
      'Música ambiente',
    ],
  },
  {
    title: 'HIP HOP',
    subFilters: ['Todos', 'Rap', 'DJing', 'Break dance', 'Graffiti'],
  },
  {
    title: 'Pop Internacional',
    subFilters: [
      'Todos',
      'K-pop',
      'Dance',
      'Sunshine',
      'Experimental',
      'Progressivo',
      'Tean',
      'Operation',
      'Art',
      'Bubblegun',
      'Hypnagogic',
      'Indie Pop',
      'Hyperpop',
      'Synth Pop',
      'Pop',
    ],
  },
  {
    title: 'Pop',
    subFilters: ['Pop'],
  },
  {
    title: 'Outros',
    subFilters: ['Fonograma'],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterMenu() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [cards, setCards] = useState(true)

  return (
    <div className=" w-full">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full  bg-black shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium ">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10  p-2 rounded-md flex items-center justify-center "
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4  ">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="font-medium  px-2 py-3">
                      <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  py-3 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                              <span>Gêneros</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? 'rotate-180 transform' : ''
                                } h-5 w-5 `}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
                              {filters.map((section) => (
                                <Disclosure
                                  as="div"
                                  className="border-b border-gray-200 py-6"
                                >
                                  {({ open }) => (
                                    <>
                                      <h3 className="-my-3 flow-root">
                                        <Disclosure.Button className="py-3  w-full flex items-center justify-between text-sm ">
                                          <span className="font-medium ">
                                            {section.title}
                                          </span>
                                        </Disclosure.Button>
                                      </h3>
                                      <Disclosure.Panel className="pt-6">
                                        <div className="space-y-4">
                                          {section.subFilters.map(
                                            (subFilters, optionIdx) => (
                                              <div
                                                key={subFilters}
                                                className="flex items-center"
                                              >
                                                <label
                                                  htmlFor={`filter-${section.title}-${optionIdx}`}
                                                  className="ml-3 text-sm  cursor-pointer"
                                                >
                                                  {subFilters}
                                                </label>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className=" mx-auto sm:px-6 lg:px-8 w-full">
          <div className="relative z-10 flex items-baseline justify-around lg:justify-between pt-8 pb-6 ">
            <h1 className="text-base font-bold tracking-tight">
              Composições em destaque
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-5 sm:ml-7  hover:text-gray-500"
                onClick={(e) => setCards(false)}
              >
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-5 sm:ml-7 hover:text-gray-500"
                onClick={(e) => setCards(true)}
              >
                <span className="sr-only">View grid</span>
                <ViewListIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6  hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg  py-3 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                        <span>Gêneros</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 `}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
                        {filters.map((section) => (
                          <Disclosure
                            as="div"
                            className="border-b border-gray-200 py-6"
                          >
                            {({ open }) => (
                              <>
                                <h3 className="-my-3 flow-root">
                                  <Disclosure.Button className="py-3  w-full flex items-center justify-between text-sm ">
                                    <span className="font-medium ">
                                      {section.title}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                  <div className="space-y-4">
                                    {section.subFilters.map(
                                      (subFilters, optionIdx) => (
                                        <div
                                          key={subFilters}
                                          className="flex items-center"
                                        >
                                          <label
                                            htmlFor={`filter-${section.title}-${optionIdx}`}
                                            className="ml-3 text-sm  cursor-pointer"
                                          >
                                            {subFilters}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <ul
                  role="list"
                  className="text-sm font-medium space-y-4 pb-6 border-b border-gray-200"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {cards ? <MusicList /> : <Cards />}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
