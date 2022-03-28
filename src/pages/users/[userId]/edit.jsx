import React, {
  useCallback,
  useEffect,
  useState,
  memo,
} from 'react'
import { useRouter } from 'next/router'
import {
  deleteUser,
  getUser,
  updateUser,
  validatePhone,
} from '../../../api'
import { PageHeader } from '../../../components/page-header'
import { UserForm, DeleteUserModal, UserUpdatedModal } from '../../../components'
import { wait } from '../../../utils'

const Loader = memo(() => {
  const circleCommonClasses = 'h-5 w-5 bg-red-400 rounded-full'

  return (
      <div className="flex h-screen">
          <div className="m-auto flex">
              <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
              <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
              <div className={`${circleCommonClasses} animate-bounce400`} />
          </div>
      </div>
  )
})
const EditUserPage = () => {
  const router = useRouter()
  const { userId } = router.query
  const [user, setUser] = useState()
  const [open, setOpen] = useState(false)
  const [openUserUpdatedModal, setOpenUserUpdatedModal] = useState(false)
  const [userLoading, setUserLoading] = useState(false)
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
  const updateUserCallback = useCallback(async (data, callback) => {
    setLoading(true)
    setServerError('')
    await validatePasswordCallback(data.number).then(async (response) => {
      data.phone = response
      try {
        const res = await updateUser(user._id, data)
        console.log({ res })
        if (res.status === 422) {
          setServerError('Invalid Phone Number')
        } else if (res?.result?.status === 200) {
          callback()
          await wait(500)
          setOpenUserUpdatedModal(true)
        } else {
          setServerError(res.data?.data?.message)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    })
  }, [router, user])
  const deleteUserCallback = useCallback(async userId => {
    try {
      await deleteUser(userId)
      await wait(500)
      router.push('/users')
    } catch (e) {
      console.log(e)
    }
  }, [])
  const getUserCallback = useCallback(
    async (user) => {
      setUserLoading(true)
      if (user) {
        try {
          const res = await getUser(user)
          setUser(res.data)
        } catch (e) {
          console.log(e)
        } finally {
          setUserLoading(false)
        }
      }
    },
    [router],
  )

  useEffect(() => {
    getUserCallback(userId)
  }, [router])
  return (
   <>
     <PageHeader title={`Areeba Challenge | ${user?.firstName || ''} ${user?.lastName || ''} `} />
     {userLoading ? (<Loader />) : (
         <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
           <UserUpdatedModal
             open={openUserUpdatedModal}
             user={user}
             callback={async () => {
               await wait(500)
               router.reload()
             }}
           />
             <DeleteUserModal
               open={open}
               setOpen={setOpen}
               user={user}
               callback={() => deleteUserCallback(userId)}
             />
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
                     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Edit User</h2>
                     <p className="mt-4 text-lg leading-6 text-gray-500">
                         Please fill out the form with the data of the user that you want to edit
                     </p>
                 </div>
                 <div className="mt-12">
                     <UserForm
                       user={user}
                       loading={loading}
                       serverError={serverError}
                       deleteUserCallback={() => setOpen(true)}
                       callback={updateUserCallback}
                     />
                 </div>
             </div>
         </div>
     )}
   </>
  )
}

export default EditUserPage
