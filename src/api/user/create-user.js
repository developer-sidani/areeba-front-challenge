import axios from 'axios'
import { beBaseUrl } from '../config'

export const createUser = async ({
  firstName,
  lastName,
  phone,
  email,
  birthdate,
  gender,
}) => {
  try {
    const result = await axios.post(`${beBaseUrl}/user/new`, {
      firstName,
      lastName,
      phone,
      email,
      birthdate,
      gender,
    }, {
      headers: {
        type: 'admin',
      },
    })
    return {
      result,
    }
  } catch (err) {
    return err.response
  }
}
