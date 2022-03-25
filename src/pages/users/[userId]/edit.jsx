import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getUser } from '../../../api'
import { PageHeader } from '../../../components/page-header'

const Loader = () => {
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
}
const EditUserPage = () => {
  const router = useRouter()
  const { userId } = router.query
  const [user, setUser] = useState()
  const [userLoading, setUserLoading] = useState(false)
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
    [],
  )

  useEffect(() => {
    getUserCallback(userId)
  }, [router])
  return (
   <>
     <PageHeader title={`Areeba Challenge | ${user?.firstName || ''} ${user?.lastName || ''} `} />
     {userLoading ? (<Loader />) : null}
   </>
  )
}

export default EditUserPage
