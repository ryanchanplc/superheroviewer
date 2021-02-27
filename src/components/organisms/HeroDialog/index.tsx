import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
export interface HeroDialogProps {
  onClose?: () => void
  name: string
  biography: string
  image: string
  open: boolean
}
const HeroDialog = (props: HeroDialogProps) => {
  const { onClose, name, biography, image, open } = props

  const handleOk = () => {
    if (onClose) onClose()
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="lg"
      aria-labelledby="dialog-title"
      open={open}
    >
      <DialogTitle id="dialog-title">{name}</DialogTitle>
      <DialogContent dividers>
        <img src={image} height="300" alt="hero-thumbnail"></img>
        <br />
        {biography}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HeroDialog
