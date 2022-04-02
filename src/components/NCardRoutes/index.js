import React, { useState } from 'react'
import { Container } from './styles'

import { useForm } from 'react-hook-form'

import { NCard, NSelector, NInput, NInputTime, NButton } from '~/components'

import { CgArrowsExchangeAlt } from 'react-icons/cg'
import { useApi, useApiEffect } from '~/hooks'
import { getRouteById, setRouteById } from '~/services/routes'
import { getDistricts } from '~/services/districts'

const NCardRoutes = ({ id }) => {
  const { register, handleSubmit, watch } = useForm()

  const [edit, setEdit] = useState(false)
  const [modal, setModal] = useState(false)
  const [route, setRoute] = useState()
  const [district1, setDistrict1] = useState({ name: '' })
  const [district2, setDistrict2] = useState({ name: '' })
  const [districts, setDistricts] = useState([])

  useApiEffect(getDistricts, (response) => {
    setDistricts(response.data.content)
  })

  const optionsList = districts.filter((district) =>
    district.id !== district1.id && district.id !== district2.id
      ? { name: district.name, value: district.id }
      : null
  )

  const { request } = useApi()

  useApiEffect(
    () => getRouteById(id),
    (response) => attData(response.data)
  )

  const attRoute = () => {
    request(
      () => getRouteById(id),
      (response) => attData(response.data)
    )
  }

  const attData = (data) => {
    setRoute(data)
    setDistrict1(data.boardingDistrict)
    setDistrict2(data.landingDistrict)
  }

  const changeStatus = () => {
    console.log('a')
    const status = route.enabled
    request(
      () => setRouteById(id, { enabled: !status }),
      () => attRoute(),
      () => alert('error')
    )
    setModal(false)
  }

  const onCancel = () => {
    setModal(false)
  }

  const change = () => {
    const oldDistrict1 = district1
    const oldDistrict2 = district2

    setDistrict1(oldDistrict2)
    setDistrict2(oldDistrict1)
  }

  const submit = () => {
    let cost = watch('cost')
    const time = watch('time')
    cost = Number(Number(cost).toFixed(2))

    let data = {
      boardingDistrictId: district1.id,
      landingDistrictId: district2.id,
      duration: time ? `00:${time}` : route.duration,
    }
    if (cost) data = { ...data, cost: cost }

    request(
      () => setRouteById(id, data),
      () => attRoute(),
      () => alert('error')
    )

    console.log(data)
    setEdit(false)
  }

  return (
    <NCard
      modal={modal}
      onCancel={() => onCancel()}
      title={`Rota ${route ? route.boardingDistrict.name : ''} - ${
        route ? route.landingDistrict.name : ''
      }`}
      onConfirm={() => changeStatus()}
      titleSize={56}
      content={
        <Container onSubmit={handleSubmit(submit)}>
          {route && route.landingDistrict && route.boardingDistrict && (
            <div className="div_infos">
              <NSelector
                label="Embarque:"
                disabled={!edit}
                options={optionsList}
                value={district1.name}
                onChange={(data) => setDistrict1(data)}
              />
              <CgArrowsExchangeAlt
                size={50}
                className="icon"
                onClick={() => change()}
              />
              <NSelector
                disabled={!edit}
                label="Desembarque:"
                options={optionsList}
                value={district2.name}
                onChange={(data) => setDistrict2(data)}
              />
            </div>
          )}
          {route && (
            <div className="div_infos">
              <div className="input_div">
                <p>Preço</p>
                <NInput
                  disabled={!edit}
                  placeholder={route.cost}
                  className="input"
                  {...register('cost')}
                />
              </div>
              <div className="div_time">
                <p>Tempo estimado de viagem:</p>
                <div className="input_time_div">
                  <NInputTime disabled={!edit} {...register('time')} />
                  <p>{route.duration.slice(3, 9)}min</p>
                </div>
              </div>
            </div>
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

            {route && route.enabled && (
              <NButton
                type="button"
                color="red"
                label="Desativar"
                onClick={() => setModal(true)}
              />
            )}
            {route && !route.enabled && (
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
    ></NCard>
  )
}

export default NCardRoutes
