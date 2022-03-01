import React from 'react'
import ReactDOM from 'react-dom'

import { Global, theme } from './styles'

import { ThemeProvider } from 'styled-components'

import Rotas from './routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Rotas />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
