import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput, NCard } from '~/components'

import { Container } from './styles'
import { fields, schema } from './props'

const NCardDistrict = ({ name = 'Honório Bicalho' }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const [edit, setEdit] = useState(false)
  const [status] = useState(false)
  const [modal, setModal] = useState(false)

  const onCancel = () => {
    //
    setModal(false)
    // setStatus(!status)
  }

  return (
    <NCard
      title={name}
      modal={modal}
      onCancel={() => onCancel()}
      content={
        <Container
          onSubmit={handleSubmit((data) => {
            console.log(data)
            setEdit(false)
          })}
        >
          {Object.entries(fields).map(([key, value], i) => (
            <div key={i}>
              <p>{value.label}</p>
              <NInput
                disabled={!edit}
                key={i}
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

            {status && (
              <NButton
                type="button"
                color="red"
                label="Desativar"
                onClick={() => setModal(false)}
              />
            )}
            {!status && (
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
