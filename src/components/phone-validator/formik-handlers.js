import * as Yup from 'yup'

/**
 * Basic handlers for formik
 */

/**
 * Initial Values for the formik component
 * @returns object - The object represents the initial values of the fields in formik
 */
const initialValues = {
  number: '',
}

/**
 * Validation Schema for the formik validation imported from Yup
 * @returns object - The object represents the validation schema for formik
 */
const PhoneSchema = Yup.object().shape({
  number: Yup.string().required('Required'),
})

export {
  initialValues,
  PhoneSchema,
}
