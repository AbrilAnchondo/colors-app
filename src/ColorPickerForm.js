import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorPickerFormStyles';

function ColorPickerForm(props) {
  const { paletteIsFull, classes } = props;

  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');

  const updateButtonColor = (newColor) => {
    setCurrentColor(newColor.hex);
  }

  const handleNameChange = (e) => {
    setNewColorName(e.target.value);
  }

  const handleSubmit = () => {
    const newColor = {color: currentColor , name: newColorName};
    props.addNewColor(newColor);
    setNewColorName('');
  }

  return (
    <div>
      <ChromePicker 
        color={currentColor} 
        onChangeComplete={updateButtonColor} 
        className={classes.picker}
        />
        <ValidatorForm onSubmit={handleSubmit} >
          <TextValidator value={newColorName} 
            className={classes.colorNameInput}
            variant='filled'
            name='colorName'
            onChange={handleNameChange}
            validators={['required']}
            errorMessages={['Enter a color name']}
            placeholder='Color Name'
            />
          <Button 
            variant="contained" 
            color={"primary"}
            style={{backgroundColor: paletteIsFull ? "grey" : currentColor }}
            type='submit'
            disabled={paletteIsFull}
            className={classes.addColorBtn}
            >
              {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
    </div>
  )
}
export default withStyles(styles)(ColorPickerForm);
