import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NButton, NInput } from '~/components'
import { useApi } from '~/hooks'
import { getRegister, setRegister } from '~/repositories/register'
import { verifyLicensedRegister } from '~/services/licenseds'

import { Container } from './styles'
import { fields, schema } from './props'

const Form = () => {
  const save = getRegister()

  const navigate = useNavigate()
  const { request } = useApi()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = (data) => {
    data.phone = data.phone.replace(/\D/g, '')
    data.cpf = data.cpf.replace(/\D/g, '')

    delete data.passwordMatch

    const { password, ...saveData } = data

    setRegister({ ...(save || {}), licensed: saveData })

    request(
      () => verifyLicensedRegister(data),
      () => navigate('/cadastro/app', { state: { licensed: data } }),
      (response) => console.log(response)
    )
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(fields).map(([key, value]) => (
        <NInput
          key={key}
          error={formState.errors[key]?.message}
          defaultValue={save?.licensed?.[key]}
          {...value}
          {...register(key)}
        />
      ))}
      <p className="terms">
        Ao clicar em CADASTRAR você concorda com os{' '}
        <a href="/">TERMOS DE USO</a> e <a href="/">POLÍTICA DE PRIVACIDADE</a>.
      </p>
      <NButton type="submit" label="Cadastrar" />
    </Container>
  )
}

export default Form
