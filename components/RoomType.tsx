import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Transition } from "@headlessui/react";
import Neuromorphism from "./Neuromorphism";
const RoomType = (props) => {
  // const [selectedId, setSelectedId] = useState(null)
  var space;
  if(props.status){
    space = (
      <>
        <br />
      </>
    );
  }
  return (
    <div className='md:w-10/12 w-full mx-auto'>
      <Neuromorphism>
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 >{props.type}</h1>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div>
                    <FontAwesomeIcon
                    size="3x"
                      className={`transform duration-500  
                    ${open ? props.status? "rotate-180 md:translate-y-36 translate-y-20":"rotate-180 translate-y-14" : " rotate-0 "} `}
                      icon={faChevronDown}
                    />
                  </div>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 translate-10 opacity-0"
                  enterTo="transform scale-100 translate-0 opacity-100"
                  leave="transition duration-100 ease-out delay-150"
                  leaveFrom="transform scale-100 translate-0 opacity-100"
                  leaveTo="transform scale-95 -translate-20 opacity-0"
                >
                  <Disclosure.Panel>
                    <p className="-mt-28">{props.content}</p>
                    {space}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </Neuromorphism>
    </div>
  );
};
export default RoomType;
