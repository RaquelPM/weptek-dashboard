import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput, NCard, NPicture } from '~/components'

import { Container } from './styles'
import { fields, schema } from './props'
import {
  disableDriver,
  enableDriver,
  getDriversId,
  setDriverForceForm,
} from '~/services/drivers'
import { useApi, useApiEffect } from '~/hooks'

const NCardDriver = ({ id }) => {
  const [driver, setDriver] = useState({})

  const { request } = useApi()

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  useApiEffect(
    () => getDriversId(id),
    (response) => {
      setDriver(response.data)
    }
  )

  const attDriver = () => {
    request(
      () => getDriversId(id),
      (response) => {
        setDriver(response.data)
      }
    )
  }

  const [edit, setEdit] = useState(false)
  const [modal, setModal] = useState(false)

  function placeholder(type) {
    if (driver) {
      if (driver.car) {
        if (type === 'Cor do veículo:') return driver.car.color
        if (type === 'Ano do veículo:') return driver.car.year
        if (type === 'Modelo do veículo:') return driver.car.model
        if (type === 'Marca do veículo:') return driver.car.brand
        if (driver.car.licensePlate) {
          if (type === 'Placa do veículo:') return driver.car.licensePlate.value
        }
      }
      if (type === 'Pix:') return driver.pix
      if (type === 'Nome:') return driver.name
      if (type === 'Email:') return driver.email
      if (type === 'Telefone:') return driver.phone
    }
  }

  const onCancel = () => {
    setModal(false)
  }

  const changeStatus = () => {
    const service = driver.active ? disableDriver : enableDriver
    request(
      () => service(id),
      () => attDriver(),
      () => alert('error')
    )
    setModal(false)
  }

  const submit = (response) => {
    const data = response
    if (data.phone) data.phone = data.phone.replace(/\D/g, '')
    if (data.cpf) data.cpf = data.cpf.replace(/\D/g, '')

    console.log(data)

    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })

    request(
      () => setDriverForceForm(id, formData),
      () => attDriver(),
      () => alert('error')
    )

    setEdit(false)
  }

  return (
    <NCard
      title={driver.name}
      modal={modal}
      onCancel={() => onCancel()}
      onConfirm={() => changeStatus()}
      content={
        <Container onSubmit={handleSubmit((data) => submit(data))}>
          {Object.entries(fields).map(([key, value]) => (
            <div key={key}>
              <p>{value.label}</p>
              <NInput
                disabled={!edit}
                placeholder={placeholder(value.label)}
                error={formState.errors[key]?.message}
                {...value}
                {...register(key)}
              />
            </div>
          ))}

          <p className="label">Insira a foto da placa do veículo:</p>
          {driver.car && (
            <Controller
              control={control}
              name="licensePlateImage"
              render={({ field }) => (
                <NPicture
                  id="placa"
                  square
                  {...field}
                  disabled={!edit}
                  imgDefault={driver.car.licensePlate.url}
                />
              )}
              rules={{ required: true }}
            />
          )}

          <p className="label">Insira a foto da sua cnh:</p>
          {driver.car && (
            <Controller
              control={control}
              name="cnhImage"
              render={({ field }) => (
                <NPicture
                  id="cnh"
                  square
                  {...field}
                  disabled={!edit}
                  imgDefault={driver.docImages.cnh}
                />
              )}
              rules={{ required: true }}
            />
          )}

          <p className="label">Insira a foto da sua identidade:</p>
          {driver.docImages && (
            <Controller
              control={control}
              name="identityImage"
              render={({ field }) => (
                <NPicture
                  id="identidade"
                  square
                  {...field}
                  disabled={!edit}
                  imgDefault={driver.docImages.identity}
                />
              )}
              rules={{ required: true }}
            />
          )}

          <p className="label">Insira a foto da sua crv:</p>
          {driver.docImages && (
            <Controller
              control={control}
              name="crvImage"
              render={({ field }) => (
                <NPicture
                  id="crv"
                  square
                  {...field}
                  disabled={!edit}
                  imgDefault={driver.docImages.crv}
                />
              )}
              rules={{ required: true }}
            />
          )}

          <p className="label">Insira a foto da sua crlv:</p>
          {driver.docImages && (
            <Controller
              control={control}
              name="crlvImage"
              render={({ field }) => (
                <NPicture
                  id="crlv"
                  square
                  {...field}
                  disabled={!edit}
                  imgDefault={driver.docImages.crlv}
                />
              )}
              rules={{ required: true }}
            />
          )}

          <div className="btns">
            {!edit && (
              <NButton
                type="button"
                color="gray"
                label="Editar"
                onClick={() => setEdit(true)}
              />
            )}
            {edit && <NButton type="submit" color="green" label="Salvar" />}

            {driver.active && (
              <NButton
                type="button"
                color="red"
                label="Desativar"
                onClick={() => setModal(true)}
              />
            )}
            {!driver.active && (
              <NButton
                type="button"
                color="green"
                label="Ativar"
                onClick={() => setModal(true)}
              />
            )}
          </div>
        </Container>
      }
    />
  )
}

export default NCardDriver
