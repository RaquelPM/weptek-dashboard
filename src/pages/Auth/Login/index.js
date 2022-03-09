import React from 'react'

import logo from '~/assets/logo.svg'
import image from '~/assets/login-image.svg'

import { Container } from './styles'
import Form from './Form'

const Login = () => (
  <Container>
    <main>
      <p className="sentence">
        "Construa seus sonhos a<br />
        cada login"
      </p>
      <img className="logo" src={logo} alt="logo" />
      <Form />
      <a href="/cadastro">Cadastre-se</a>
    </main>
    <aside>
      <p className="sentence">
        "Construa seus sonhos a<br />
        cada login"
      </p>
      <img className="image" src={image} alt="image" />
    </aside>
  </Container>
)

export default Login
