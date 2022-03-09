import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Principal } from '~/pages'
import { Login, Register } from '~/pages/Auth'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
