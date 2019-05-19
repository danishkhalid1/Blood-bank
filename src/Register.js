import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './config/firebaseconfig';

const ranges = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  }
];

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      number: '',
      bloodgroup: '',
      gender: '',
      data: []
    };
    this.ref = firebase.database().ref();
  }


  signup = () => {

    let emal = this.state.email;
    let pass = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(emal, pass)
      .then((res) => {
        console.log(res);
        if (res) {

          this.ref.child('users').child(res.user.uid).set({
            username: this.state.username,
            email: this.state.email,
            number: this.state.number,
            bloodgroup: this.state.bloodgroup,
            gender: this.state.gender
          });

          localStorage.setItem("User", JSON.stringify(res.user.uid));
          this.props.history.push('/donors');

        }
      })
      .catch((e) => {
        console.log("error", e);
        switch (e.code) {
          case 'auth/weak-password':
            alert(e.message)
            break;
          case 'auth/email-already-in-use':
            alert(e.message)
            break;
          default: alert("Not Found")
        }
      })
  }

  handleChange1 = event => {
    //this.setState({ [prop]: event.target.value });
    this.setState({ [event.target.id]: event.target.value });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    //this.setState({ [event.target.id]: event.target.value });
  };



  render() {
    const { classes } = this.props;
    return (
      <div className={this.root}>
        <Typography className={classNames(classes.Register)}> Register</Typography>
        <TextField
          id="username"
          label="UserName"
          className={classNames(classes.textboxes)}
          type="text"
          name="username"
          autoComplete="username"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br />
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
        <br />
        <TextField
          id="bloodgroup"
          label="Blood Group"
          className={classNames(classes.textboxes)}
          type="text"
          name="Blood Group"
          autoComplete="Blood Group"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br />
        <TextField
          id="number"
          label="Number"
          className={classNames(classes.textboxes)}
          type="number"
          name="Number"
          autoComplete="Number"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br />
        <TextField
          select
          className={classNames(classes.textboxes)}
          variant="outlined"
          id="gender"
          label="Gender"
          value={this.state.gender}
          onChange={this.handleChange('gender')}

        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <Button variant="contained" color="secondary" className={classes.textboxes} onClick={this.signup}>
          Submit
      </Button>
        <Typography className={classNames(classes.regtrText)}> Already have an account?
      <Link to="/login" className={classNames(classes.navLinks)}>Sign in</Link>
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
  Register: {
    textAlign: 'center',
    fontSize: '25px',
    margin: '30px 0px 30px 0px',
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
  regtrText: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
  },



});
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

export default withStyles(styles)(Register);