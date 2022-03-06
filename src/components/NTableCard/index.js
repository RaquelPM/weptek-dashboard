import React from 'react'

import { Container, ContentItem, Top, LabelItem, Scroll } from './styles'
import { FaAddressCard } from 'react-icons/fa'
import { BiCheck, BiDollar, BiUser } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'

const NCardInfo = () => (
  <Container>
    <Top>
      <div className="div_name">
        <FaAddressCard size={22} className="icon" />
        <p>Motoristas</p>
      </div>
      <div className="div_name">
        <BiDollar size={22} className="icon" />
        <p>Faturamento</p>
      </div>
      <div className="div_name">
        <BiCheck size={22} className="icon" />
        <p>Viagens finalizadas</p>
      </div>
      <div className="div_name">
        <ImCancelCircle size={22} className="icon" />
        <p>Viagens canceladas</p>
      </div>
    </Top>
    <Scroll>
      <ContentItem>
        <div className="item">
          <BiUser size={22} className="icon" />
          <p className="label">Carlos Andrade</p>
        </div>

        <p className="item">R$ 200,00</p>
        <p className="item">10</p>
        <p className="item">10</p>
      </ContentItem>
      <LabelItem>
        <div className="info">
          <BiUser size={22} className="icon" />
          <p>Carlos Andrade - R$300,00 - 10 - 10</p>
        </div>

        <div className="border" />
      </LabelItem>
    </Scroll>
  </Container>
)

export default NCardInfo
