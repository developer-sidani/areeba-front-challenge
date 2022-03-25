import * as Yup from 'yup'

export const initialValues = {
  firstName: '',
  lastName: '',
  number: '',
  email: '',
  gender: 'Male',
  birthdate: '',
}
export const addUserSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
  gender: Yup.string().required('Required'),
  birthdate: Yup.string().required('Required'),

})
