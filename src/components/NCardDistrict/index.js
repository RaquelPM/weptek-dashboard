import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { getDistrictById, setDistrictById } from '~/services/districts'

import { NButton, NInput, NCard } from '~/components'

import { useApi, useApiEffect } from '~/hooks'

import { Container } from './styles'
import { fields, schema } from './props'

const NCardDistrict = ({ id }) => {
  const [district, setDistrict] = useState({})

  const { request } = useApi()

  const attDistrict = () => {
    request(
      () => getDistrictById(id),
      (response) => setDistrict(response.data)
    )
  }

  useApiEffect(
    () => getDistrictById(id),
    (response) => setDistrict(response.data)
  )

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  function placeholder(type) {
    if (district) {
      if (type === 'Nome:') return district.name
      if (type === 'Cidade:') return district.city
    }
  }

  const [edit, setEdit] = useState(false)
  const [modal, setModal] = useState(false)

  const onCancel = () => {
    setModal(false)
  }

  const changeStatus = () => {
    const status = district.enabled
    request(
      () => setDistrictById(id, { enabled: !status }),
      () => attDistrict(),
      () => alert('error')
    )
    setModal(false)
  }

  const submit = (data) => {
    console.log(data)
    if (!data.city) delete data.city
    if (!data.name) delete data.name
    request(
      () => setDistrictById(id, data),
      () => attDistrict(),
      () => alert('error')
    )

    setEdit(false)
  }

  return (
    <NCard
      title={district.name}
      modal={modal}
      onCancel={() => onCancel()}
      onConfirm={() => changeStatus()}
      content={
        <Container onSubmit={handleSubmit((data) => submit(data))}>
          {Object.entries(fields).map(([key, value], i) => (
            <div key={i}>
              <p>{value.label}</p>
              <NInput
                disabled={!edit}
                key={i}
                placeholder={placeholder(value.label)}
                error={formState.errors[key]?.message}
                {...value}
                {...register(key)}
              />
            </div>
          ))}

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

            {district.enabled && (
              <NButton
                type="button"
                color="red"
                label="Desativar"
                onClick={() => setModal(true)}
              />
            )}
            {!district.enabled && (
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

export default NCardDistrict
