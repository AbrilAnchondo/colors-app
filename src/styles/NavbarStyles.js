import sizes from './MediaQueries.js';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  
  logo: {
    marginRight: '15px',
    backgroundColor: '#ececff',
    fontSize: '22px',
    padding: '0 13px',
    fontFamily: '"Roboto", sans-serif',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down("xs")]: {
      display: 'none',
    }
  },
  
  slider: {
    margin: '0 10px',
    width: '340px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '10px'
    },
    '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active': {
      backgroundColor: 'blue',
      outline: 'none',
      boxShadow: 'none',
      border: '2px solid blue',
      width: '13px',
      height: '13px',
      marginLeft: '-6px',
      marginTop: '-2px',
    },
    [sizes.down("md")]: {
      width: '150px',
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};