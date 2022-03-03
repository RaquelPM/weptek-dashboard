import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageBase } from '../components'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageBase />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
