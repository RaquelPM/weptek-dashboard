import { object, string } from 'yup'

export const schema = object({
  email: string().email().required('Preencha esse campo!'),
  password: string().required('Preencha esse campo!'),
}).required()
