/**
 * Using the axios library, and importing the phoneBaseUrl
 */

import axios from 'axios'
import { phoneBaseUrl } from '..'

/**
 * function that calls the validator phone api
 * @param {string} number - The number that needs to be validated
 * @returns promise - The result of the api request
 */
export const validatePhone = async (number) => {
  try {
    const res = await axios.get(`${phoneBaseUrl}&number=${number}`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      err,
    }
  }
}
