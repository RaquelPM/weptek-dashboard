import { object, string } from 'yup'

export const fields = {
  name: {
    placeholder: 'Nome:',
    label: 'Nome:',
    type: 'text',
  },
  city: {
    placeholder: 'Cidade:',
    label: 'Cidade:',
    type: 'text',
  },
}

export const schema = object({
  name: string().required('Preencha esse campo!'),
  city: string(),
}).required()
