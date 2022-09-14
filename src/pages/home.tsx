import Menu from '../components/Menu/Menu'

import Title from '../components/Title/Title'
import Artist from '../components/Artist/Artist'

import Particle from '../components/Particle/Particle'
import Cards from '../components/Cards/Cards'
import FilterMenu from '../components/Filter-Menu/FilterMenu'
import Music from '../components/Music/Music'

export default function home() {
  // const { data, error } = useSWR<IDataFilms, Error>(['/artist', 'get'], api, {
  //   revalidateOnFocus: false,
  //   refreshWhenHidden: false,
  //   refreshInterval: 0,
  //   dedupingInterval: 0,
  // })

  return (
    <div className="flex flex-col h-4/6 bg-black">
      <header className="sticky top-0 z-50">
        <Menu />
      </header>
      <main className="relative">
        <Title />
        <div>
          <FilterMenu />
          <Music />
        </div>
      </main>
    </div>
  )
}
