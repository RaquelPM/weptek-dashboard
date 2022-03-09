import React from 'react'

import { NButton } from '../../../../components'

import { Container } from './styles'

const Form = () => (
  <Container>
    <input className="input" placeholder="Email" type="email" />
    <input className="input" placeholder="Senha" type="password" />
    <NButton className="button" label="Entrar" outline />
  </Container>
)

export default Form
