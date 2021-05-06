import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewPaletteForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('teal');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [newName, setNewName] = useState({
    colorName: '',
    paletteName: ''
  })

  const maxNumOfColors = 20;
  const paletteIsFull = colors.length >= maxNumOfColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateButtonColor = (newColor) => {
    console.log(newColor);
    setCurrentColor(newColor.hex);
  }

  const handleNameChange = (e) => {
    console.log('e', e.target.value);
    setNewName({ ...newName, [e.target.name]: e.target.value});
  }

  const addNewColor = (e) => {
    e.preventDefault();
    const newColor = {color: currentColor , name: newName.colorName};
    setColors([...colors, newColor]);
    setNewName({ newColorName: ''});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('saving...')
    const newPalette = {
      paletteName: newName.paletteName, 
      colors: colors, 
      id: newName.paletteName.toLowerCase().replace(/ /g, '-')
    }
    console.log('newPalette', newPalette);
    props.saveNewPalette(newPalette);
    props.history.push('/');
  }

  const deleteColorBox = (name) => {
    setColors(colors.filter(color => color.name !== name));
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex),
    );
  };

  const clearColors = () => {
    setColors([]);
  }

  const showRandomColor = () => {
    const allColors = props.palettes.flatMap(palette => palette.colors);
    let randIndex = Math.floor(Math.random() * allColors.length);
    setColors([...colors,allColors[randIndex]]);
  }
  return (
    <div className={classes.root}>
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
          <ValidatorForm onSubmit={handleSubmit}>
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
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant='h4'>Desing Your Palette</Typography>
        <div>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={showRandomColor}
            disabled={paletteIsFull}
            >
              Random Color
            </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={clearColors}
            >
              Clear Palette
            </Button>
        </div>
        <ChromePicker color={currentColor} onChangeComplete={updateButtonColor} />
        <ValidatorForm onSubmit={addNewColor} >
          <TextValidator value={newName.colorName} 
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList 
          colors={colors} 
          deleteColorBox={deleteColorBox} 
          axis={'xy'}
          onSortEnd={onSortEnd}
          distance={10}
        />
      </main>
    </div>
  );
}

