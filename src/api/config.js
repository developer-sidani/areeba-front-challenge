/**
 * Default Configuration for the apis endpoints
 * We are getting the phoneBaseUrl and the beBaseUrl from the .env.local file
 * Check the .env.example file
 */

const phoneBaseUrl = process.env.PHONE_API
const beBaseUrl = process.env.DB_HOST

export {
  phoneBaseUrl,
  beBaseUrl,
}
