import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { scale } from 'chroma-js';

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

function DraggableColorBox(props) {
  const { classes, color, name } = props;
  console.log('draggable props', props);
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon/>
      </div>
    </div>
  )
}
export default withStyles(styles)(DraggableColorBox);
