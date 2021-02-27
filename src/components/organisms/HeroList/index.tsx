import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'

import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import HeroListItem from '../../molecules/ListItem'
import Pagination from '@material-ui/lab/Pagination'

interface HeroListProps {
  title: string
  perPage: number
  heroDataList: any
  showFav: boolean
  favList: Array<number>
  handlePageChange?: (page: number) => void
  handleFavorite?: (id: number) => void
  handleItemClick?: (id: number) => void
}
const HeroList = (props: HeroListProps) => {
  const {
    heroDataList,
    favList,
    showFav,
    handlePageChange,
    handleFavorite,
    handleItemClick,
    perPage = 1,
  } = props
  const [page, setPage] = useState(1)
  console.log(heroDataList)
  const paginate = (array: any, page_size: any, page_number: any) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }
  return (
    <React.Fragment>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h6">{props.title}</Typography>
        </Grid>
        <Grid item>
          <List>
            {paginate(heroDataList, perPage, page).map(
              (herodata: any, index: number) => {
                return (
                  <HeroListItem
                    showFav={showFav}
                    addedFav={favList.includes(herodata.id)}
                    index={index}
                    primary={herodata.name}
                    image={herodata.image}
                    onClickListItem={handleItemClick}
                    onClickFavorite={handleFavorite}
                  />
                )
              }
            )}
          </List>
        </Grid>
      </Grid>
      <Pagination
        count={Math.ceil(heroDataList.length / perPage)}
        page={page}
        onChange={(event, value) => {
          setPage(value)
          if (handlePageChange) handlePageChange(value)
        }}
      />
    </React.Fragment>
  )
}
export default HeroList
