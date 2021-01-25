import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props.palette, this.props.colorId);
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

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color[0].id} name={color[0].name} background={color[0].hex} showLink={false}/>
    ))
    return (
      <div className='Palette'>
        <h1>Single Color Palette Display!!!</h1>
        <div className='Palette-color'>
          {colorBoxes}
        </div>
      </div>
    )
  }
}

export default SingleColorPalette