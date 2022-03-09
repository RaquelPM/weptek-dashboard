import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Principal } from '../pages'
import { Login } from '../pages/Auth'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Principal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
