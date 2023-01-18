import * as React from 'react'

import {Stack, Text, Image, Flex, useColorModeValue, Heading, Center, Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

import {Project} from '@/types'

type Props = {
  project: Project
}

const ProjectTile = ({project}: Props) => {
  return (
    <Flex
      as={Link}
      to={'/project/' + project.path}
      direction="column"
      bg={useColorModeValue('gray.300', 'gray.900')}
      borderRadius="lg"
      boxShadow="lg"
      cursor="pointer"
      border="1px solid"
      borderColor="whiteAlpha.300"
      overflow="hidden"
      role="group"
    >
      <Stack p={2} bg="#161b22" borderBottom="1px solid" borderColor="whiteAlpha.300">
        <Heading size="md">{project.name}</Heading>
      </Stack>
      <Box position="relative" bg="#111" overflow="hidden">
        <Image
          src={project.thumbnail || 'https://via.placeholder.com/960x540'}
          objectFit="contain"
          style={{aspectRatio: 16 / 9}}
          _groupHover={{transform: 'scale(1.1)'}}
          transition="all 1s ease"
        />
        <Center
          bg="blackAlpha.900"
          opacity={0}
          position="absolute"
          w="100%"
          h="100%"
          top={0}
          left={0}
          p={4}
          transition="all 500ms ease"
          _groupHover={{opacity: 0.8}}
        >
          <Text
            size="md"
            opacity={1}
            transition="all 500ms ease"
            transform="translateY(100px)"
            _groupHover={{transform: 'translateY(0)'}}
          >
            {project.description}
          </Text>
        </Center>
      </Box>
    </Flex>
  )
}

export default ProjectTile
