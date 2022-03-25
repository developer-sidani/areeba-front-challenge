import React from 'react'
import {
  Formik, Form, Field,
} from 'formik'
import { initialValues, addUserSchema } from './formik-handlers'

const AddUserForm = () => (
    <Formik
      initialValues={initialValues}
      validationSchema={addUserSchema}
      onSubmit={(v) => {
        v.gender = v.gender === 'Male'
        console.log(v)
      }}
    >
        {({
          errors, handleSubmit, touched, handleChange, values,
        }) => (
            <form
              onSubmit={e => {
                e.preventDefault()
                handleSubmit()
              }}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                    </label>
                    <div className="mt-1">
                        <Field
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          placeholder="Ahmad"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                    </label>
                    <div className="mt-1">
                        <Field
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          placeholder="Sidani"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <div className="mt-1">
                        <Field
                          type="text"
                          name="number"
                          id="number"
                          autoComplete="tel"
                          placeholder="+961 76 940 820"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="developer.sidani@gmail.com"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                        Birthday
                    </label>
                    <div className="mt-1">
                        <Field
                          type="text"
                          name="birthdate"
                          id="phone-number"
                          autoComplete="birthday"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          placeholder="2001-02-14"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                    </label>
                    <div className="space-y-4 mt-1">
                        {['Male', 'Female'].map((x, index) => (
                            <div key={index} className="flex items-center">
                                <Field
                                  type="radio"
                                  name="gender"
                                  value={x}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor={x} className="ml-3 block text-sm font-medium text-gray-700">
                                    {x}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create User
                    </button>
                </div>
            </form>
        )}
    </Formik>
)

export default AddUserForm
