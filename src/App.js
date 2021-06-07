import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route 
                exact 
                path='/palette/new' 
                render={(routerProps) => 
                  <Page>
                      <NewPaletteForm saveNewPalette={this.saveNewPalette} {...routerProps} palettes={this.state.palettes}/>
                  </Page>
                }
              />
              <Route 
                exact 
                path='/' 
                render={(routerProps) => 
                  <Page>
                    <PaletteList palettes={this.state.palettes} {...routerProps} removePalette={this.removePalette}/>
                  </Page>
                }
              />
              <Route 
                exact 
                path='/palette/:id' 
                render={routerProps => (
                  <Page>
                    <Palette 
                      palette={generatePalette(this.findPalette(routerProps.match.params.id))} 
                    /> 
                  </Page>
                )}
              /> 
              <Route 
                exact
                path='/palette/:paletteId/:colorId'
                render={routerProps => (
                  <Page>
                    <SingleColorPalette 
                      colorId={routerProps.match.params.colorId}
                      palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))} 
                    /> 
                  </Page>
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
