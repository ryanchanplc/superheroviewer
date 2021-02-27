import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 250,
  },
})

interface IAppProps {
  name: string
  fullname: string
  image: string
}
const App = (props: IAppProps) => {
  const classes = useStyles()
  const { name, fullname, image } = props
  return (
    <CardActionArea component="a" href="#">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {fullname}
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={image} />
        </Hidden>
      </Card>
    </CardActionArea>
  )
}

export default App
