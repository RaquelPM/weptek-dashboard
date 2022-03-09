import React from 'react'

import logo from '../../../assets/logo.svg'
import image from '../../../assets/login-image.png'

import { Container } from './styles'

const Login = () => (
  <Container>
    <main>
      <p className="sentence">
        "Construa seus sonhos a<br />
        cada login"
      </p>
      <img className="logo" src={logo} alt="logo" />
      <input className="input" placeholder="Email" />
      <input className="input" placeholder="Senha" />
    </main>
    <aside>
      <img className="image" src={image} alt="image" />
    </aside>
  </Container>
)

export default Login
