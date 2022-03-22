import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { NButton, NInput } from '~/components'
import { useApi } from '~/hooks'
import { setAuth } from '~/repositories/auth'
import { login } from '~/services/auth'

import { Container } from './styles'

const Form = () => {
  const navigate = useNavigate()

  const { request } = useApi()

  const { register, handleSubmit, setError, formState } = useForm()

  const onSubmit = (data) => {
    request(
      () => login(data),
      ({ data }) => {
        setAuth(data.credential)

        navigate('/')
      },
      () => setError('password', { message: 'Email ou senha incorretos!' })
    )
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <NInput
        light
        placeholder="Email"
        type="email"
        {...register('email')}
        errorOutline={formState.errors.password}
      />
      <NInput
        light
        placeholder="Senha"
        type="password"
        {...register('password')}
        error={formState.errors.password?.message}
      />
      <NButton className="button" label="Entrar" outline type="submit" />
    </Container>
  )
}

export default Form
