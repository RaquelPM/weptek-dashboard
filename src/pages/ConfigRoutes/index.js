import React, { useState } from 'react'

import { PageBase, NCardRoutes, NSearch, NButton } from '~/components'
import { useApiEffect } from '~/hooks'
import { getRoutes } from '~/services/routes'
import { Container } from './styles'

const Drivers = () => {
  const [routes, setRoutes] = useState([])

  useApiEffect(getRoutes, (response) => {
    setRoutes(response.data)
    console.log(response.data)
  })
  return (
    <PageBase
      title="Configurações => Rotas"
      content={
        <Container>
          <div className="div_top">
            <NSearch />
            <NButton color="green" label="Adicionar Rota" />
          </div>

          <NCardRoutes />
          <NCardRoutes />
          <NCardRoutes />
        </Container>
      }
    ></PageBase>
  )
}

export default Drivers
