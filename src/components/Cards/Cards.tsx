import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HeartIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, PlayIcon } from '@heroicons/react/solid'
import muiscNote from '../../assets/music_note.jpg'
import Pagination from '../Pagination/Pagination'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Cards() {
  const listOfMusics = [
    {
      name: 'Mete Pinga aê',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
    {
      name: 'Aonde eu vou',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
    {
      name: 'Chama no piseiro',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
    {
      name: 'Sem mim cê desandou',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
    {
      name: 'Dancinha de ex',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
    {
      name: 'Erro consciente',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
    {
      name: 'Hashtag eu tô fora!',
      valor: '1.000,00',
      genero: 'Sertanejo',
      autor: 'Fabinho',
    },
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
      <div className="container  mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 ">
          <div className="grid lg:grid-cols-3 gap-6 p-5 lg:p-0">
            {currentItens.map((item) => (
              <div className="card card-compact bg-gray-900  shadow-xl  p-3 ">
                <div className="group relative ">
                  <figure className="max-h-min">
                    <img
                      className="w-full  block rounded "
                      src={muiscNote}
                      alt=""
                    />
                  </figure>
                  <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <HeartIcon className="w-5 h-5" />
                    </button>

                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <PlayIcon className="w-11 h-11" />
                    </button>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                          <DotsHorizontalIcon className="w-5 h-5" />
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
                                  Adiciocar à playlist
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.autor}</p>
                  <p>A partir de:</p>
                  <p className="text-green-500 font-bold">R${item.valor}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary rounded-lg text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                      Liberação
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        </div>
      </div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
