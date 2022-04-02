import React, { useState } from 'react'

import {
  PageBase,
  NCardRoutes,
  NSearch,
  NButton,
  NModalAddRoute,
} from '~/components'
import { useApi, useApiEffect } from '~/hooks'
import { createRoute, getRoutes } from '~/services/routes'
import { Container } from './styles'

const Drivers = () => {
  const [routes, setRoutes] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState({})

  const { request } = useApi()

  useApiEffect(
    () => getRoutes(1),
    (response) => attData(response.data)
  )

  const attData = (data) => {
    setRoutes(data.content)

    setPages(data.pages)

    setSearch('')
  }

  const changePage = (pageNumber) => {
    request(
      () => getRoutes(pageNumber),
      (response) => attData(response.data)
    )
  }

  const attRoutes = () => {
    request(
      () => getRoutes(pages.current),
      (response) => setRoutes(response.data.content),
      (response) => console.log(response.data)
    )
  }

  const onSave = (data) => {
    request(
      () => createRoute(data),
      () => attRoutes(),
      (response) => console.log(response.data)
    )

    setModal(false)
  }

  const routesCards = routes.map((route, i) => {
    const regex = new RegExp(search, 'gi')

    return (
      route.boardingDistrict.name.match(regex) && (
        <NCardRoutes key={`${pages.current}.${i}`} id={route.id} />
      )
    )
  })

  return (
    <PageBase
      title="Configurações => Rotas"
      content={
        <Container>
          <div className="div_top">
            <NSearch
              value={search}
              placeholder="Pesquise pelo embarque..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <NButton
              color="green"
              label="Adicionar Rota"
              onClick={() => setModal(true)}
            />
          </div>
          <NModalAddRoute
            visible={modal}
            onClose={() => setModal(false)}
            label="Adicione uma rota"
            save={(data) => {
              onSave(data)
            }}
          />

          {routesCards}

          {pages && pages.total > 1 && (
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
