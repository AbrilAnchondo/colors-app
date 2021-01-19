import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';

class App extends Component {
  findPalette = (id) => {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
        <Route 
          exact 
          path='/' 
          render={(routerProps) => <PaletteList palettes={seedColors} {...routerProps}/>}
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
      </Switch>
    )
  }
}

export default App;
