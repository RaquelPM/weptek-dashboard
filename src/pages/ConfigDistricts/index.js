import React from 'react'
import { PageBase, NSearch, NButton, NCardDistrict } from '~/components'

import { Container } from './styles'

const ConfigDistricts = () => (
  <PageBase
    title="Configurações => Bairros"
    content={
      <Container>
        <div className="div_top">
          <NSearch />
          <NButton color="green" label="Adicionar Bairro" />
        </div>
        <NCardDistrict />
      </Container>
    }
  />
)

export default ConfigDistricts
