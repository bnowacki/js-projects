import * as React from 'react'

import {Center, Flex, Heading, Stack, Text} from '@chakra-ui/react'
import {Outlet, useLocation} from 'react-router-dom'

import projects from '../data'

const ProjectLayout = () => {
  const {pathname} = useLocation()

  const project = React.useMemo(() => {
    const parts = pathname.split('/')
    const path = parts[parts.length - 1]

    return projects.find((p) => p.path === path)
  }, [pathname])

  if (!project) {
    return <Center>Project Not Found.</Center>
  }

  return (
    <Stack py={4} flex="1" justify="flex-start" align="center">
      <Flex
        flex="6"
        w="100%"
        justify="center"
        align="stretch"
        bg="#111"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
      >
        <Outlet />
      </Flex>
      <Stack w="100%" flex="1" borderRadius="lg" bg="gray.900" p={2}>
        <Heading size="lg">{project.name}</Heading>
        {!!project.description && <Text>{project.description}</Text>}
      </Stack>
    </Stack>
  )
}

export default ProjectLayout
