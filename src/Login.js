import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BloodBankActions } from './store/action/bloodbankaction';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

  

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }


  SignIN = () => {
    let data = {
      email : this.state.email,
      pass : this.state.password,
    }
    this.props.signin(data);
}


  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={this.root}>
        <Typography className={classNames(classes.Login)}> Login</Typography>
        <TextField
          id="email"
          label="Email"
          className={classNames(classes.textboxes)}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br/>
        <TextField
          id="password"
          label="Password"
          className={classNames(classes.textboxes)}
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br />
        <Button variant="contained" color="secondary" className={classes.textboxes} onClick={this.SignIN}>
          Submit
      </Button>
      <Typography className={classNames(classes.LoginText)}> Not an account?
      <Link to="/register" className={classNames(classes.navLinks)}>Register Now!</Link>
      </Typography>
      </div>
    );
  }
}

const styles = createMuiTheme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textboxes: {
    margin: '10px 0% 0px 32%',
    width: '500px',
  },
  Login: {
    textAlign: 'center',
    fontSize: '25px',
    margin: '50px 0px 30px 0px',
    color: '#e91e63',
  },
  typography: {
    useNextVariants: true,
  },
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
    color: '#e91e63',
  },
  LoginText: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
  },



});
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const mapStateToProps = state => {
  return {
    errorsignin: state.BloodBankReducer.errorsignin,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    signin: (data) => dispatch(BloodBankActions.signin(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));

