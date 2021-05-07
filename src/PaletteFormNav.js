import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

function PaletteFormNav(props) {
  console.log('props form nav', props);
  const { handleDrawerOpen, classes, open, handleSubmit, palettes } = props;
  const [newName, setNewName] = useState({
    colorName: '',
    paletteName: ''
  })

  const handleNameChange = (e) => {
    console.log('e', e.target.value);
    setNewName({ ...newName, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => handleSubmit(newName.paletteName)}>
            <TextValidator value={newName.paletteName}
              label='palette name'
              name='paletteName'
              onChange={handleNameChange}
              validators={['required']}
              errorMessages={['Enter a palette name']}
            />
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
            <Link style={{textDecoration: "none"}} to='/'>
              <Button variant='contained' style={{backgroundColor: "black", color: "white"}}>GO BACK</Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}
export default PaletteFormNav;