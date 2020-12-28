import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name}/>
    ))
    return (
      <div className='Palette'>
        {/* Navbar here */}
        <div className='Palette-color'>
         {/* color boxes here */}
         {colorBoxes}
        </div>
        {/* footer here */}
      </div>
    )
  }
}

export default Palette;
