import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

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
  console.log(palette.colors);
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
    console.log(this.props);
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color[0].id} name={color[0].name} background={color[0][format]} showLink={false}/>
    ))
    return (
      <div className='Palette'>
        <Navbar 
          handleFormatChange={this.changeColorFormat} 
          showAllColors={false} 
        />
        <div className='Palette-color'>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default SingleColorPalette