import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
  state = {
    format: 'hex',
    open: false
  }

  handleFormatChange = (e) => {
    console.log(e.target.value)
    this.setState({format: e.target.value, open: true }, () => this.props.handleFormatChange(this.state.format));
    // this.props.handleFormatChange(e.target.value);
  }

  closeSnackBar = (e) => {
    this.setState({open: false});
  }

  render() {
    const { level, changeColorLevel, showAllColors, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>ReactColorPicker</Link>
        </div>
        {
          showAllColors && 
            <div>
              <span>Level: {level}</span>
              <div className={classes.slider}>
                <Slider 
                  defaultValue={level}
                  min={100}
                  max={900}
                  step={100}
                  onAfterChange={changeColorLevel}
                />
              </div>
            </div>
        }
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
          }}
          open={this.state.open}
          onClose={this.closeSnackBar}
          autoHideDuration={3000}
          message={<span id='message-id'>Format changed to {format.toLocaleUpperCase()}</span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          action={[
            <IconButton size="small" 
              key='close' 
              aria-label="close" 
              color="inherit" 
              onClick={this.closeSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

export default withStyles(styles)(Navbar);
