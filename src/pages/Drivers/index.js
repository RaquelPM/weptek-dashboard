import React from 'react'

import { PageBase, NCardDriver, NSearch, NButton } from '~/components'
import { Container } from './styles'

const Drivers = () => (
  <PageBase
    title="Motoristas"
    content={
      <Container>
        <div className="div_top">
          <NSearch />
          <NButton label="CVS" />
        </div>

        <NCardDriver />
      </Container>
    }
  ></PageBase>
)

export default Drivers
