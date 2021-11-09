import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-screen bg-black opacity-60 py-5 max-h-16 fixed z-10">
      <ul className="flex flex-row text-white justify-between max-w-md mx-auto text-center">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="flex-grow-0">
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
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="w-9/12 mx-auto bg-black p-5">
                    <ul className="flex flex-col text-left gap-5">
                      <li className="hover:bg-opacity-100 ">
                        <Link href="/Keberangkatan">
                          <a>Keberangkatan</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/TibadiLyon">
                          <a>Tiba di Lyon</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/PerancisJangkaPanjang">
                          <a>Perancis Jangka Panjang</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/Budgeting">
                          <a>Budgeting</a>
                        </Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </li>
        <li>
          <Link href="/Gallery">
            <a>Gallery</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
