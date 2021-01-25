import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  }

  changeColorLevel = (level) => {
    this.setState({
      level
    })
  }

  changeColorFormat = (val) => {
    this.setState({format: val})
  }

  render() {
    console.log(this.props);
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id} 
        background={color[format]} 
        name={color.name} 
        // paletteId={id} 
        // colorId={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ))
    return (
      <div className='Palette'>
        <Navbar level={level} 
          changeColorLevel={this.changeColorLevel}
          handleFormatChange={this.changeColorFormat}
          showAllColors={true}
          />
        <div className='Palette-color'>
         {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default Palette;
