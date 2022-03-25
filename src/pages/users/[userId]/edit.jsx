import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getUser } from '../../../api'
import { PageHeader } from '../../../components/page-header'

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
   <PageHeader title={`Areeba Challenge | ${user?.firstName || ''} ${user?.lastName || ''} `} />
  )
}

export default EditUserPage
