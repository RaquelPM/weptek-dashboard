import React, { useState } from 'react'

import { PageBase, NCardDriver, NSearch } from '~/components'
import { useApi, useApiEffect } from '~/hooks'
import { getDrivers, getDriversNoLimit } from '~/services/drivers'
import { Container } from './styles'

const Drivers = () => {
  const [drivers, setDrivers] = useState([])
  const [driversList, setDriversList] = useState([])
  const [pages, setPages] = useState([])
  const [search, setSearch] = useState('')

  const { request } = useApi()

  const attData = (data) => {
    setDrivers(data.content)

    setPages(data.pages)

    setSearch('')
  }

  useApiEffect(
    () => getDrivers(1),
    (response) => attData(response.data)
  )

  useApiEffect(getDriversNoLimit, (response) =>
    setDriversList(response.data.content)
  )

  const changePage = (pageNumber) => {
    request(
      () => getDrivers(pageNumber),
      (response) => attData(response.data)
    )
  }

  const driversCards = drivers.map((driver, i) => (
    <NCardDriver key={`${pages.current}.${i}`} id={driver.id} />
  ))

  const driversListCards = driversList.map((driver, i) => {
    const regex = new RegExp(search, 'gi')

    return (
      driver.name.match(regex) && (
        <NCardDriver key={`${pages.current}.${i}`} id={driver.id} />
      )
    )
  })

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
            {/* <NButton label="CVS" /> */}
          </div>
          {!search && driversCards}
          {search && driversListCards}

          {pages && pages.total > 1 && !search && (
            <div className="div_next">
              {pages.current > 1 && (
                <button
                  onClick={() => changePage(pages.current - 1)}
                  type="button"
                  className="advanced"
                >
                  {`<`}
                </button>
              )}
              {pages.current < pages.total && (
                <button
                  onClick={() => changePage(pages.current + 1)}
                  type="button"
                  className="advanced"
                >
                  &gt;
                </button>
              )}
            </div>
          )}
        </Container>
      }
    ></PageBase>
  )
}

export default Drivers
