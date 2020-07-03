import React from 'react';
import '../assets/css/slideimagesstyle.css';
import Axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { BASE_URL } from "../constants/BaseURL";

export default class Slideimages extends React.Component{
  constructor(){
    super();
    this.state={
      id:0,
      dashboardImages:[]
    }
  }
  componentWillMount(){
    Axios.get(BASE_URL+'getAllCategories')
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
     );
  }
    
}