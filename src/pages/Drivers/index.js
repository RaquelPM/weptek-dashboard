import React, { useState, useEffect } from 'react'

import { PageBase, NCardDriver, NSearch, NButton } from '~/components'
import { useApiEffect } from '~/hooks'
import { getDrivers } from '~/services/drivers'
import { Container } from './styles'

const Drivers = () => {
  const [drivers, setDrivers] = useState([])
  const [driverList, setDriversList] = useState([])
  const [search, setSearch] = useState('')

  useApiEffect(getDrivers, (response) => {
    setDrivers(response.data.content)
    setSearch(' ')
  })

  useEffect(() => {
    const regex = new RegExp(search, 'gi')
    if (search) {
      const preDrivers = drivers.filter((driver) => driver.name.match(regex))

      setDriversList(preDrivers)
    } else {
      setDriversList(drivers)
    }
  }, [search, drivers])

  const driversList = driverList.map((driver, i) => (
    <NCardDriver key={i} id={driver.id} />
  ))

  return (
    <PageBase
      title="Motoristas"
      content={
        <Container>
          <div className="div_top">
            <NSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise pelo nome.."
            />
            <NButton label="CVS" />
          </div>
          {driversList}
        </Container>
      }
    ></PageBase>
  )
}

export default Drivers
