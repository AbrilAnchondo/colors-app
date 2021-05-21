import sizes from './MediaQueries.js';
import  bg from './bg.svg';

export default {
  root: {
    backgroundImage: 'linear-gradient(to bottom right, purple, blue)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#e8dbff',
    backgroundImage: `url(${bg})`      
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'felx-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down("lg")]: {
      width: "75%",
    },
    [sizes.down("md")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "60%",
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    "& a": {
      color: 'black',
      textDecoration: 'none',
      backgroundColor: 'white',
      borderRadius: '5px',
      padding: '8px 10px',
      fontWeight: 'bold'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2rem',
    [sizes.down("sm")]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: 'repeat(1, 100%)'
    },
  }
}