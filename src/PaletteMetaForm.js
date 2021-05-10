import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function PaletteMetaForm(props) {
  console.log('metaform',props);
  const { handleSubmit } = props;
  const [open, setOpen] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (e) => {
    setNewPaletteName(e.target.value);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Palette</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create and save a new color palette!
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
              <TextValidator value={newPaletteName}
                label='palette name'
                name='paletteName'
                onChange={handleNameChange}
                validators={['required']}
                errorMessages={['Enter a palette name']}
              />
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;
