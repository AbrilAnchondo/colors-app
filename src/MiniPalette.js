import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  },
};

function MiniPalette(props) {
  console.log(props);
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);