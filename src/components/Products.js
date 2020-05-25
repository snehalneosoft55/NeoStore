import React from 'react'
import { connect } from 'react-redux'
import {getProducts}  from '../actions/displayProductAction'

import {Container , Row, Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Footer from './footer'
import HomeNavBar from './navbar'
import SideMenu from './SideMenu';
import ProductCard from './ProductCard';

class Products extends React.Component{
     constructor(){
         super();
         this.state={
             
         }
     }
    componentWillMount(){
        this.props.getProducts().then(() => {
            const { productData } = this.props;
            console.log('in willmount',productData.productData);
            const y=productData.productData;
            console.log("y==",y);
      })
    }
    render()
    {
        const { productData } = this.props;
        console.log('in render',productData.productData);
        const y=productData.productData;
        console.log("y==",y);
        // const x=productData.productData;
        // console.log('next of render',x.product_details);
        return(
            <div>
                <HomeNavBar/>
                <hr></hr>
                   <div>
                       <Container>
                           <Row>
                               <Col xs={2}><SideMenu/></Col>
                               <Col>
                               <Row>
                                   <Col>
                                        <h2 className="header1">All Categories</h2>
                                   </Col>
                                   <Col>
                                        Sort By:
                                        <Button className="sort">★</Button>
                                        <Button className="sort">₹</Button>
                                        <Button className="sort">₹</Button>
                                   </Col>
                               </Row>
                               <Row>
                               <div className="popularProduct">
                                         
                                         <div className="product_wrapper">
                                        {
                                            
                                            (y!==undefined)&&( y.map((y,i)=>{
                                                let productImage=y.product_image;
                                                let productTitle=y.product_name;
                                                let productPrice=y.product_cost;
                                                let productRating=y.product_rating;
                                                let productId=y.product_id;
                                                return(
                                                    <ProductCard 
                                                        id={productId}
                                                        image={productImage} 
                                                        title={productTitle} 
                                                        price={productPrice} 
                                                        rating={productRating}
                                                    />
//                                                     
                                                 );
                                                }))
                                            
                                        }
                                           
                                         </div>
                                     </div>
                               </Row>
                               
                               </Col>
                           </Row>
                       </Container>
                   </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    productData: state.productData
  });

  const mapDispatchToProps = {
  getProducts
};
// const mapStateToProps = state => {
//     // console.log(state,state.productData.NoOfProducts,"hello");
//     return state
//     //     NoOfProducts : state.productData.NoOfProducts
//     // }
// }

    // const mapDispatchToProps = dispatch =>{
    //     return bindActionCreators({

    //         displaydata:()=>dispatch(displaydata())
    //     }
    //     )
    // }
// export default connect(mapStateToProps,mapDispatchToProps)(Products)
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products);