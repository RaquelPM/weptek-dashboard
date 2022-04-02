import React, { useEffect, useState } from 'react'
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
  const [districtsList, setDistrictsList] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState([])
  const [page, setPage] = useState(1)

  const { request } = useApi()

  useApiEffect(
    () => getDistricts(page),
    (response) => attData(response.data)
  )

  const attData = (data) => {
    setDistricts(data.content)

    setPages(data.pages)

    setSearch('')
  }

  const attDistricts = () => {
    request(
      () => getDistricts(0),
      (response) => attData(response.data),
      () => alert('errorAtt')
    )
  }

  const changePage = (pageNumber) => {
    setPage(pageNumber)
    request(
      () => getDistricts(pageNumber),
      (response) => attData(response.data)
    )
  }

  const createDistrict = (data) => {
    request(
      () => createDistricts(data),
      () => attDistricts(),
      () => alert('error')
    )

    setModal(false)
  }

  useEffect(() => {
    const regex = new RegExp(search, 'gi')
    if (search) {
      const preDistricts = districts.filter((district) =>
        district.name.match(regex)
      )

      setDistrictsList(preDistricts)
    } else {
      setDistrictsList(districts)
    }
  }, [search, districts])

  const districtsCards = districtsList.map((district, i) => (
    <NCardDistrict key={i} id={district.id} />
  ))

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
              console.log(data)
            }}
          />
          {districtsCards}

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
    />
  )
}

export default ConfigDistricts
