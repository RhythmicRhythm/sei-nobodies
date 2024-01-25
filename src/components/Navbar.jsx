import React, { useState } from "react";
import logo from "../assets/nobody.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-dark dark:bg-dark`}>
      <div className="container">
        <div className="relative mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-16"
              />
              
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-rose-600 focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[3px] w-[30px]  bg-rose-400"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-rose-400"></span>
                <span className="relative my-[6px] block h-[3px] w-[30px]  bg-rose-400"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-black px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Home</ListItem>
                 
                  <ListItem NavLink="/about">About</ListItem>
                  <ListItem NavLink="/tokenomics">Tokenomics</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              

              <button
              
                className="rounded-md bg-rose-600 px-7 py-3 text-xl font-bold text-white hover:bg-rose-400"
              >
                Connect Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className="flex py-2 text-xl font-bold text-white hover:text-rose-400 lg:ml-12 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
