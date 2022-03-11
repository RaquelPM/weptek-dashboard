import React, { useState } from 'react'

import { Container, Top, Content } from './styles.js'

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const NCard = ({ title = 'Gabriel Luciano Silva', content }) => {
  const [open, setOpen] = useState(false)
  return (
    <Container onClick={() => setOpen(!open)} open={open}>
      <Top>
        {!open && <AiOutlinePlusCircle size="20px" className="icon" />}
        {open && <AiOutlineMinusCircle size="20px" className="icon" />}
        <p>{title}</p>
      </Top>
      <Content>{content}</Content>
    </Container>
  )
}

export default NCard
