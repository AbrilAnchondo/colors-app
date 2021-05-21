import sizes from './MediaQueries.js';

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
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
      color: 'white',
      lineHeight: '30px',
      fontSize: '1rem',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "10%"
    },
  }
}