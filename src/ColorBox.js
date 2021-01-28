import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  ColorBox: {
    width: '20%',
    height: props => (
      props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1'
    } 
  },
  copyText: {
    color: 
      props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: 
      props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore: {
    color: props => 
      chroma(props.background).luminance() >= 0.7 ? 'rgb(0,0,0,0.6)' : 'white',
    background: 'rgba(255,255,255,0.1)',
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    padding: '8px',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '1px',
    fontSize: '12px',
  },
  copyButton: {
    color: props => 
      chroma(props.background).luminance() >= 0.7 ? 'rgb(0,0,0,0.6)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    border: 'none',
    background: 'rgba(255,255,255,0.3)',
    textAlign: 'center',
    lineHeight: '30px',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: '0'
  }
}

class ColorBox extends Component {
  state = {
    copied: false
  }

  changeCopyState = () => {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}),1500)
    })
  }

  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div className={`copy-overlay ${this.state.copied && 'show'}`} style={{background}} />
          <div className={`copy-msg ${this.state.copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
                <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox);