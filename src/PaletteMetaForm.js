import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

function PaletteMetaForm(props) {
  const { handleSubmit } = props;
  const [open, setOpen] = useState(false);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
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

  const showEmoji = () => {
    setOpenEmojiPicker(true);
  }

  const closeEmoji = () => {
    setOpenEmojiPicker(false);
  }

  const savePalette = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    }
    handleSubmit(newPalette);
  }

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleClickOpen}
        style={{margin: '0 0.5rem'}}
        >
        SAVE PALETTE
      </Button>
      <Dialog open={openEmojiPicker} onClose={closeEmoji}>
        <DialogTitle id="form-dialog-title">Choose a Palatte Emoji</DialogTitle>
        <Picker onSelect={savePalette} title='Pick an Emoji'/>
      </Dialog>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        {/* <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}> */}
        <ValidatorForm onSubmit={showEmoji}>
          <DialogContent>
            <DialogContentText>
              Create a new palette name and make sure it is unique!
                <TextValidator value={newPaletteName}
                  label='palette name'
                  name='paletteName'
                  onChange={handleNameChange}
                  validators={['required']}
                  errorMessages={['Enter a palette name']}
                  fullWidth
                  margin='normal'
                />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={handleClose} 
              color="secondary"
              variant="contained"
              >
              Cancel
            </Button>
            <Button 
              variant='contained' 
              color='primary'  
              type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;
