import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'

/**
 * Navbar Component
 * Will return a react functional component
 * Using tailwind it will detect if the device is small or large
 * if large it is going to render the menu as is {Simple Navbar}
 * if small it is going to rerender the component as hamburger icon
 * and render the buttons insider
 */
const Navbar = () => (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <button
              type="button"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Phone Validation
            </button>
            <button
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              type="button"
            >
              Customers
            </button>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="data:image/jpeg;base64,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"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Phone Validation
                </button>
                <button
                  type="button"
                  className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Customers
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
)

export default Navbar
