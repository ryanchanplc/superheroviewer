import React from 'react'
import { Toolbar, Typography, makeStyles } from '@material-ui/core'
import SearchBar from '../../molecules/SearchBar'
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
  },
  toolbarTitle: {},
  toolbarSearch: {},
}))
export interface HeaderProps {
  title: string
  onValidateSuccess?: (keyword: string) => void
}

export default function Header(props: HeaderProps) {
  const { title, onValidateSuccess } = props
  const classes = useStyles()
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>

        <SearchBar
          loading={false}
          onValidateSuccess={onValidateSuccess}
        ></SearchBar>
      </Toolbar>
    </React.Fragment>
  )
}
