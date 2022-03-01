import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineImport,
  AiOutlineCheckCircle,
  AiFillCar,
} from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'

import { useOutsideClick } from '../../hooks'

import { Container, Sidbar, Sombra, ContainerTop, SidebarItem } from './styles'
import NSidebarItem from '../NSidebarItem'

const Sidebar = () => {
  const [close, setClose] = useState(false)
  const [viagens, setViagens] = useState(false)
  const sidebar = useOutsideClick(() => setClose(false))
  const viagensClose = useOutsideClick(() => setViagens(false))

  return (
    <Container>
      <ContainerTop>
        <FaBars size={24} onClick={() => setClose(true)} className="icon_sid" />
        <p className="title">Weptek</p>
      </ContainerTop>
      <Sombra close={close} />
      <Sidbar ref={sidebar} close={close}>
        <NSidebarItem
          label="Perfil"
          icon={<AiOutlineUser className="icon" />}
          route="/perfil"
        />
        <NSidebarItem
          label="Viagens"
          arrow
          arrowBottom={viagens}
          icon={<AiFillCar className="icon" />}
          onClick={() => setViagens(!viagens)}
        />
        <SidebarItem ref={viagensClose} close={viagens}>
          <NSidebarItem
            label="Em andamento"
            icon={<BiTimeFive className="icon" />}
            route="/perfil"
          />
          <NSidebarItem
            label="Finalizadas"
            icon={<AiOutlineCheckCircle className="icon" />}
            route="/perfil"
          />
          <NSidebarItem
            label="Canceladas"
            icon={<ImCancelCircle className="icon" />}
            route="/perfil"
          />
        </SidebarItem>

        <NSidebarItem
          label="Suporte"
          icon={<AiOutlineQuestionCircle className="icon" />}
          route="/"
        />

        <NSidebarItem
          label="Sair"
          icon={<AiOutlineImport className="icon" />}
        />
      </Sidbar>
    </Container>
  )
}

export default Sidebar
