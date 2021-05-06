import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
//import { scale } from 'chroma-js';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    "&:hover svg": {
      color: 'white',
      transform: 'scale(1.3)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '8px',
    color: 'rgba(0,0,0,0.5)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  delteIcon: {}
}

const DraggableColorBox = SortableElement((props) =>{
  const { classes, color, name, handleClick } = props;
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon onClick={handleClick}/>
      </div>
    </div>
  )
})
export default withStyles(styles)(DraggableColorBox);
