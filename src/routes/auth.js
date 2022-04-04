import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { Login, Register } from '~/pages/Auth'

const Auth = () => {
  const { state } = useLocation()

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      {state?.licensed && (
        <Route path="/cadastro/app" element={<Register.AppForm />} />
      )}
      {state?.app && (
        <Route path="/cadastro/chave" element={<Register.Authorization />} />
      )}
    </Routes>
  )
}

export default Auth
