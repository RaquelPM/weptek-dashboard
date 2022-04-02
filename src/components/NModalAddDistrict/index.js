import React from 'react'
import { useForm } from 'react-hook-form'

import NButton from '../NButton'
import NInput from '../NInput'

import { Container, Form } from './styles'

const NModalAddDistrict = ({ save, label, ...rest }) => {
  const { register, handleSubmit, watch } = useForm()

  const submit = () => {
    const name = watch('name')
    const city = watch('city')
    save({ name: name, city: city })
  }

  return (
    <Container {...rest}>
      <p className="title">{label}</p>
      <Form onSubmit={handleSubmit(submit)}>
        <NInput
          label="Nome"
          width="100%"
          placeholder="Escreva o nome do bairro..."
          {...register('name', { required: true })}
        />

        <NInput
          label="Cidade:"
          width="100%"
          placeholder="Escreve o nome da cidade..."
          {...register('city', { required: true })}
        />
        <NButton
          color="green"
          className="button"
          label="Confirmar"
          type="submit"
        />
      </Form>
      {/* <p className="helper">Escreva um ponto de referencia, número etc.</p> */}
    </Container>
  )
}

export default NModalAddDistrict
