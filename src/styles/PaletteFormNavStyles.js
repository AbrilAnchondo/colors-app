import { DRAWER_WITH } from '../constants.js';
//import sizes from './MediaQueries.js';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WITH}px)`,
    marginLeft: DRAWER_WITH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem',
  }
});
export default styles;