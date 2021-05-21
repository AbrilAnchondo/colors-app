import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import PaletteListStyles from './styles/PaletteListStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


class PaletteList extends Component {
  state = {
    openDeleteDialog: false,
    deleteId: ''
  }

  openDialog = (id) => {
    this.setState({openDeleteDialog: true, deleteId: id})
  }

  closeDialog = () => {
    this.setState({openDeleteDialog: false, deleteId: ''})
  }

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }

  handleDelete = () => {
    this.props.removePalette(this.state.deleteId);
    this.closeDialog();
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
                  // removePalette={removePalette} 
                  id={palette.id}
                  openDialog={this.openDialog}
                />
              </CSSTransition>))}
          </TransitionGroup>
          <Dialog
            open={this.state.openDeleteDialog}
            onClose={this.closeDialog}
            aria-labelledby="delete-dialog-title"
          >
            <DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                    <CheckIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Delete'/>
              </ListItem>
              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Cancel' />
              </ListItem>
            </List>
            <DialogContent>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);