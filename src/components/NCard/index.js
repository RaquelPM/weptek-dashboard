import React, { useState } from 'react'

import useOutsideClick from '~/hooks/useOutsideClick.js'
import { NModalSure } from '~/components'

import { Container, Top, Content } from './styles.js'

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const NCard = ({
  title = 'Gabriel Luciano Silva',
  titleSize,
  content,
  modal,
  onCancel,
  onConfirm,
}) => {
  const [open, setOpen] = useState(false)

  const cardClose = useOutsideClick(() => setOpen(false))

  return (
    <Container titleSize={titleSize} ref={cardClose} open={open}>
      <NModalSure
        visible={modal}
        label="Você tem certeza?"
        onCancel={() => onCancel()}
        confirmLabel="Sim, confimar"
        cancelLabel="Não, cancelar"
        onConfirm={() => onConfirm()}
        onClose={() => onCancel()}
      />
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
