import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput, NCard, NPicture } from '~/components'

import { Container } from './styles'
import { fields, schema } from './props'

const NCardDriver = ({ name = 'Adisson Tejo da Costa' }) => {
  const { register, handleSubmit, formState, control } = useForm({
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
          {Object.entries(fields).map(([key, value]) => (
            <div>
              <p>{value.label}</p>
              <NInput
                disabled={!edit}
                key={key}
                error={formState.errors[key]?.message}
                {...value}
                {...register(key)}
              />
            </div>
          ))}

          <p className="label">Insira a foto da placa do seu veículo:</p>
          <Controller
            control={control}
            name="placa"
            render={({ field }) => (
              <NPicture id="placa" square {...field} disabled={!edit} />
            )}
            rules={{ required: true }}
          />

          <p className="label">Insira a foto da sua cnh:</p>
          <Controller
            control={control}
            name="cnh"
            render={({ field }) => (
              <NPicture id="cnh" square {...field} disabled={!edit} />
            )}
            rules={{ required: true }}
          />

          <p className="label">Insira a foto da sua identidade:</p>
          <Controller
            control={control}
            name="identidade"
            render={({ field }) => (
              <NPicture id="identidade" square {...field} disabled={!edit} />
            )}
            rules={{ required: true }}
          />

          <p className="label">Insira a foto da sua crv:</p>
          <Controller
            control={control}
            name="crv"
            render={({ field }) => (
              <NPicture id="crv" square {...field} disabled={!edit} />
            )}
            rules={{ required: true }}
          />

          <p className="label">Insira a foto da sua crlv:</p>
          <Controller
            control={control}
            name="crlv"
            render={({ field }) => (
              <NPicture id="crlv" square {...field} disabled={!edit} />
            )}
            rules={{ required: true }}
          />

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
                onClick={() => setModal(true)}
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

export default NCardDriver
