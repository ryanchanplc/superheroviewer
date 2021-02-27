import * as React from 'react'
import { Container, Box } from '@material-ui/core'
export interface IAppProps {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

export default function App(props: IAppProps) {
  return (
    <div>
      <Container maxWidth="lg">
        <Box mb={1}>{props.header}</Box>
        <Box my={1}>{props.children}</Box>
      </Container>

      {props.footer}
    </div>
  )
}
