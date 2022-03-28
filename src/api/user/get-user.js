import axios from 'axios'

import { beBaseUrl } from '../config'

export const getUser = async (userId) => {
  try {
    const result = await axios.get(`${beBaseUrl}/user/${userId}`)
    return {
      data: result?.data?.data,
      status: result?.status,
    }
  } catch (err) {
    console.error(err)
    return err
  }
}
