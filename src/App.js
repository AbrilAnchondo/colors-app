import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors 
    }
  }
  
  findPalette = (id) => {
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }

  saveNewPalette = (newPalette) => {
   this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }

  removePalette = (id) => {
    this.setState({
      palettes: [...this.state.palettes].filter(palette => palette.id !== id)
    }, this.syncLocalStorage)
  
    console.log('state after deleting', this.state.palettes);
  }

  syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <Switch>
        <Route 
          exact 
          path='/palette/new' 
          render={(routerProps) => <NewPaletteForm saveNewPalette={this.saveNewPalette} {...routerProps} palettes={this.state.palettes}/>}
        />
        <Route 
          exact 
          path='/' 
          render={(routerProps) => <PaletteList palettes={this.state.palettes} {...routerProps} removePalette={this.removePalette}/>}
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
