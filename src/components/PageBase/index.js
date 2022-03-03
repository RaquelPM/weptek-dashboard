import React from 'react'

import { Container, Title, Content } from './styles'
import Sidebar from '../Sidebar'

const PageBase = ({ title = 'Principal', content }) => (
  <Container>
    <Sidebar />
    <Title>
      <p className="title">{title}</p>
    </Title>
    <Content>{content}</Content>
  </Container>
)

export default PageBase
