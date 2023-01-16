import * as React from 'react'

import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import {Flex, Heading, IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Flex
      color={useColorModeValue('gray.600', 'white')}
      minH="60px"
      py={2}
      borderStyle="solid"
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align="center"
      justify="space-between"
    >
      <Heading as={Link} to="/">
        Random JavaScript Projects
      </Heading>
      <Flex>
        {colorMode === 'light' ? (
          <IconButton
            aria-label="Switch to dark mode"
            icon={<MoonIcon />}
            onClick={toggleColorMode}
            bg="none"
          />
        ) : (
          <IconButton
            aria-label="Switch to light mode"
            icon={<SunIcon />}
            onClick={toggleColorMode}
            bg="none"
          />
        )}
      </Flex>
    </Flex>
  )
}

export default Header
