import React from 'react'

import { Container } from './styles'

const NButton = ({ label, color, ...rest }) => (
  <Container {...rest} color={color}>
    <p className="label">{label}</p>
  </Container>
)

export default NButton
