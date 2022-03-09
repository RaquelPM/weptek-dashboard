import React from 'react'

import { AiFillCar } from 'react-icons/ai'
import { BiDollar } from 'react-icons/bi'
import { FaAddressCard } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'

import { Container, ContainerCards, ContainerTax } from './styles'
import { PageBase, NInfoCard, NTableCard } from '~/components'

const Principal = () => (
  <PageBase
    content={
      <Container>
        <ContainerCards>
          <NInfoCard
            title="Faturamento"
            icon={<BiDollar size={25} />}
            info="R$62.500,00"
          />
          <NInfoCard icon={<AiFillCar size={25} />} />
          <NInfoCard
            info="100"
            title="Motoristas"
            icon={<FaAddressCard size={25} />}
          />
          <NInfoCard
            info="1000"
            title="Passageiros"
            icon={<FiUsers size={25} />}
          />
        </ContainerCards>
        <ContainerTax>
          <div className="input">
            <p>Taxa Weptek:</p>
            <p>10%</p>
          </div>

          <div className="border" />
          <div className="input">
            <p>Sua taxa:</p>
            <div>
              <input value="20%" />
              <BsPencil size={15} />
            </div>
          </div>
          <div className="border" />

          <div className="input">
            <p>Taxa Weptek:</p>
            <p>10%</p>
          </div>
        </ContainerTax>
        <NTableCard />
      </Container>
    }
  />
)

export default Principal
