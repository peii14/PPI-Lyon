import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Squash as Hamburger } from "hamburger-react";
import ScrollLock from "react-scrolllock";
const Navbar = () => {
  return (
    <>
      <nav className="w-screen bg-primary opacity-80 max-h-16 fixed z-50 md:visible invisible">
        <ul className="flex flex-row text-white justify-between max-w-md mx-auto text-center transition-all duration-300">
          <Link href="/">
            <li className="transition-all duration-300 hover:bg-gray-300 hover:text-black p-5 cursor-pointer h-full">
              <a>Home</a>
            </li>
          </Link>
          <li className="flex-grow-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="space-x-3 p-5 hover:bg-gray-300 hover:text-black">
                    <span>Guideline</span>
                    <FontAwesomeIcon
                      className={`transform duration-500 
                    ${open ? " rotate-180 " : " rotate-0 "} `}
                      icon={faChevronDown}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 translate-10 opacity-0"
                    enterTo="transform scale-100 translate-0 opacity-100"
                    leave="transition duration-100 ease-out delay-150"
                    leaveFrom="transform scale-100 translate-0 opacity-100"
                    leaveTo="transform scale-95 -translate-20 opacity-0"
                  >
                    <Disclosure.Panel className="w-11/12 mx-auto bg-primary">
                      {({ close }) => (
                        <button
                          onClick={async () => {
                            await fetch("/accept-terms", { method: "POST" });
                            close();
                          }}
                        >
                          <ul className="flex flex-col text-left gap-3">
                            <Link href="/Keberangkatan">
                              <li className="transition-all duration-100 px-5 py-1 cursor-pointer hover:bg-gray-300 hover:text-black ">
                                <a>Keberangkatan</a>
                              </li>
                            </Link>
                            <Link href="/TibadiLyon">
                              <li className="transition-all duration-100 py-1 px-5 cursor-pointer hover:bg-gray-300 hover:text-black">
                                <a>Tiba di Lyon</a>
                              </li>
                            </Link>
                            <Link href="/PerancisJangkaPanjang">
                              <li className="transition-all duration-100 py-1 px-5 cursor-pointer hover:bg-gray-300 hover:text-black">
                                <a>Perancis Jangka Panjang</a>
                              </li>
                            </Link>
                            <Link href="/Budgeting">
                              <li className="transition-all duration-100 px-5 pt-1 pb-2 cursor-pointer hover:bg-gray-300 hover:text-black">
                                <a>Budgeting</a>
                              </li>
                            </Link>
                          </ul>
                        </button>
                      )}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </li>
          <Link href="/Gallery">
            <li className="transition-all duration-300 hover:bg-white hover:text-black p-5 cursor-pointer h-full">
              <a>Gallery</a>
            </li>
          </Link>
        </ul>
      </nav>
      <nav className="md:hidden visible">
        <div className="absolute z-50 -top-5 ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div className="absolute z-50 p-5">
                    <Hamburger toggled={open} color="#f0f0f0" />
                  </div>
                </Disclosure.Button>

                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform -translate-x-full opacity-0"
                  enterTo="transform translate-0 opacity-100"
                  leave="transition duration-300 ease-out "
                  leaveFrom="transform translate-0 opacity-100"
                  leaveTo="transform -translate-x-full opacity-0"
                >
                  <Disclosure.Panel>
                    {({ close }) => (
                      <div className="h-screen bg-primary py-20 px-10  ">
                        <ul className="flex flex-col gap-5 text-sec text-2xl cursor-pointer ">
                          <button
                            onClick={async () => {
                              await fetch("/accept-terms", {
                                method: "POST",
                              });
                              close();
                            }}
                          >
                            <Link href="/">
                              <li className=" text-sec text-2xl cursor-pointer h-full text-left">
                                <a>Home</a>
                              </li>
                            </Link>
                          </button>
                          <li className="w-52">
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="space-x-3">
                                    <span>Guideline</span>
                                    <FontAwesomeIcon
                                      className={`transform duration-500 
                                      ${open ? " rotate-180 " : " rotate-0 "} `}
                                      icon={faChevronDown}
                                    />
                                  </Disclosure.Button>
                                  <Transition
                                    enter="transition duration-500 ease-out"
                                    enterFrom="transform scale-95  -translate-y-20 opacity-0"
                                    enterTo="transform scale-100 translate-y-0 opacity-100 scale-100"
                                    leave="transition duration-300 ease-out"
                                    leaveFrom="transform scale-100 translate-y-0 opacity-100"
                                    leaveTo="transform scale-95 -translate-y-10 opacity-0"
                                  >
                                    <Disclosure.Panel className="text-xl py-4 ">
                                      <button
                                        onClick={async () => {
                                          await fetch("/accept-terms", {
                                            method: "POST",
                                          });
                                          close();
                                        }}
                                      >
                                        <ul className="flex flex-col text-left gap-5 ml-5">
                                          <Link href="/Keberangkatan">
                                            <li className="">
                                              <a>Keberangkatan</a>
                                            </li>
                                          </Link>
                                          <Link href="/TibadiLyon">
                                            <li className="">
                                              <a>Tiba di Lyon</a>
                                            </li>
                                          </Link>
                                          <Link href="/PerancisJangkaPanjang">
                                            <li className="">
                                              <a>Perancis Jangka Panjang</a>
                                            </li>
                                          </Link>
                                          <Link href="/Budgeting">
                                            <li className="">
                                              <a>Budgeting</a>
                                            </li>
                                          </Link>
                                        </ul>
                                      </button>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          </li>
                          <button
                          onClick={async () => {
                            await fetch("/accept-terms", {
                              method: "POST",
                            });
                            close();
                          }}
                        >
                          <Link href="/Gallery">
                            <li className="cursor-pointer text-left ">
                              <a>Gallery</a>
                            </li>
                          </Link>
                        </button>
                        </ul>
                        
                      </div>
                    )}
                  </Disclosure.Panel>
                </Transition>
                <ScrollLock isActive={open} />
              </>
            )}
          </Disclosure>
        </div>
       
      </nav>
    </>
  );
};
export default Navbar;
