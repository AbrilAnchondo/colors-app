import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

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
  }

  syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route 
                exact 
                path='/palette/new' 
                render={(routerProps) => 
                  <div className='page'>
                      <NewPaletteForm saveNewPalette={this.saveNewPalette} {...routerProps} palettes={this.state.palettes}/>
                  </div>
                }
              />
              <Route 
                exact 
                path='/' 
                render={(routerProps) => 
                  <div className='page'>
                    <PaletteList palettes={this.state.palettes} {...routerProps} removePalette={this.removePalette}/>
                  </div>
                }
              />
              <Route 
                exact 
                path='/palette/:id' 
                render={routerProps => (
                  <div className='page'>
                    <Palette 
                      palette={generatePalette(this.findPalette(routerProps.match.params.id))} 
                    /> 
                  </div>
                )}
              /> 
              <Route 
                exact
                path='/palette/:paletteId/:colorId'
                render={routerProps => (
                  <div className='page'>
                    <SingleColorPalette 
                      colorId={routerProps.match.params.colorId}
                      palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))} 
                    /> 
                  </div>
                )}
              /> 
           </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
      />
    )
  }
}

export default App;
