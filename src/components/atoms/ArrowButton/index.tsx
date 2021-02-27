import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
export default function ArrowButton(props: any) {
  const { direction, onClick } = props
  const icon = direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />

  return (
    <IconButton aria-label="favourite" onClick={onClick}>
      {icon}
    </IconButton>
  )
}
