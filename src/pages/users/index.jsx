import React, { useCallback, useEffect, useState } from 'react'
import { getUsers } from '../../api'
import { UsersTable } from '../../components'

const UsersPage = () => {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(false)
  const getAllUsers = useCallback(
    async (callback) => {
      setLoading(false)
      try {
        const res = await getUsers()
        setUsers(res?.data)
        callback()
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
      <div className="px-4 sm:px-6 lg:px-8 mt-3 sm:mt-1">
          <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                  <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                  <p className="mt-2 text-sm text-gray-700">
                      A list of all the users in your account including their name, title, email and role.
                  </p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                      Add user
                  </button>
              </div>
          </div>
        <UsersTable
          users={users}
          loading={loading}
        />
      </div>
  )
}

export default UsersPage
