import Video1 from '../../assets/video_hb1.mp4'
import Artist from '../Artist/Artist'

export default function Title() {
  return (
    <>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src={Video1} type="video/mp4" />
        </video>

        <div className="relative bg-gradient-to-b from-transparent to-black bg-opacity-5">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:justify-center">
              <div className="w-full max-w-xl mb-12 xl:mb-0 lg:pl-20 justify-center">
                <h1 className="text-white font-bold text-4xl lg:text-5xl">
                  Encontre o seu
                </h1>
                <p className="text-purple-2 font-bold text-4xl lg:text-5xl">
                  hit de sucesso
                </p>
                <div className="relative max-w-sm rounded-lg backdrop-blur-md ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className=" input input-bordered input-primary mt-9 bg-new-gray dark:bg-opacity-20  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-90 lg:w-96 md:w-96  pl-10 p-2.5  dark:bg-new-gray  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder="Procurar por músicas, hitmakers, gênero e moods"
                  />
                </div>
              </div>
            </div>
          </div>
          <Artist />
        </div>
      </div>
    </>
  )
}
