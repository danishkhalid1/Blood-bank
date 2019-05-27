import React from 'react';

import Home from './Home.js';
import Donors from './Donors.js';
import Login from './Login.js';
import Register from './Register.js';
import ReceiverInfo from './ReceiverInfo.js';
import { Router,Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import history from './history';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
     fontSize:20,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    useNextVariants: true,
  },
  navLinks: {
    textDecoration: 'none',
    color: 'white',
    useNextVariants: true,
  },

  AppBarMenu: {
    backgroundColor: '#e91e63',    
  }
};

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


function ButtonAppBar(props) {
  const { classes } = props;

  
  return (
    <div className={classes.root} >
      <Router  history={history}>
        <div>
        <AppBar position="static" className={classes.AppBarMenu}>
          <Toolbar>
            <Typography variant="h2" gutterBottom color="inherit" className={classes.grow}>
              Blood Bank
          </Typography>

            <Button color="inherit"><Link to="/" className={classes.navLinks}>Home</Link></Button>
            <Button color="inherit"><Link to="/donors" className={classes.navLinks}>Donors</Link></Button>
            <Button color="inherit"><Link to="/receiverInfo" className={classes.navLinks}>Receiver</Link></Button>
            <Button color="inherit"><Link to="/login" className={classes.navLinks}>Login</Link></Button>
            {/* <Button color="inherit" onClick={this.Signout}>Signout</Button>           */}
          </Toolbar>

        </AppBar>
            
            <Route exact path="/" component={Home} />
            <Route  path="/donors" component={Donors} />
            <Route  path="/receiverInfo" component={ReceiverInfo} />
            <Route  path="/login" component={Login} />
            <Route  path="/register" component={Register} />
            </div>
      </Router>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
