import React, { useCallback, useMemo, useState } from 'react'
import {
  Formik, Form, Field,
} from 'formik'
import { PhoneSchema, initialValues } from './formik-handlers'
import { validatePhone } from '../../api'

/**
 * Phone Validator Form Handler Component
 * @return React.FC - Formik component to handle the input from the user
 * and to send an api request upon submit
 */
const PhoneValidatorForm = () => {
  /**
   * loading type of Boolean
   * is going to change on submit to show that the request is loading
   */
  const [loading, setLoading] = useState(false)
  /**
   * validatePasswordCallback function
   * uses the useCallback function for performance.
   * @param {string} number - The number that needs to be validated
   * this function will call the api on submit
   */
  const validatePasswordCallback = useCallback(
    async (number) => {
      try {
        const res = await validatePhone(number)
        console.log(res)
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  const buttonClassNames = useMemo(() => ({
    initial: 'block w-full rounded-md border border-transparent px-5 py-3 bg-red-500 text-base font-medium text-white shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 sm:px-10',
    disabled: 'animate-pulse block w-full rounded-md border border-transparent px-5 py-3 bg-gray-400 text-base font-medium text-white shadow sm:px-10',
  }), [])
  return (
      <Formik
        initialValues={initialValues}
        validationSchema={PhoneSchema}
        onSubmit={({ number }) => {
          setLoading(true)
          validatePasswordCallback(number)
        }}
      >
          {({
            errors, handleSubmit, touched,
          }) => (
                <Form
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                  onSubmit={e => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                >
                    <div className="min-w-0 flex-1">
                        <label htmlFor="phone" className="sr-only">
                            Phone Number
                        </label>
                        <Field
                          id="phone"
                          type="text"
                          name="number"
                          required
                          className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
                          placeholder="ex. +961 76 940 820"
                        />
                        {errors.number && touched.number ? (
                            <div className="mt-2 text-pink-900 text-sm">
                                {errors.number}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className={loading ? buttonClassNames.disabled : buttonClassNames.initial}
                        >
                            Check
                        </button>
                    </div>
                </Form>
          )}
      </Formik>
  )
}

export default PhoneValidatorForm
