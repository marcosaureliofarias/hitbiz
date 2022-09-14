import { HeartIcon } from '@heroicons/react/outline'
import { DotsVerticalIcon, PlayIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import muiscNote from '../../assets/music_note.jpg'
import Pagination from '../Pagination/Pagination'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MusicList() {
  const listOfMusics = [
    { name: 'Mete Pinga aê', valor: '1.000,00', genero: 'Sertanejo' },
    { name: 'Aonde eu vou', valor: '1.000,00', genero: 'Sertanejo' },
    { name: 'Chama no piseiro', valor: '1.000,00', genero: 'Sertanejo' },
    { name: 'Sem mim cê desandou', valor: '1.000,00', genero: 'Sertanejo' },
    { name: 'Dancinha de ex', valor: '1.000,00', genero: 'Sertanejo' },
    { name: 'Erro consciente', valor: '1.000,00', genero: 'Sertanejo' },
    { name: 'Hashtag eu tô fora!', valor: '1.000,00', genero: 'Sertanejo' },
  ]

  interface IListMusic {
    name?: string
    valor?: string
    genero?: string
    autor?: string
  }

  const [itens, setItens] = useState<IListMusic[]>([])
  const [intemsPerPage, setIntemsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setItens(listOfMusics)
  }, [])

  const pages = Math.ceil(itens!.length / intemsPerPage)
  const startIndex = currentPage * intemsPerPage
  const endIndex = startIndex + intemsPerPage
  const currentItens = itens!.slice(startIndex, endIndex)

  return (
    <>
      {currentItens.map((category) => (
        <div className="navbar bg-new-gray bg-opacity-5 hover:bg-opacity-60 w-full">
          <div className="navbar-start gap-2 lg:gap-5">
            <button>
              <PlayIcon className="w-9 h-9" />
            </button>

            <button className="lg:flex ">
              <img
                className=" object-scale-down h-11 w-11 rounded-lg lg:h-20 lg:w-20"
                src={muiscNote}
                alt=""
              />
            </button>
            <div className=" hidden lg:grid gap-1">
              <a className="normal-case text-sm font-bold ">
                <p>{category.name}</p>
              </a>
              <button className="rounded-md w-11 btn-xs text-sm  text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                PRO
              </button>
            </div>
          </div>
          <div className="navbar-start gap-2 grid lg:hidden">
            <ul className="">
              <div>
                <a className="normal-case text-xs font-bold ">
                  <p>{category.name}</p>
                </a>
                <button className="rounded-md w-11 btn-xs text-sm  text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                  PRO
                </button>
                <a className="  normal-case text-sm lg:hidden">
                  <p>A partir de:</p>
                </a>
                <a className="  normal-case text-sm lg:hidden text-green-500">
                  <p>{category.valor}</p>
                </a>
              </div>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="  p-0">
              <li>
                <a className="text-white font-medium">{category.genero}</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-3 ">
              <div className=" hidden lg:flex flex-col">
                <a className="  normal-case text-base font-bold ">
                  <p>A partir de:</p>
                </a>
                <a className="  normal-case text-base font-bold text-green-500">
                  <p>{category.valor}</p>
                </a>
              </div>
              <button className="btn-sm text-sm rounded-lg text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                Liberação
              </button>
              <button className="hidden lg:flex items-center">
                <HeartIcon className="w-7 h-7" aria-hidden="true" />
              </button>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="hover:scale-110  transform  group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <button>
                      <DotsVerticalIcon className="w-7 h-7" />
                    </button>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#my-modal-2"
                            className={classNames(
                              active
                                ? 'bg-gray-900  text-gray-100'
                                : 'text-gray-100',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Adicionar a PlayList
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 flex gap-3">
        {Array.from(Array(pages), (item, index) => {
          return (
            <Pagination
              paginationNumber={index + 1}
              value={index}
              onClick={(e: { target: HTMLInputElement }) =>
                setCurrentPage(Number((e.target as HTMLInputElement).value))
              }
            />
          )
        })}
      </div>
    </>
  )
}
