import * as React from 'react'
import { Button } from '@material-ui/core'
export interface SearchButtonProps {
  title: string
  disabled?: boolean
  form?: string
}

export default function SearchButton(props: SearchButtonProps) {
  const { title, disabled, form } = props
  return (
    <Button
      type="submit"
      variant="outlined"
      form={form}
      disabled={disabled}
      size="small"
    >
      {title}
    </Button>
  )
}
