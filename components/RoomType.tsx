import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Transition } from "@headlessui/react";
import Neuromorphism from "./Neuromorphism";
const RoomType = (props) => {
  // const [selectedId, setSelectedId] = useState(null)
  var space;
  if (props.status) {
    space = (
      <>
        <br />
      </>
    );
  }
  return (
    <div className="max-w-sm min-w-full mx-auto">
      <Disclosure>
        {({ open }) => (
          <Neuromorphism>
            <>
              <Disclosure.Button>
                <div
                  className={`grid md:grid-cols-5 grid-cols-8 transform duration-200 justify-around px-4 py-2 items-center`}
                >
                  <h2 className="whitespace-nowrap">{props.type}</h2>
                  <div className="md:col-span-4 col-span-7 ml-auto">
                    <FontAwesomeIcon
                      size="2x"
                      className={`transform duration-500 m-auto w-full
                    ${open ? "rotate-180 " : " rotate-0 "} `}
                      icon={faChevronDown}
                    />
                  </div>
                </div>
              </Disclosure.Button>

              <Transition
                show={open}
                enter="transition duration-300 ease-out "
                enterFrom="transform scale-95 translate-10 opacity-0"
                enterTo="transform scale-100 translate-0 opacity-100"
                leave="transition duration-100 ease-out delay-150"
                leaveFrom="transform scale-100 translate-0 opacity-100"
                leaveTo="transform scale-95 -translate-20 opacity-0"
              >
                <Disclosure.Panel>
                  <p
                    className={`transition-all px-5 text-justify ${
                      open ? "visible" : "hidden"
                    }`}
                  >
                    {props.content}
                  </p>
                  {space}
                </Disclosure.Panel>
              </Transition>
            </>
          </Neuromorphism>
        )}
      </Disclosure>
    </div>
  );
};
export default RoomType;
