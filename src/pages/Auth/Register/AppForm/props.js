import { object, string } from 'yup'

export const fields = {
  name: {
    placeholder: 'Nome:',
    type: 'text',
  },
  domain: {
    placeholder: 'Domínio:',
    type: 'text',
  },
  tax: {
    placeholder: 'Taxa:',
    type: 'text',
    mask: '99%',
  },
  color: {
    placeholder: 'Cor (em hexadecimal):',
    type: 'text',
    mask: '#******',
  },
}

export const schema = object({
  name: string().required('Preencha esse campo!').min(4, 'Nome muito curto!'),
  domain: string()
    .required('Preencha esse campo!')
    .min(4, 'Domínio muito curto!')
    .matches(/^[a-z][a-z\-_\d]*$/, 'Formato inválido!'),
  state: string().required('Preencha esse campo!'),
  city: string().required('Preencha esse campo!'),
  tax: string()
    .required('Preencha esse campo!')
    .matches(/^[\d]{2}/, 'Precisa ser um valor entre 0 e 100!'),
  color: string()
    .required('Preencha esse campo!')
    .matches(/^#[\dA-Fa-f]{6}$/, 'Formato inválido!'),
}).required()
