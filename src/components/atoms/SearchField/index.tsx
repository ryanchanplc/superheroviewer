import * as React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
export interface SearchFieldProps {
  placeholder: string
  disabled: boolean
  value: string
  error: boolean
  onChange: (event: object) => void
}

export default function SearchField(props: SearchFieldProps) {
  const { placeholder, disabled, onChange, error, value } = props

  return (
    <TextField
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      value={value}
      fullWidth
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}
