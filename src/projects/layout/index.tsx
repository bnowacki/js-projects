import * as React from 'react'

import {Flex, Heading, Stack, Text} from '@chakra-ui/react'

import {Project} from '@/types'

type Props = {
  project: Project
  children: React.ReactNode
}

const ProjectLayout = ({project, children}: Props) => {
  return (
    <Stack py={4} flex="1" justify="flex-start" align="center">
      <Flex
        flex="3"
        w="100%"
        justify="center"
        align="center"
        bg="#111"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
      >
        {children}
      </Flex>
      <Stack w="100%" flex="1" borderRadius="lg" bg="gray.900" p={2}>
        <Heading size="lg">{project.name}</Heading>
        {!!project.description && <Text>{project.description}</Text>}
      </Stack>
    </Stack>
  )
}

export default ProjectLayout
