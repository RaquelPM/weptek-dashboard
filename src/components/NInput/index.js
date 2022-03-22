import React, { forwardRef } from 'react'
import InputMask from 'react-input-mask'

import { Container } from './styles'

const NInput = ({ error, errorOutline, light, width, mask, ...rest }, ref) => {
  return (
    <Container
      width={width}
      error={error}
      errorOutline={errorOutline}
      light={light}
    >
      {mask ? (
        <InputMask {...rest} mask={mask} className="input" ref={ref} />
      ) : (
        <input {...rest} className="input" ref={ref} />
      )}
      <p className="error">{error}</p>
    </Container>
  )
}

export default forwardRef(NInput)
