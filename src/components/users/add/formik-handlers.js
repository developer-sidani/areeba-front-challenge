import * as Yup from 'yup'

export const addUserSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
  gender: Yup.string().required('Required'),
  birthdate: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Should Be in yyyy-mm-dd format').required('Required'),
})
