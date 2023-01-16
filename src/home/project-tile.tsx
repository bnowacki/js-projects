import * as React from 'react'

import {
  Stack,
  Text,
  Image,
  AspectRatio,
  Flex,
  useColorModeValue,
  Heading,
  Center,
  Box,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

import {Project} from '@/types'

type Props = {
  project: Project
}

const ProjectTile = ({project}: Props) => {
  return (
    <Flex
      as={Link}
      to={project.path}
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
      <Box position="relative" bg="#111">
        <Image
          src={project.imgPath || 'https://via.placeholder.com/960x540'}
          objectFit="contain"
          style={{aspectRatio: 16 / 9}}
        />
        <Center
          bg="#161b22"
          opacity={0}
          position="absolute"
          w="100%"
          h="100%"
          top={0}
          left={0}
          p={4}
          transition="all 250ms ease"
          transform="scale(1.1)"
          _groupHover={{transform: 'scaleY(1)', opacity: 0.9}}
        >
          <Text size="md" opacity={1}>
            {project.description}
          </Text>
        </Center>
      </Box>
    </Flex>
  )
}

export default ProjectTile
