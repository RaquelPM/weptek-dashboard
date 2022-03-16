import React, { useState } from 'react'

import useOutsideClick from '~/hooks/useOutsideClick.js'

import { Container, Top, Content } from './styles.js'

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const NCard = ({ title = 'Gabriel Luciano Silva', titleSize, content }) => {
  const [open, setOpen] = useState(false)
  const cardClose = useOutsideClick(() => setOpen(false))

  return (
    <Container titleSize={titleSize} ref={cardClose} open={open}>
      <Top>
        {!open && (
          <AiOutlinePlusCircle
            onClick={() => setOpen(!open)}
            size="20px"
            className="icon"
          />
        )}
        {open && (
          <AiOutlineMinusCircle
            onClick={() => setOpen(!open)}
            size="20px"
            className="icon"
          />
        )}
        <p>{title}</p>
      </Top>
      <Content>{content}</Content>
    </Container>
  )
}

export default NCard
