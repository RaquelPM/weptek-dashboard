import React, { forwardRef, useState } from 'react'

import { BsFillImageFill } from 'react-icons/bs'

import { Container } from './styles'

const NPicture = forwardRef(
  ({ square, onChange = () => null, id, imgDefault, disabled }, ref) => {
    const [image, setImage] = useState('')
    return (
      <Container disabled={disabled} square={square}>
        <input
          id={id}
          name={id}
          disabled={disabled}
          type="file"
          accept=".jpg,.jpge"
          ref={ref}
          onChange={(e) => {
            onChange(e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
          }}
          className="input_image"
        />
        <BsFillImageFill size={42} className="icon" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={id} className="label_in" />
        <p className="label">Trocar foto</p>

        {(image || imgDefault) && (
          <img
            src={image || imgDefault}
            alt="imagePerfil"
            className="image_perfil"
          />
        )}
      </Container>
    )
  }
)

export default NPicture
