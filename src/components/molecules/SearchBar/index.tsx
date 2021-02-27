import React, { useState } from 'react'

import { Grid } from '@material-ui/core'
import SubmitButton from '../../atoms/Button'
import SearchField from '../../atoms/SearchField'
export interface SearchBarProps {
  onValidateSuccess?: (e: any) => void
  loading: boolean
}

export default function SearchBar(props: SearchBarProps) {
  const { onValidateSuccess, loading } = props
  const [keyword, setKeyword] = useState('')
  const [error, setError] = useState(false)
  const handleChange = (e: any) => {
    setKeyword(e.target.value)
    validate(e.target.value)
  }

  const validate = (keyword: string) => {
    keyword === '' ? setError(true) : setError(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    validate(keyword)
    if (!error && onValidateSuccess) {
      onValidateSuccess(keyword)
    }
  }
  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <SearchField
            disabled={loading}
            value={keyword}
            error={error}
            placeholder="Search"
            onChange={handleChange}
          ></SearchField>
        </Grid>
        <Grid item xs={3}>
          <SubmitButton
            disabled={loading}
            form="searchForm"
            title={'Search'}
          ></SubmitButton>
        </Grid>
      </Grid>
    </form>
  )
}
