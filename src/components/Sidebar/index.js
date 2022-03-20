import React, { useState } from 'react'

import { FaBars, FaAddressCard } from 'react-icons/fa'
import {
  // AiOutlineQuestionCircle,
  // AiOutlineUser,
  AiOutlineImport,
  // AiOutlineCheckCircle,
  // AiFillCar,
  // AiOutlineInfoCircle,
  AiOutlineSetting,
} from 'react-icons/ai'
// import { BiTimeFive } from 'react-icons/bi'
// import { ImCancelCircle } from 'react-icons/im'
import {
  // FiUsers,

  FiMapPin,
} from 'react-icons/fi'
import { CgArrowsExchange } from 'react-icons/cg'
// import { MdAddRoad } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'

import { useOutsideClick } from '~/hooks'

import { Container, Sidbar, Sombra, ContainerTop, SidebarItem } from './styles'
import NSidebarItem from '../NSidebarItem'

const Sidebar = () => {
  const [close, setClose] = useState(false)
  // const [viagens, setViagens] = useState(false)
  const [config, setConfig] = useState(false)
  const sidebar = useOutsideClick(() => setClose(false))
  // const viagensClose = useOutsideClick(() => setViagens(false))
  const configClose = useOutsideClick(() => setConfig(false))

  return (
    <Container>
      <ContainerTop>
        <FaBars size={24} onClick={() => setClose(true)} className="icon_sid" />

        <input className="title" defaultValue="Weptek" />
        <BsPencil className="icon" size={15} />
      </ContainerTop>
      <Sombra close={close} />
      <Sidbar ref={sidebar} close={close}>
        <div className="title_div">
          <input className="title" defaultValue="Weptek" />
          <BsPencil className="icon" size={15} />
        </div>

        {/* <NSidebarItem
          label="Principal"
          icon={<AiOutlineInfoCircle className="icon" />}
          route="/"
        />
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
        /> */}
        {/* <SidebarItem ref={viagensClose} close={viagens}>
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
        </SidebarItem> */}

        {/* <NSidebarItem
          label="Passageiros"
          icon={<FiUsers className="icon" />}
          route="/"
        /> */}
        <NSidebarItem
          label="Motoristas"
          icon={<FaAddressCard className="icon" />}
          route="/"
        />

        <NSidebarItem
          label="Configurações"
          arrow
          arrowBottom={config}
          icon={<AiOutlineSetting className="icon" />}
          onClick={() => setConfig(!config)}
        />
        <SidebarItem ref={configClose} close={config}>
          <NSidebarItem
            label="Rotas"
            icon={<CgArrowsExchange className="icon" />}
            route="/rotas"
          />
          <NSidebarItem
            label="Bairros"
            icon={<FiMapPin className="icon" />}
            route="/bairros"
          />
          {/* <NSidebarItem
            label="Endereços"
            icon={<MdAddRoad className="icon" />}
            route="/perfil"
          /> */}
        </SidebarItem>
        {/*
        <NSidebarItem
          label="Suporte"
          icon={<AiOutlineQuestionCircle className="icon" />}
          route="/"
        /> */}

        <NSidebarItem
          label="Sair"
          icon={<AiOutlineImport className="icon" />}
        />
      </Sidbar>
    </Container>
  )
}

export default Sidebar
