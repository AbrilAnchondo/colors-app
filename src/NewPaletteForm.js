import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { withStyles } from '@material-ui/styles';
import useStyles from './styles/NewPaletteFormStyles';


function NewPaletteForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(props.palettes[0].colors);

  // const [newName, setNewName] = useState({
  //   colorName: '',
  //   paletteName: ''
  // })
 

  const maxNumOfColors = 20;
  const paletteIsFull = colors.length >= maxNumOfColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  }

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
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
      <PaletteFormNav 
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
        palettes={props.palettes}
      />
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
        <div className={classes.container}>
          <Typography variant='h4'>Desing Your Palette</Typography>
          <div className={classes.buttons}>
            <Button 
              className={classes.button}
              variant="contained" 
              color="primary" 
              onClick={showRandomColor}
              disabled={paletteIsFull}
              >
              Random Color
            </Button>
            <Button 
              className={classes.button}
              variant="contained" 
              color="secondary" 
              onClick={clearColors}
              >
              Clear Palette
            </Button>
          </div>
          <ColorPickerForm 
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
          />
        </div>
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
export default withStyles(useStyles, { withTheme: true })(NewPaletteForm);
