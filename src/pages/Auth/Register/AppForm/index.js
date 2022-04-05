import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput, NSelector } from '~/components'
import { useApi, useApiEffect } from '~/hooks'
import { getRegister, setRegister } from '~/repositories/register'
import { verifyAppData } from '~/services/apps'
import { getCitiesByState, getStates } from '~/services/locations'
import formErrors from '~/utils/formErrors'

import { Container, Preview } from './styles'
import { fields, schema } from './props'

const AppForm = () => {
  const save = getRegister()

  const navigate = useNavigate()
  const { state } = useLocation()
  const { request } = useApi()

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const firstRender = useRef(true)

  const {
    register,
    handleSubmit,
    formState,
    watch,
    control,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const domain = watch('domain')
  const color = watch('color')
  const UF = watch('state')

  useApiEffect(getStates, (response) =>
    setStates(
      response.data.map((item) => ({ name: item.sigla, value: item.sigla }))
    )
  )

  useEffect(() => {
    request(
      () => getCitiesByState(UF),
      (response) =>
        setCities(
          response.data.map((item) => ({ name: item.nome, value: item.nome }))
        )
    )
  }, [UF])

  const onSubmit = (data) => {
    setRegister({ ...(save || {}), app: data })

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
      formErrors(setError)
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
      <Controller
        control={control}
        name="state"
        defaultValue={save?.app?.state || ''}
        render={({ field, fieldState }) => (
          <NSelector
            placeholder="Estado:"
            options={states}
            {...field}
            value={field.value}
            onChange={(option) => {
              setValue('city', '')

              field.onChange(option.name)
            }}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        defaultValue={save?.app?.city || ''}
        render={({ field, fieldState }) => (
          <NSelector
            placeholder="Cidade:"
            options={cities}
            {...field}
            value={field.value}
            onChange={(option) => field.onChange(option.name)}
            error={fieldState.error?.message}
          />
        )}
      />
      <Preview
        chosenColor={!formState.errors.color && (color || save?.app?.color)}
      >
        <p className="preview-title">Preview</p>
        <p>
          Domínio:{' '}
          {!formState.errors.domain &&
            (domain || save?.app?.domain) &&
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
