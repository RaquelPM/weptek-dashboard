import React, { useState } from 'react'
import {
  PageBase,
  NSearch,
  NButton,
  NCardDistrict,
  NModalAddDistrict,
} from '~/components'
import { useApi, useApiEffect } from '~/hooks'
import { createDistricts, getDistricts } from '~/services/districts'

import { Container } from './styles'

const ConfigDistricts = () => {
  const [districts, setDistricts] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState({})
  const { request } = useApi()

  useApiEffect(
    () => getDistricts(1),
    (response) => attData(response.data),
    (response) => console.log(response)
  )

  const attData = (data) => {
    setDistricts(data.content)

    setPages(data.pages)

    setSearch('')
  }

  const attDistricts = () => {
    request(
      () => getDistricts(pages.current),
      (response) => attData(response.data),
      () => alert('errorAtt')
    )
  }

  const changePage = (pageNumber) => {
    request(
      () => getDistricts(pageNumber),
      (response) => attData(response.data)
    )
  }

  const createDistrict = (data) => {
    request(
      () => createDistricts(data),
      (response) => attDistricts(),
      () => alert('error')
    )

    setModal(false)
  }

  const districtsCards = districts.map((district, i) => {
    const regex = new RegExp(search, 'gi')

    return (
      district.name.match(regex) && (
        <NCardDistrict key={`${pages.current}.${i}`} id={district.id} />
      )
    )
  })

  return (
    <PageBase
      title="Configurações => Bairros"
      content={
        <Container>
          <div className="div_top">
            <NSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise pelo nome.."
            />
            <NButton
              color="green"
              label="Adicionar Bairro"
              onClick={() => setModal(true)}
            />
          </div>
          <NModalAddDistrict
            visible={modal}
            onClose={() => setModal(false)}
            label="Adicione um bairro"
            save={(data) => {
              createDistrict(data)
            }}
          />

          {districtsCards}

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
    />
  )
}

export default ConfigDistricts
