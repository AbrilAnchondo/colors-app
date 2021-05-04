import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  state = {
    palettes: seedColors
  }
  findPalette = (id) => {
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }

  saveNewPalette= (newPalette) => {
    console.log('saved pallete', newPalette);
   this.setState({ palettes: [...this.state.palettes, newPalette] });
   console.log('palettes', this.state.palettes);
  }

  render() {
    return (
      <Switch>
        <Route 
          exact 
          path='/palette/new' 
          render={(routerProps) => <NewPaletteForm saveNewPalette={this.saveNewPalette} {...routerProps}/>}
        />
        <Route 
          exact 
          path='/' 
          render={(routerProps) => <PaletteList palettes={this.state.palettes} {...routerProps}/>}
        />
        <Route 
          exact 
          path='/palette/:id' 
          render={routerProps => (
            <Palette 
              palette={generatePalette(this.findPalette(routerProps.match.params.id))} 
            /> 
          )}
        /> 
        <Route 
          exact
          path='/palette/:paletteId/:colorId'
          render={routerProps => (
            <SingleColorPalette 
              colorId={routerProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))} 
            /> 
          )}
        /> 
      </Switch>
    )
  }
}

export default App;
