import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

import { NButton, NInput } from '~/components'
import { useApi } from '~/hooks'
import { createApp } from '~/services/apps'

import { Container } from './styles'
import { createLicensed } from '~/services/licenseds'

const Authorization = () => {
  const { request } = useApi()

  const navigate = useNavigate()
  const { state } = useLocation()

  const { register, handleSubmit, formState, setError } = useForm({
    resolver: yupResolver(
      object({
        key: string().required('Preencha esse campo!'),
      })
    ),
  })

  const onSubmit = ({ key }) => {
    request(
      () => createApp(state.app, key),
      (response) => {
        const { id } = response.data

        request(
          () => createLicensed({ ...state.licensed, appId: id }, key),
          () => navigate('/')
        )
      },
      () => setError('key', { message: 'Chave inválida ou expirada!' })
    )
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Autorização</p>
      <p className="label">Insira aqui a sua chave de autorização*:</p>
      <NInput
        {...register('key')}
        error={formState.errors.key?.message}
        placeholder="Chave:"
      />
      <p className="instruction">
        *Caso você não tenha uma chave de autorização ou sua chave tenha
        expirado, solicite uma nova ao administrador do Weptek. Não se preocupe,
        os seus dados cadastrais ficam salvos aqui ;)
      </p>
      <NButton type="submit" label="Enviar" className="button" />
    </Container>
  )
}

export default Authorization
