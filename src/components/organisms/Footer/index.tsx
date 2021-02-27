import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  footer: {
    '&&&': {
      background: theme.palette.grey[500],
    },
  },
}))
export default function Footer(props: any) {
  const { description, title } = props
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
      </Container>
    </footer>
  )
}
