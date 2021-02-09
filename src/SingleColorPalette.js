import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex'
    }
  }

  getShades = (palette, colorToFilterBy) => {
  //this method colects all the shades for a given color
  let shades = [];
  let allColors = palette.colors;
  for (let key in allColors) {
    shades.push(
      allColors[key].filter(color => color.id === colorToFilterBy)
    )
  }
  return shades.slice(1);
  }

  changeColorFormat = (val) => {
    this.setState({format: val})
  }

  render() {
    // console.log(this.props);
    const { format } = this.state;
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color[0].name} 
        name={color[0].name} 
        background={color[0][format]} 
        showingFullPalette={false}/>
    ))
    return (
      <div className={classes.Palette}>
        <Navbar 
          handleFormatChange={this.changeColorFormat} 
          showAllColors={false} 
        />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette);