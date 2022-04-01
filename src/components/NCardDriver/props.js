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
  // password: {
  //   label: 'Senha:',
  //   type: 'password',
  // },
  carColor: {
    type: 'text',
    label: 'Cor do veículo:',
  },
  carYear: {
    mask: '9999',
    label: 'Ano do veículo:',
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
  name: string(),
  email: string().email('Email inválido!'),
  phone: string(),
  // password: string()
  //
  //   .min(8, 'Senha muito curta!'),
  carColor: string(),
  carYear: string(),
  carModel: string(),
  licensePlate: string(),
  carBrand: string(),
})
