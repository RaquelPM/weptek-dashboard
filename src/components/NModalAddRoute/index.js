import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useApiEffect } from '~/hooks'
import { getDistricts } from '~/services/districts'

import NButton from '../NButton'
import NInput from '../NInput'
import NInputTime from '../NInputTime'
import NSelector from '../NSelector'

import { Container, Form } from './styles'

const NModalAddDistrict = ({ save, label, ...rest }) => {
  const { register, handleSubmit, watch } = useForm()
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

  const submit = () => {
    let cost = watch('cost')
    let time = watch('time')
    time = `00:${time}`
    cost = Number(Number(cost).toFixed(2))
    if (!cost) alert('Coloque um preço valido')

    if (!district1.id || !district2.id) alert('Preencha todos os campos!')

    if (district1.id && district2.id && cost)
      save({
        boardingDistrictId: district1.id,
        landingDistrictId: district2.id,
        cost: cost,
        duration: time,
      })
  }

  return (
    <Container {...rest}>
      <p className="title">{label}</p>
      <Form onSubmit={handleSubmit(submit)}>
        <NSelector
          label="Embarque:"
          value={district1.name}
          options={optionsList}
          placeholder="Bairro 1"
          onChange={(data) => setDistrict1(data)}
        />
        <NSelector
          label="Desembarque:"
          value={district2.name}
          options={optionsList}
          placeholder="Bairro 2"
          onChange={(data) => setDistrict2(data)}
        />
        <div className="div_input">
          <NInput
            width="100%"
            placeholder="R$:"
            className="input"
            {...register('cost', { required: true })}
          />
          <div className="div_input_time">
            <NInputTime {...register('time', { required: true })} />
            <p>Tempo em min</p>
          </div>
        </div>

        <NButton
          color="green"
          className="button"
          label="Confirmar"
          type="submit"
        />
      </Form>
      {/* <p className="helper">Escreva um ponto de referencia, número etc.</p> */}
    </Container>
  )
}

export default NModalAddDistrict
