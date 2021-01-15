import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

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
          render={() => <h1>Palette Color List</h1>
         }
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
