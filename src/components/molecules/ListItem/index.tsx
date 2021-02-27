import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

export interface HeroListItemProps {
  primary: string
  image: any
  index: number
  showFav: boolean
  addedFav: boolean
  onClickFavorite?: (index: number) => void
  onClickListItem?: (index: number) => void
}
export default function HeroListItem(props: HeroListItemProps) {
  const {
    primary,
    onClickFavorite,
    onClickListItem,
    showFav,
    index,
    image,
    addedFav,
  } = props

  return (
    <ListItem
      key={index}
      button
      onClick={() => {
        if (onClickListItem) onClickListItem(index)
      }}
    >
      <ListItemAvatar>
        <Avatar alt="hero-image" src={image.url} variant="square" />
      </ListItemAvatar>
      <ListItemText primary={primary} />
      {showFav && (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="favourite"
            onClick={() => {
              if (onClickFavorite) onClickFavorite(index)
              console.log('click IconButton')
            }}
          >
            {addedFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}
