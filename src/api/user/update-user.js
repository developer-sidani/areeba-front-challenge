import axios from 'axios'
import { beBaseUrl } from '../config'

export const updateUser = async (userId, {
  firstName,
  lastName,
  phone,
  email,
  birthdate,
  gender,
}) => {
  try {
    const result = await axios.patch(`${beBaseUrl}/user/${userId}`, {
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
    return err
  }
}
