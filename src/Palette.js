import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';


class Palette extends Component {
  state = {
    level: 500
  }

  changeColorLevel = (level) => {
    this.setState({
      level
    })
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name}/>
    ))
    return (
      <div className='Palette'>
        <Navbar level={level} changeColorLevel={this.changeColorLevel}/>
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
