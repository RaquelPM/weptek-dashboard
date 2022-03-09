import React from 'react'

import { Container } from './styles'

const NButton = ({ label, ...rest }) => (
  <Container {...rest}>
    <p className="label">{label}</p>
  </Container>
)

export default NButton
