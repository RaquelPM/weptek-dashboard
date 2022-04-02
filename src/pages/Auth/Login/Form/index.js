import React from 'react'
import { useForm } from 'react-hook-form'

import { NButton, NInput } from '~/components'
import { useApi } from '~/hooks'
import { setAppId } from '~/repositories/app'
import { setAuth } from '~/repositories/auth'
import { login } from '~/services/auth'

import { Container } from './styles'

const Form = () => {
  const { request } = useApi()

  const { register, handleSubmit, setError, formState } = useForm()

  const onSubmit = (data) => {
    // data.phone = data.phone.replace(/\D/g, '')
    // data.phone = `55${data.phone}`

    request(
      () => login(data),
      ({ data }) => {
        setAuth(data.credential)
        setAppId(data.app.id)

        window.location.reload()
      },
      () => setError('password', { message: 'Telefone ou senha incorretos!' })
    )
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {/* <NInput
        light
        placeholder="Telefone"
        type="phone"
        {...register('phone')}
        error={formState.errors.phone?.message}
        errorOutline={formState.errors.password}
        mask="(99) 99999-9999"
      /> */}
      <NInput
        light
        placeholder="Email"
        type="email"
        {...register('email')}
        error={formState.errors.email?.message}
        errorOutline={formState.errors.email}
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
