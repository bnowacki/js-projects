import * as React from 'react'

import {Container, Link, Text, useColorModeValue} from '@chakra-ui/react'

const Footer = () => {
  const year = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <Text textAlign="right" fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
      &copy; {year} by{' '}
      <Link href="https://barteknowacki.netlify.app/" target="_blank">
        bnowacki
      </Link>
      .
      <br />
    </Text>
  )
}

export default Footer
