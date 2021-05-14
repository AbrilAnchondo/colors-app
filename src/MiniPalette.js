import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette(props) {
  console.log(props);
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes =  colors.map(color => (
    <div className={classes.miniColor} 
      style={{backgroundColor: color.color}} 
      key={color.name}
      ></div>
  ))
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <DeleteIcon 
        className={classes.deleteIcon}
        style={{transition: "all 0.4s ease-in-out"}}
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