import React, { Component } from 'react';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
import { withStyles } from '@material-ui/core/styles';
import carousal1 from './Images/carousal1.jpg';
import carousal2 from './Images/carousal2.jpg';
import carousal3 from './Images/carousal3.png';
import carousal4 from  './Images/carousal4.jpg';

class CarouselPage extends Component {
  render(){
    const { classes } = this.props;
    return(
      <Container>
        <Carousel
          activeItem={1}
          length={4}
           showControls={false}
           showIndicators={false}
          //className={classes.carou}
          >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className={classes.carou} src={carousal1} alt="" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>    
                <img className={classes.carou} src={carousal2} alt="" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className={classes.carou} src={carousal3} alt="" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className={classes.carou} src={carousal4} alt=""/>
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

const styles = {
  carou: {
    height: '450px',
    width: '80%',
    margin:'60px 0px 60px 11%',
    webkitBoxShadow: '-1px 2px 9px 5px rgba(0,0,0,0.28)',
    mozBoxShadow: '-1px 2px 9px 5px rgba(0,0,0,0.28)',
    boxShadow: '-1px 2px 9px 5px rgba(0,0,0,0.28)',
} ,

}

export default withStyles(styles)(CarouselPage);