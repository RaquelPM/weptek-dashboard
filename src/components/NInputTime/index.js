import React, { forwardRef } from 'react'

import { Container } from './styles'

const NInputTime = ({ error, light, width, ...rest }, ref) => {
  return (
    <Container error={error} light={light}>
      <input
        type="time"
        placeholder="__:__"
        {...rest}
        ref={ref}
        className="input"
      />
      <p>{error}</p>
    </Container>
  )
}

export default forwardRef(NInputTime)
