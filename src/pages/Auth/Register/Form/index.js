import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput } from '~/components'

import { Container } from './styles'
import { fields, schema } from './props'

const Form = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  console.log(formState.errors)

  return (
    <Container onSubmit={handleSubmit((data) => console.log(data))}>
      {Object.entries(fields).map(([key, value]) => (
        <NInput
          key={key}
          error={formState.errors[key]?.message}
          {...value}
          {...register(key)}
        />
      ))}
      <p className="terms">
        Ao clicar em CADASTRAR você concorda com os{' '}
        <a href="/">TERMOS DE USO</a> e <a href="/">POLÍTICA DE PRIVACIDADE</a>.
      </p>
      <NButton type="submit" label="Cadastrar" />
    </Container>
  )
}

export default Form
