import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="w-screen bg-primary opacity-80 max-h-16 fixed z-50">
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
  );
};
export default Navbar;
