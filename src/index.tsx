import * as React from 'react'

import {ChakraProvider} from '@chakra-ui/react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import Router from '@/router'

const container = document.getElementById('root')
const root = createRoot(container!) // eslint-disable-line
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
