import React, { useState, useEffect } from 'react'

import { PageBase, NCardDriver, NSearch } from '~/components'
import { useApi, useApiEffect } from '~/hooks'
import { getDrivers } from '~/services/drivers'
import { Container } from './styles'

const Drivers = () => {
  const [drivers, setDrivers] = useState([])
  const [driverList, setDriversList] = useState([])
  const [pages, setPages] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { request } = useApi()

  const attData = (data) => {
    setDrivers(data.content)

    setPages(data.pages)

    setSearch('')
  }

  useApiEffect(
    () => getDrivers(page),
    (response) => attData(response.data)
  )

  const changePage = (pageNumber) => {
    setPage(pageNumber)
    request(
      () => getDrivers(pageNumber),
      (response) => attData(response.data)
    )
  }

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
            {/* <NButton label="CVS" /> */}
          </div>
          {driversList}

          {pages && pages.total > 1 && (
            <div className="div_next">
              {pages.current > 1 && (
                <button
                  onClick={() => changePage(page - 1)}
                  type="button"
                  className="advanced"
                >
                  {`<`}
                </button>
              )}
              {pages.current < pages.total && (
                <button
                  onClick={() => changePage(page + 1)}
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
