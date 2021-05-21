import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, removePalette, id, openDialog } = props;
  const miniColorBoxes =  colors.map(color => (
    <div className={classes.miniColor} 
      style={{backgroundColor: color.color}} 
      key={color.name}
      ></div>
  ))

  const deletePalette = (e) => {
    e.stopPropagation();
    // removePalette(id);
    openDialog(id);
  }
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <DeleteIcon 
        className={classes.deleteIcon}
        style={{transition: "all 0.4s ease-in-out"}}
        onClick={deletePalette}
        >
      </DeleteIcon>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>
        {paletteName} 
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);