import { object, string } from 'yup'

export const schema = object({
  // phone: string()
  //   .required('Preencha esse campo!')
  //   .matches(/\(\d{2}\) \d{5}-\d{4}/),
  email: string().email('Email inválido').required('Preencha esse campo!'),
  password: string().required('Preencha esse campo!'),
}).required()
