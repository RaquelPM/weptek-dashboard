import { object, string } from 'yup'

export const fields = {
  name: {
    label: 'Nome:',
    type: 'text',
  },
  city: {
    label: 'Cidade:',
    type: 'text',
  },
}

export const schema = object({
  name: string().required('Preencha esse campo!'),
  city: string(),
}).required()
