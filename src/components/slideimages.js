import React from 'react';
import '../assets/css/slideimagesstyle.css';
// import {Carousel,Image} from 'react-bootstrap';
// import Assets from '../constants/Image';
import Axios from 'axios';
import { Card, Carousel } from 'react-bootstrap';


export default class Slideimages extends React.Component{
  constructor(){
    super();
    this.state={
      dashboardImages:[]
    }
  }
  componentWillMount(){
    Axios.get('http://180.149.241.208:3022/getAllCategories')
    .then(({data}) => {
      const response = data.category_details;
      this.setState({dashboardImages:response});
    })
  }
  render()
  {
    let x= this.state.dashboardImages;
    return(
      <div className="SlideImages">
        <Carousel>
        {
          x.map((x,i) => {
            return(
              
                <Carousel.Item>
                
                <div key={i}>
                  <img className="d-block w-100 SlideImage" src={'http://180.149.241.208:3022/' + x.product_image} alt="img"/>
                </div>
              
                </Carousel.Item>
              
             
            )
          })
        }
</Carousel>
      </div>
    //   <div id="forSlideImage"><Carousel className="carousel">
    //   <Carousel.Item >
    //     <Image
    //       className="carouselImage"
    //       src={Assets.SOFA_IMAGE}
    //       alt="First slide"
    //     />
        
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image
    //       className="carouselImage"
    //       src={Assets.CHAIR_IMAGE}
    //       alt="Third slide"
    //     />
    
       
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image
    //       className="carouselImage"
    //       src={Assets.HALL_IMAGE}
    //       alt="Third slide"
    //     />
    
        
    //   </Carousel.Item>
     

    // </Carousel></div>
      
  );
  }
    
}