import React from 'react'

import { Container } from './styles'
import NButton from '../NButton'

const NModalSure = ({
  label = '',
  confirmLabel = 'Sim, Confirmar',
  cancelLabel = 'Não, Cancelar',
  visible,
  onConfirm = () => null,
  onCancel = () => null,
  onClose = () => null,
  ...rest
}) => (
  <Container visible={visible} {...rest} onClose={onClose}>
    <p className="label">{label}</p>

    <NButton
      className="confirm-button"
      color="red"
      onClick={onConfirm}
      label={confirmLabel}
    />
    <NButton
      className="confirm-button"
      color="gray"
      onClick={onCancel}
      label={cancelLabel}
    />
  </Container>
)

export default NModalSure
