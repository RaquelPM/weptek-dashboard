import { object, string } from 'yup'

export const schema = object({
  // phone: string()
  //   .required('Preencha esse campo!')
  //   .matches(/\(\d{2}\) \d{5}-\d{4}/),
  phone: string()
    .required('Preencha esse campo!')
    .matches(/\(\d{2}) \d{5}-\d{4}/),
  password: string().required('Preencha esse campo!'),
}).required()
