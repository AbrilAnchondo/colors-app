export default {
  root: {
    backgroundColor: '#191970',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'felx-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
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
    gridGap: '5%'
  }
}