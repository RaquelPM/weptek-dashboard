import React from 'react'

import { PageBase, NCardRoutes, NSearch, NButton } from '~/components'
import { Container } from './styles'

const Drivers = () => (
  <PageBase
    title="Configurações => Rotas"
    content={
      <Container>
        <div className="div_top">
          <NSearch />
          <NButton color="green" label="Adicionar Rota" />
        </div>

        <NCardRoutes />
      </Container>
    }
  ></PageBase>
)

export default Drivers
