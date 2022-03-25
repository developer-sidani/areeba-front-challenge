import React, { useCallback, useState } from 'react'
import { PageHeader } from '../../components/page-header'
import { UserForm } from '../../components'
import { createUser, validatePhone } from '../../api'

const AddUserPage = () => {
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const validatePasswordCallback = useCallback(
    async (number) => {
      try {
        const res = await validatePhone(number)
        return res?.res
      } catch (err) {
        console.log({ err })
      }
    },
    [],
  )
  const createUserCallback = useCallback(async (user, callback) => {
    console.log({ user })
    setLoading(true)
    setServerError('')
    await validatePasswordCallback(user.number).then(async (response) => {
      user.phone = response
      console.log({ user })
      try {
        const res = await createUser(user)
        console.log({ res })
        if (res.status === 422) {
          setServerError('Invalid Phone Number')
        } else if (res?.result?.status === 201) {
          callback()
        } else {
          setServerError(res.data.data.message)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    })
  }, [])
  return (
        <>
            <PageHeader />
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg
                      className="absolute left-full transform translate-x-1/2"
                      width={404}
                      height={404}
                      fill="none"
                      viewBox="0 0 404 404"
                      aria-hidden="true"
                    >
                        <defs>
                            <pattern
                              id="85737c0e-0916-41d7-917f-596dc7edfa27"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg
                      className="absolute right-full bottom-0 transform -translate-x-1/2"
                      width={404}
                      height={404}
                      fill="none"
                      viewBox="0 0 404 404"
                      aria-hidden="true"
                    >
                        <defs>
                            <pattern
                              id="85737c0e-0916-41d7-917f-596dc7edfa27"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Add User</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Please fill out the form with the data of the user that you want to create
                        </p>
                    </div>
                    <div className="mt-12">
                        <UserForm
                          callback={createUserCallback}
                          serverError={serverError}
                          loading={loading}
                        />
                    </div>
                </div>
            </div>
        </>
  )
}

export default AddUserPage
