import React from 'react'

import { NButton, NInput } from '~/components'

import { Container } from './styles'

const Form = () => (
  <Container>
    <NInput light placeholder="Email" type="email" />
    <NInput light placeholder="Senha" type="password" />
    <NButton className="button" label="Entrar" outline />
  </Container>
)

export default Form
