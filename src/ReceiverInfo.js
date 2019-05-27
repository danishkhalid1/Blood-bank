import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BloodBankActions } from './store/action/bloodbankaction';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = theme => ({

  formControl: {
    margin: '40px 0px 5px 28%'
  },
  table: {
    minWidth: 700,
    margin: '40px 0px 0px 0px',
  },
  tableText: {    
    margin: '30px 0px 0px 0px',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  headingText: {
    color: '#e91e63',
    textAlign: 'center',
  },
  button: {
    margin: '0px 0px 0px 47%',
  },
  typography: {
    useNextVariants: true,
  },
}
);
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;




class ReceiverInfo extends Component {

  constructor() {
    super();
    this.state = {
      value: 'A+',
      data: [],
    };
  }


  handleChange = event => {
    this.setState({ value: event.target.value });
  };
                  

  getData = () => {

    let data = {
      value : this.state.value,
    }
    this.props.getdonordata(data);

  };

  render() {

    const { classes } = this.props;
    return (
      <div>

        <FormControl component="fieldset" className={classes.formControl}>

          <Typography component={'span'}variant="h5" gutterBottom className={classes.headingText}>
            Blood Groups
          </Typography>
          <RadioGroup
            aria-label="Blood Groups"
            name="bloodgroups"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            row
          >
            <FormControlLabel value="A+" control={<Radio />} label="A+" />
            <FormControlLabel value="A-" control={<Radio />} label="A-" />
            <FormControlLabel value="B+" control={<Radio />} label="B+" />
            <FormControlLabel value="B-" control={<Radio />} label="B-" />
            <FormControlLabel value="AB+" control={<Radio />} label="AB+" />
            <FormControlLabel value="AB-" control={<Radio />} label="AB-" />
            <FormControlLabel value="O+" control={<Radio />} label="O+" />
            <FormControlLabel value="O-" control={<Radio />} label="O-" />
            <FormControlLabel value="OH+" control={<Radio />} label="OH+" />

          </RadioGroup>
        </FormControl>
        <Button component={'span'} variant="outlined" color="secondary" className={classes.button} onClick={this.getData}>Search</Button>

        <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableText}>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.donordata ? this.props.donordata.map(value => {
            return (
              <TableRow key={value.id}>
                <TableCell component="th" scope="row">
                  {value.username}
                </TableCell>
                <TableCell >{value.email}</TableCell>
                <TableCell>{value.bloodgroup}</TableCell>
                <TableCell>{value.number}</TableCell>
                <TableCell>{value.gender}</TableCell>
              </TableRow>
            );
          }) : null}
        </TableBody>
      </Table>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

    donordata: state.BloodBankReducer.donordata,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getdonordata: (data) => dispatch(BloodBankActions.getdonordata(data)),
    // signout: () => { dispatch(CampusActions.signout()) }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReceiverInfo));

