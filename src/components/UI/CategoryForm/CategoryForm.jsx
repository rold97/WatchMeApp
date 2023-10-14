import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const CategoryForm = ({ category }) => {
  const [selected, setSelected] = useState(category[0]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  console.log(selected);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative flex-col items-center text-center justify-center">
            <Listbox.Label className="block text-base font-bold  leading-6 text-white">
              Select a category...
            </Listbox.Label>
            <div className="relative mt-2 w-1/5 m-auto ">
              <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC276A] sm:text-sm sm:leading-6 ">
                <span className="flex items-center">
                  <span className="ml-3 h-5 block truncate">
                    {selected?.name}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 right-0 mx-auto z-[999] mt-1 max-h-56 w-1/5 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-rounded-xl">
                {category.map((cat) => (
                  <Listbox.Option
                    key={cat?.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-[#DC276A] text-white" : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={cat}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 h-5 block truncate"
                            )}
                          >
                            {cat?.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-[#DC276A]",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CategoryForm;
