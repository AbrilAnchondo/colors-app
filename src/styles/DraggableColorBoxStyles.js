import sizes from './MediaQueries.js';
const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    "&:hover svg": {
      color: 'white',
      transform: 'scale(1.3)'
    },
    [sizes.down("lg")]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down("md")]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down("sm")]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '8px',
    color: 'rgba(0,0,0,0.5)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  delteIcon: {}
}
export default styles;