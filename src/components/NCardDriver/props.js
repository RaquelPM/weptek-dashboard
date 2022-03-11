import { object, string } from 'yup'

export const fields = {
  name: {
    placeholder: 'Nome:',
    label: 'Nome:',
    type: 'text',
  },
  email: {
    placeholder: 'Email:',
    label: 'Email:',
    type: 'email',
  },
  phone: {
    placeholder: 'Telefone:',
    label: 'Telefone:',
    type: 'text',
    mask: '(99) 99999-9999',
  },
  password: {
    placeholder: 'Senha:',
    label: 'Senha:',
    type: 'password',
  },
  carColor: {
    type: 'text',
    label: 'Cor do seu veículo:',
    placeholder: 'Insira a cor do carro',
  },
  carYear: {
    mask: '9999',
    label: 'Ano do seu veiculo:',
    placeholder: 'Insira o ano do seu carro',
  },
  carModel: {
    type: 'text',
    label: 'Modelo do veículo:',
    placeholder: 'Insira o modelo do seu veículo',
  },
  licensePlate: {
    type: 'text',
    mask: 'aaa-****',
    label: 'Placa do veículo:',
    placeholder: 'Insira a placa do seu veículo',
  },
  carBrand: {
    type: 'text',
    label: 'Marca do veículo:',
    placeholder: 'Insira a marca do seu veículo',
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
