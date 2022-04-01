import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '~/hooks'

import App from './app'
import Auth from './auth'
import Loading from './loading'

const Routes = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)

  const Route = user ? App : Auth

  return (
    <BrowserRouter>
      {loading && !user ? <Loading setLoading={setLoading} /> : <Route />}
    </BrowserRouter>
  )
}

export default Routes
