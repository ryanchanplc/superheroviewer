import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SearchBar from '../../molecules/SearchBar'
import Typography from '@material-ui/core/Typography'

const TopHeroBanner = (props: any) => {
  return (
    <Box component={Container}>
      <Typography variant="h2">{props.title}</Typography>
      <Typography variant="subtitle1">{props.summary}</Typography>
    </Box>
  )
}

export default TopHeroBanner
