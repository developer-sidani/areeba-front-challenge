/**
 * Default Configuration for the apis endpoints
 * We are getting the phoneBaseUrl and the beBaseUrl from the .env.local.local file
 * Check the .env.local.example file
 */

const phoneBaseUrl = `http://apilayer.net/api/validate?access_key=${process.env.NEXT_PUBLIC_PHONE_API_KEY}`
const beBaseUrl = process.env.NEXT_PUBLIC_DB_HOST

export {
  phoneBaseUrl,
  beBaseUrl,
}
