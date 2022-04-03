import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput } from '~/components'
import { useApi } from '~/hooks'
import { getRegister, setRegister } from '~/repositories/register'
import { verifyAppData } from '~/services/apps'

import { Container, Preview } from './styles'
import { fields, schema } from './props'

const AppForm = () => {
  const save = getRegister()

  const navigate = useNavigate()
  const { state } = useLocation()
  const { request } = useApi()

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const domain = watch('domain')
  const color = watch('color')

  const onSubmit = (data) => {
    setRegister({ app: data })

    data.tax = Number(data.tax.replace(/\D/g, '')) / 100

    data.location = {
      state: data.state,
      city: data.city,
    }

    data.colors = {
      primary: data.color,
    }

    delete data.state
    delete data.city
    delete data.color

    request(
      () => verifyAppData(data),
      () => navigate('/cadastro/chave', { state: { ...state, app: data } }),
      (response) => console.log(response)
    )
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Aplicativo</p>
      {Object.entries(fields).map(([key, value]) => (
        <NInput
          key={key}
          error={formState.errors[key]?.message}
          defaultValue={save?.app?.[key]}
          {...value}
          {...register(key)}
        />
      ))}
      <Preview
        chosenColor={!formState.errors.color && (color || save?.app?.color)}
      >
        <p className="preview-title">Preview</p>
        <p>
          Domínio:{' '}
          {!formState.errors.domain &&
            `${domain || save?.app?.domain}.weptek.xyz`}
        </p>
        <p>Cor:</p>
        <div className="color" />
      </Preview>
      <NButton type="submit" label="Confirmar" className="button" />
    </Container>
  )
}

export default AppForm
