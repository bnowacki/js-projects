import * as React from 'react'

import {Grid, GridItem, useBreakpointValue} from '@chakra-ui/react'

import projects from '@/projects/data'

import ProjectTile from './project-tile'

const Home = () => {
  return (
    <Grid
      templateColumns={useBreakpointValue({
        md: 'repeat(8, 1fr)',
        sm: 'repeat(4, 1fr)',
        lg: 'repeat(12, 1fr)',
      })}
      gap={4}
      mb={8}
    >
      {projects.map((p, i) => (
        <GridItem key={i} colSpan={4}>
          <ProjectTile project={p} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default Home
