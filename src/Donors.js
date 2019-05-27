import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BloodBankActions } from './store/action/bloodbankaction';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './index.css';
import Button from '@material-ui/core/Button';


class Donors extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name:'',
      bloodgroup:'',
      email:'',
      gender:'',
      number:'',
      id:'',
    };
  }

  componentDidMount() {
    // this.props.getdonorFulldata();

    let UserItem = localStorage.getItem("User");
    // this.props.getdonorFulldata(UserItem);

    if(UserItem != null){
      // console.log(this.props.donordata);
      
      // let data = {
      //   id : UserItem,
      // }
      // console.log(this.props.donorFulldata);
    }
    else
    {
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
    //console.log(this.props.donorfulldata);

    this.props.donordata.map(value => {
      return (
        this.setState({
          bloodgroup: value.bloodgroup, 
          email: value.email,
          name: value.username,
          number: value.number,
          gender: value.gender,
         })
      );
    })
    // console.log(this.state.email + " ff");
    // let data = {
    //   bloodgroup: this.state.bloodgroup, 
    //   email: this.state.email,
    //   name: this.state.username,
    //   number: this.state.number,
    //   gender: this.state.gender,
    // }
     //this.props.postnewdonor(data);

    //this.props.history.push('/receiverInfo')
  }

  signout = () => {
    this.props.signout();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="secondary" className={classes.buttonsignout} onClick={this.signout}>
        Signout
        </Button>
          
          <Typography component={'span'} variant="h5" gutterBottom className={classes.paper}>
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
    
  },
  buttonsignout: {
    margin: '20px 0px 0px 92%',

  }
});

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const mapStateToProps = state => {
  return {

    errorsignup: state.BloodBankReducer.errorsignup,
    donordata: state.BloodBankReducer.donordata,
    donorfulldata: state.BloodBankReducer.donorfulldata,

  }

}

const mapDispatchToProps = dispatch => {
  return {
    // signup: (data) => dispatch(BloodBankActions.signup(data)),
    // signout: (data) => dispatch(BloodBankActions.signout(data)),
    // postnewdonor : (data) => dispatch(BloodBankActions.postnewdonor(data)),
    getdonordata: (data) => dispatch(BloodBankActions.getdonordata(data)),
    getdonorFulldata: () => dispatch(BloodBankActions.getdonorFulldata()),
    signout: () => { dispatch(BloodBankActions.signout()) }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Donors));
