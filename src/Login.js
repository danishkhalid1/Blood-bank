import React, { Component } from 'react';

import * as firebase from 'firebase';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './config/firebaseconfig';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      data: []
    };
    this.ref = firebase.database().ref();
  }


  signin = () => {
    let email = this.state.email;
    let pass = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((res) => {
          console.log(res);
          
          // firebase.database().ref("users/"+res.user.uid)      
          // .once((res) => {

          //   if (res) {
               
          //     this.ref.child('Donors').child(res.user.uid).set({
          //         username: this.state.username,
          //         number: this.state.number,
          //         bloodgroup : this.state.bloodgroup
          //       });
    
          //     localStorage.setItem("User", JSON.stringify(res.user.uid));
          //     this.props.history.push('/donors'); 
              
          //   }
          // })

            // localStorage.setItem("user", JSON.stringify(res.user.uid));
             this.props.history.push('/donors');            
          
        })
        .catch((e) => {
            console.log(e);
            switch (e.code) {
                case "auth/wrong-password": // wrong password on sign in
                    alert(e.message)
                    break;
                case "auth/user-not-found": // user not found on sign in on wrong email
                    alert(e.message)
                    break;
                default: alert("Not Found")
            }
        })
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
        <Button variant="contained" color="secondary" className={classes.textboxes} onClick={this.signin}>
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

export default withStyles(styles)(Login);