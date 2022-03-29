import { object, string } from 'yup'

export const fields = {
  name: {
    label: 'Nome:',
    type: 'text',
  },
  email: {
    label: 'Email:',
    type: 'email',
  },
  phone: {
    label: 'Telefone:',
    type: 'text',
    mask: '(99) 99999-9999',
  },
  pix: {
    label: 'Pix:',
    type: 'text',
  },
  password: {
    label: 'Senha:',
    type: 'password',
  },
  carColor: {
    type: 'text',
    label: 'Cor do seu veículo:',
  },
  carYear: {
    mask: '9999',
    label: 'Ano do seu veículo:',
  },
  carModel: {
    type: 'text',
    label: 'Modelo do veículo:',
  },
  licensePlate: {
    type: 'text',
    mask: 'aaa-****',
    label: 'Placa do veículo:',
  },
  carBrand: {
    type: 'text',
    label: 'Marca do veículo:',
  },
}

export const schema = object({
  name: string().required('Preencha esse campo!').min(4, 'Nome muito curto!'),
  email: string().required('Preencha esse campo!').email('Email inválido!'),
  phone: string()
    .required('Preencha esse campo!')
    .matches(/\(\d{2}\) \d{5}-\d{4}/g, 'Telefone inválido!'),
  password: string()
    .required('Preencha esse campo!')
    .min(8, 'Senha muito curta!'),
  carColor: string().required('Preencha esse campo!'),
  carYear: string().required('Preencha esse campo!'),
  carModel: string().required('Preencha esse campo!'),
  licensePlate: string().required('Preencha esse campo!'),
  carBrand: string().required('Preencha esse campo!'),
}).required()
