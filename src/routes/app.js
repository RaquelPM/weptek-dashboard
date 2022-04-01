import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Principal, Drivers, ConfigRoutes, ConfigDistricts } from '~/pages'

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Principal />} />
      <Route path="*" element={<Drivers />} />
      <Route path="/rotas" element={<ConfigRoutes />} />
      <Route path="/bairros" element={<ConfigDistricts />} />
    </Routes>
  )
}

export default App
