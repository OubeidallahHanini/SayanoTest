/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
Sayano Deutschland GmbH
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>

          
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             
            <li className="flex items-center">
  <a
    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    href="https://sayano.de/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-globe text-lg leading-lg" />
    <span className="ml-2">Sayano</span>
  </a>
</li>

              <li className="flex items-center">
                <a className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.linkedin.com/company/sayano/"
                target="_blank"
                rel="noopener noreferrer"
                >
                    
    <i className="fab fa-linkedin text-lg leading-lg" />
    <span className="ml-2"></span>
  </a>
</li>


              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/OubeidallahHanini/SayanoTest"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
