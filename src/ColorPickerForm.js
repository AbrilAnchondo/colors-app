import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function ColorPickerForm(props) {
  console.log('colorPickerFormProps',props);
  const { paletteIsFull } = props;

  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');

  const updateButtonColor = (newColor) => {
    console.log(newColor);
    setCurrentColor(newColor.hex);
  }

  const handleNameChange = (e) => {
    console.log('e', e.target.value);
    setNewColorName(e.target.value);
  }

  const handleSubmit = () => {
    const newColor = {color: currentColor , name: newColorName};
    props.addNewColor(newColor);
    setNewColorName('');
  }

  return (
    <div>
      <hi>ColorPicker</hi>
      <ChromePicker color={currentColor} onChangeComplete={updateButtonColor} />
        <ValidatorForm onSubmit={handleSubmit} >
          <TextValidator value={newColorName} 
          name='colorName'
            onChange={handleNameChange}
            validators={['required']}
            errorMessages={['Enter a color name']}
            />
          <Button 
            variant="contained" 
            color={"primary"}
            style={{backgroundColor: paletteIsFull ? "grey" : currentColor }}
            type='submit'
            disabled={paletteIsFull}
            >
              {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
    </div>
  )
}
export default ColorPickerForm;
