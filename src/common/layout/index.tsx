import * as React from 'react'

import {Container} from '@chakra-ui/react'
import {Outlet} from 'react-router'

import Header from './header'
import Footer from './footer'

const Layout = () => {
  return (
    <Container
      maxW="container.xl"
      minH="100vh"
      py={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout
