import React from 'react'

import { NButton, NInput } from '~/components'

import { Container } from './styles'
import { fields } from './props'

const Form = () => (
  <Container>
    {Object.entries(fields).map(([key, item]) => (
      <NInput key={key} {...item} />
    ))}
    <p className="terms">
      Ao clicar em CADASTRAR você concorda com os <a href="/">TERMOS DE USO</a>{' '}
      e <a href="/">POLÍTICA DE PRIVACIDADE</a>.
    </p>
    <NButton type="submit" label="Cadastrar" />
  </Container>
)

export default Form
