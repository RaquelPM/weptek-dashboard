import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import ContextProvider from './contexts'
import { Global, theme } from './styles'

import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Global />
        <Routes />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
