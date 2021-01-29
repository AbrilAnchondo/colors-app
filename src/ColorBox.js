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
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '8px',
    color: 'black',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.7s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    zIndex: '10',
    transform: 'scale(50)',
    position: 'absolute',
  },
  copyMsg: {
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top:  '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    fontSize: '3rem',
    opacity: '0',
    transform: 'scale(0.1)',
    '& h1': {
      fontWeight: '400',
      width: '100%',
      textShadow: '1px 2px black',
      background: 'rgba(255,255,255,0.2)',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.5s ease-in-out',
    transitionDelay: '0.3s'
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
          <div className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`} style={{background}} />
          <div className={`${classes.copyMsg} ${this.state.copied && classes.showMsg}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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