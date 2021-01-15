import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>List of Color Palettes here</h1>}/>
        <Route exact path='/palette/:id' render={() => <h1>List of Individual Color Palette here</h1>}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    )
  }
}

export default App;
