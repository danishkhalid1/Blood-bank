import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CarousalHome from './carousalHome.js';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Img1 from './Images/homeImg1.png';
import Img2 from './Images/homeImg2.png';
import Img3 from './Images/homeImg3.png';
import Img4 from './Images/homeImg4.png';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    margin: '20% 5% 0px 0px',
  },
  homeImg: {
    height: '400',
    width: '70%',
    margin: '30px 0px 50px 70px',

  },
  homeText: {
    textAlign: 'center',
    margin: '20% 5% 0px 30px',
  },
  headingText: {
    color: '#e91e63',
  },
  button: {
    margin: '20px 0px 0px 33%',
    
  },
  navLinks: {
    textDecoration: 'none',
    color: '#e91e63',
  }
});

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CarousalHome />

        <div className={classes.root}>
          <Grid container>
      {/* 1 Img */}
            <Grid item xs={6}>
              <img className={classes.homeImg} src={Img1} alt=""/>
            </Grid>
            <Grid item xs={6}>

              <Typography gutterBottom variant="body1" className={classNames(classes.paper)}>
                <Typography component={'span'} variant="h5" gutterBottom className={classes.headingText}>
                  Find blood donors
                </Typography>
                It is easier to find volunteer blood donors near your location. Our smarting system will find blood
                donors closer to you and will connect you in a subject of moment at zero toll .
               </Typography>
              <Button variant="outlined" color="secondary" className={classes.button}>
              <Link to="/donors" className={classes.navLinks}>Donor Information</Link>
              </Button>

            </Grid>

      {/* 2 Img */}
            <Grid item xs={6}>

              <Typography gutterBottom variant="body1" className={classNames(classes.homeText)}>
                <Typography component={'span'} variant="h5" gutterBottom className={classNames(classes.headingText)}>
                  Find blood Receiver
                </Typography>
                It is easier to find volunteer blood receiver near your location. Our smarting system will find blood
                receiver closer to you and will connect you in a subject of moment at zero toll .
               </Typography>
              <Button variant="outlined" color="secondary" className={classes.button}>
              <Link to="/receiverInfo" className={classes.navLinks}>Receiver Information</Link>
              </Button>

            </Grid>

            <Grid item xs={6}>
              <img className={classes.homeImg} src={Img4} alt="" />
            </Grid>

      {/* 3 Img */}

            <Grid item xs={6}>
              <img className={classes.homeImg} src={Img2} alt=""/>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="body1" className={classNames(classes.homeText)}>
                <Typography component={'span'} variant="h5" gutterBottom className={classNames(classes.headingText)}>
                  Eliminating obstacles in emergencies
                </Typography>
                Our automated blood donation system works efficiently whenever someone needs a blood transfusion.
                As soon as a new blood request is raised, it is routed among our local volunteer blood donors.
                We know time matters!
              </Typography>
            </Grid>


      {/* 4 Img */}

            <Grid item xs={6}>
              <Typography gutterBottom variant="body1" className={classes.homeText}>
                <Typography component={'span'} variant="h5" gutterBottom className={classNames(classes.headingText)}>
                  What could you do?
                </Typography>
                In as little as few minutes, you can become someones unnamed, unknown,
                   but all-important hero. Saving a life is noble work that starts very simply and easily.
                    You can join our cause in a variety of ways. Every form of contribution you make is
                     important, valued and essential in our shared mission to save lives. Register now and
                     enroll as a blood donor. A financial donation can also help save lives.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.homeImg} src={Img3} alt=""/>
            </Grid>

          </Grid>
        </div>
        
      </div>
    );
  }
}




export default withStyles(styles)(Home);