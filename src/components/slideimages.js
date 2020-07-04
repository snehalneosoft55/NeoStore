import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

import '../assets/css/slideimagesstyle.css';
import { Carousel } from 'react-bootstrap';

import { BASE_URL } from "../constants/BaseURL";

export default class Slideimages extends React.Component{
  constructor(){
    super();
    this.state={
      id:0,
      dashboardImages:[],
      
    }
  }
  componentWillMount(){
    Axios.get(BASE_URL+'getAllCategories')
    .then(({data}) => {
      const response = data.category_details;
      console.log("data.category_details",data.category_details);
      this.setState({dashboardImages:response});
    })
  }
  render()
  {
    let x= this.state.dashboardImages;
      // console.log("x.category_id",x.category_id);
    return(
      <div className="SlideImages">
        <Carousel>
        {
          x.map((x,i) => {
            return(
              
                <Carousel.Item>
                
                <div key={i}>
                  <Link to = {{
                                  pathname : "/Products",
                                  state:{
                                    category_id_fromslide_images:x.category_id,
                                    status:1
                                  }
                              }}
                  >
                  <img className="d-block w-100 SlideImage" src={'http://180.149.241.208:3022/' + x.product_image} alt="img"/>

                  </Link>
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