import React from 'react'

import image from '~/assets/register-image.svg'

import { Container } from './styles'
import Form from './Form'
import AppForm from './AppForm'
import Authorization from './Authorization'

const Register = () => (
  <Container>
    <aside>
      <p className="sentence">
        O seu cadastro inicia uma nova jornada rumo a sua independência
        financeira!
      </p>
      <img className="image" src={image} alt="image_aa" />
    </aside>
    <main>
      <img className="image" src={image} alt="image_aa" />
      <p className="title">
        Cadastre-se para criar o<br /> seu aplicativo!
      </p>
      <p className="instruction">
        Após o cadastro você será redirecionado
        <br /> para o checkout de assinatura*
      </p>
      <Form />
    </main>
  </Container>
)

Register.AppForm = AppForm

Register.Authorization = Authorization

export default Register
