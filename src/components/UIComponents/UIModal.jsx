import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function UIModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen({ ...open, show: false });
  };

  return(
    <div className='UIModal'>
      <Dialog
        open={open.show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Сообщение</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {open.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ок</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}