import React from 'react'
import { Paper, makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = (props: any) =>
  makeStyles((theme) => ({
    slide: {
      height: '350px',
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    slideContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }))

export default function Slide(props: any) {
  const { image, title } = props

  const classes = useStyles(props)()
  return (
    <Paper
      className={classes.slide}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.slideContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
