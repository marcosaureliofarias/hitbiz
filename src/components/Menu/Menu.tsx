export default function Menu() {
  return (
    <>
      <div className="navbar bg-new-gray bg-opacity-50  backdrop-blur-[40px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-white font-medium">Loja</a>
              </li>
              <li>
                <a className="text-white font-medium">Playlists</a>
              </li>
              <li>
                <a className="text-white font-medium">Compras / Vendas</a>
              </li>
              <li>
                <a className="text-white font-medium">Meu estúdio</a>
              </li>
              <li>
                <a className="text-white font-medium">Estatísticas</a>
              </li>
              <li className="text-white font-medium">
                <button className="rounded-lg text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                  Torne-se PRO
                </button>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl  hidden lg:flex">
            {' '}
            <img src="https:www.hitbiz.com.br/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimgs%2Flogo.1d0d0e4c5abbe9c088762bae243137e1.png&w=64&q=75" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-white font-medium">Loja</a>
            </li>
            <li>
              <a className="text-white font-medium">Playlists</a>
            </li>
            <li>
              <a className="text-white font-medium">Compras / Vendas</a>
            </li>
            <li>
              <a className="text-white font-medium">Meu estúdio</a>
            </li>
            <li>
              <a className="text-white font-medium">Estatísticas</a>
            </li>
            <li className="text-white font-medium">
              <button className="rounded-lg text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                Torne-se PRO
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3 mr-4">
            <button className="btn bg-transparent border-0 hidden lg:flex">
              <svg
                width="35"
                height="35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 11.667a8.75 8.75 0 0 0-17.5 0c0 10.208-4.375 13.125-4.375 13.125h26.25s-4.375-2.917-4.375-13.125ZM20.023 30.625a2.916 2.916 0 0 1-5.046 0"
                  stroke="#828282"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button className="btn bg-transparent border-0 hidden lg:flex">
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.7418 18.6198H9.55088L10.5145 16.6572L26.5246 16.6282C27.066 16.6282 27.5301 16.2415 27.6268 15.7065L29.8439 3.29609C29.902 2.97061 29.8149 2.63545 29.6022 2.38086C29.4971 2.25556 29.366 2.15463 29.218 2.08507C29.07 2.01551 28.9086 1.97899 28.745 1.97803L8.37783 1.91035L8.20381 1.0918C8.09424 0.569727 7.62373 0.189453 7.08877 0.189453H2.10977C1.80806 0.189453 1.5187 0.309307 1.30536 0.522648C1.09202 0.735989 0.972168 1.02534 0.972168 1.32705C0.972168 1.62876 1.09202 1.91811 1.30536 2.13145C1.5187 2.34479 1.80806 2.46465 2.10977 2.46465H6.16709L6.92764 6.08047L8.8 15.1458L6.38945 19.0807C6.26427 19.2496 6.18887 19.4502 6.17178 19.6598C6.1547 19.8694 6.19661 20.0796 6.29277 20.2666C6.48613 20.6501 6.87607 20.8918 7.30791 20.8918H9.33174C8.90028 21.4649 8.66724 22.1629 8.66787 22.8802C8.66787 24.7042 10.1503 26.1866 11.9743 26.1866C13.7983 26.1866 15.2808 24.7042 15.2808 22.8802C15.2808 22.1615 15.0423 21.4622 14.6169 20.8918H19.8086C19.3771 21.4649 19.1441 22.1629 19.1447 22.8802C19.1447 24.7042 20.6271 26.1866 22.4512 26.1866C24.2752 26.1866 25.7576 24.7042 25.7576 22.8802C25.7576 22.1615 25.5191 21.4622 25.0938 20.8918H28.745C29.3702 20.8918 29.8826 20.3826 29.8826 19.7542C29.8807 19.4528 29.7597 19.1644 29.546 18.9519C29.3323 18.7394 29.0432 18.62 28.7418 18.6198ZM8.85156 4.15332L27.4076 4.21455L25.59 14.3917L11.014 14.4175L8.85156 4.15332ZM11.9743 23.8985C11.4136 23.8985 10.956 23.4409 10.956 22.8802C10.956 22.3194 11.4136 21.8618 11.9743 21.8618C12.5351 21.8618 12.9927 22.3194 12.9927 22.8802C12.9927 23.1503 12.8854 23.4093 12.6944 23.6003C12.5034 23.7912 12.2444 23.8985 11.9743 23.8985ZM22.4512 23.8985C21.8904 23.8985 21.4328 23.4409 21.4328 22.8802C21.4328 22.3194 21.8904 21.8618 22.4512 21.8618C23.0119 21.8618 23.4695 22.3194 23.4695 22.8802C23.4695 23.1503 23.3622 23.4093 23.1713 23.6003C22.9803 23.7912 22.7213 23.8985 22.4512 23.8985Z"
                  fill="#828282"
                ></path>
              </svg>
            </button>

            <button className="btn btn-outline w-32 rounded-lg text-white font-medium">
              Cadastre-se grátis
            </button>
            <button className="btn btn-primary rounded-lg text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
