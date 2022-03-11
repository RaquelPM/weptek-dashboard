import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Principal, Drivers } from '~/pages'
import { Login, Register } from '~/pages/Auth'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Principal />} />
        <Route path="*" element={<Drivers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
