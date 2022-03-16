import React, { useState } from 'react'
import { Container } from './styles'

import { NCard, NSelector, NInput, NInputTime, NButton } from '~/components'

import { CgArrowsExchangeAlt } from 'react-icons/cg'

const NCardRoutes = () => {
  const [time, setTime] = useState()
  const [edit, setEdit] = useState(false)
  const [status, setStatus] = useState(false)
  return (
    <NCard
      title="Rota 1 - NOME DO BAIRRO 1 - NOME DO BAIRRO 2"
      titleSize={56}
      content={
        <Container>
          <div className="div_infos">
            <NSelector
              label="Bairro 1"
              value="Tanda"
              disabled={!edit}
              onChange={(data) => console.log(data)}
            />
            <CgArrowsExchangeAlt size={50} className="icon" />
            <NSelector disabled={!edit} label="Bairro 2" value="Tanda" />
          </div>
          <div className="div_infos">
            <div className="input_div">
              <p>Preço</p>
              <NInput disabled={!edit} value="R$:" className="input" />
            </div>
            <div className="div_time">
              <p>Tempo estimado de viagem:</p>
              <div className="input_time_div">
                <NInputTime
                  disabled={!edit}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <p>{time}min</p>
              </div>
            </div>
          </div>
          <div className="btns">
            {!edit && (
              <NButton
                type="button"
                color="gray"
                label="Editar"
                onClick={() => setEdit(true)}
              />
            )}
            {edit && (
              <NButton
                type="submit"
                color="green"
                label="Salvar"
                onClick={() => setEdit(false)}
              />
            )}

            {status && (
              <NButton
                type="button"
                color="red"
                label="Desativar"
                onClick={() => setStatus(false)}
              />
            )}
            {!status && (
              <NButton
                type="button"
                color="green"
                label="Ativar"
                onClick={() => setStatus(true)}
              />
            )}
          </div>
        </Container>
      }
    ></NCard>
  )
}

export default NCardRoutes
