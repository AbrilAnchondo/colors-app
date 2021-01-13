import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';


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
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name}/>
    ))
    return (
      <div className='Palette'>
        <Navbar level={level} 
          changeColorLevel={this.changeColorLevel}
          handleFormatChange={this.changeColorFormat}
          />
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
