import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PaletteListStyles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, removePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to='/palette/new'>Create a Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette 
                  {...palette} 
                  handleClick={() => this.goToPalette(palette.id)} 
                  key={palette.id} 
                  removePalette={removePalette} id={palette.id}
                />
              </CSSTransition>))}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);