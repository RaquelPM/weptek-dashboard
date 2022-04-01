import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Login, Register } from '~/pages/Auth'

const Auth = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/cadastro" element={<Register />} />
  </Routes>
)

export default Auth
