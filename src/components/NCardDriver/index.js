import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput, NCard, NPicture } from '~/components'

import { Container } from './styles'
import { fields, schema } from './props'
import { getDriversId } from '~/services/drivers'
import { useApiEffect } from '~/hooks'

const NCardDriver = ({ id }) => {
  const [driver, setDriver] = useState({})

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

  const [edit, setEdit] = useState(false)
  const [modal, setModal] = useState(false)

  function placeholder(type) {
    if (driver) {
      if (driver.car) {
        if (type === 'Cor do seu veículo:') return driver.car.color
        if (type === 'Ano do seu veículo:') return driver.car.year
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
    //
    setModal(false)
    // setStatus(!status)
  }

  return (
    <NCard
      title={driver.name}
      modal={modal}
      onCancel={() => onCancel()}
      content={
        <Container
          onSubmit={handleSubmit((data) => {
            console.log(data)
            setEdit(false)
          })}
        >
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

          <p className="label">Insira a foto da placa do seu veículo:</p>
          {driver.car && (
            <Controller
              control={control}
              name="placa"
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
              name="cnh"
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
              name="identidade"
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
              name="crv"
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
              name="crlv"
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
