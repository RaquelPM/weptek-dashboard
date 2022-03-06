import React from 'react'

import { Container, Top } from './styles'

const NCardInfo = ({
  title = 'Viagens finalizadas',
  icon,
  info = '40.000',
}) => (
  <Container>
    <Top>
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
      <div className="border" />
    </Top>
    <p className="info">{info}</p>
  </Container>
)

export default NCardInfo
