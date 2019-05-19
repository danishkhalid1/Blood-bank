import React, { Component } from 'react';
import * as firebase from 'firebase';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './config/firebaseconfig';
import './index.css';
import Button from '@material-ui/core/Button';


class Donors extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.ref = firebase.database().ref();
  }

  componentDidMount() {

    let UserItem = localStorage.getItem("User");
    if(UserItem != null){
      let userOBJ = JSON.parse(UserItem);

      this.ref.child('users').equalTo(userOBJ).on('value', snapshot => {
        const obj = snapshot.val();
        const data = [];
        for (let key in obj) {
          data.push(obj[key]);
        }
        this.setState({ data: data });
      });
      

    }
    else{
      alert("Please Login to Open this Page");
      this.props.history.push('/login')
    }
  };

  // getData = () => {
  //   this.ref.child('users').orderByChild('bloodgroup').equalTo(this.state.value).on('value', snapshot => {
  //     const obj = snapshot.val();
  //     const data = [];
  //     for (let key in obj) {
  //       data.push(obj[key]);
  //     }
  //     this.setState({ data: data });
  //   });
  // };
    //let userID = JSON.parse(localStorage.getItem("User"));


  donorButton = () => {
    this.props.history.push('/receiverInfo')
  }

  render() {
    const { classes } = this.props;
    return (
      <div>

          
          <Typography component={'span'}variant="h5" gutterBottom className={classes.paper}>
            Are You sure You want to Donate blood?
           </Typography>

        <Button variant="outlined" color="secondary" className={classes.button} onClick={this.donorButton}>
        Donate Blood
        </Button>

        
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    margin: '5% 5% 0px 0px',
    color: '#e91e63',
  },
  button: {
    margin: '20px 0px 0px 42%',
    
  }
});
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

export default withStyles(styles)(Donors);
