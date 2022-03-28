import axios from 'axios'

import { beBaseUrl } from '../config'

export const deleteUser = async (userId) => {
  try {
    const result = await axios.delete(`${beBaseUrl}/user/${userId}`, {
      headers: {
        type: 'admin',
      },
    })
    return {
      data: result?.data?.data,
      status: result?.status,
    }
  } catch (err) {
    console.error(err)
    return err
  }
}
