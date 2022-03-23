import React from 'react'

const PhoneValidatorForm = () => (
    <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
        <div className="min-w-0 flex-1">
            <label htmlFor="phone" className="sr-only">
                Phone Number
            </label>
            <input
              id="phone"
              type="text"
              className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              placeholder="+961 76 940 820"
            />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-500 text-base font-medium text-white shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 sm:px-10"
            >
                Check
            </button>
        </div>
    </form>
)

export default PhoneValidatorForm
