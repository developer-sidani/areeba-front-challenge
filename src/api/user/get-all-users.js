import axios from 'axios'

import { beBaseUrl } from '../config'

export const getUsers = async () => {
  try {
    const result = await axios.get(`${beBaseUrl}/user`)
    return {
      data: result?.data?.data,
      status: result?.status,
    }
  } catch (err) {
    console.error(err)
    return err
  }
}
