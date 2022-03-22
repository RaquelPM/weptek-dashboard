import { object, string, ref } from 'yup'

export const fields = {
  name: {
    placeholder: 'Nome:',
    type: 'text',
  },
  email: {
    placeholder: 'Email:',
    type: 'email',
  },
  phone: {
    placeholder: 'Telefone:',
    type: 'text',
    mask: '(99) 99999-9999',
  },
  cpf: {
    placeholder: 'CPF:',
    type: 'text',
  },
  password: {
    placeholder: 'Senha:',
    type: 'password',
  },
  passwordMatch: {
    placeholder: 'Confirmar senha:',
    type: 'password',
  },
}

export const schema = object({
  name: string().required('Preencha esse campo!').min(4, 'Nome muito curto!'),
  email: string().required('Preencha esse campo!').email('Email inválido!'),
  phone: string()
    .required('Preencha esse campo!')
    .matches(/\(\d{2}\) \d{5}-\d{4}/g, 'Telefone inválido!'),
  cpf: string()
    .required('Preencha esse campo!')
    .matches(/\d{3}.\d{3}.\d{3}-\d{2}/, 'CPF inválido!'),
  password: string()
    .required('Preencha esse campo!')
    .min(8, 'Senha muito curta!')
    .matches(/[A-Z]/, 'Adicione uma letra maiúscula!')
    .matches(/[a-z]/, 'Adicione uma letra minúscula!')
    .matches(/[0-9]/, 'Adicione um número!'),
  passwordMatch: string()
    .required('Preencha esse campo!')
    .oneOf([ref('password'), null], 'As senhas são diferentes!'),
}).required()
