import React from 'react'
import { connect } from 'react-redux'
import {getProducts}  from '../actions/displayProductAction'

import {Container , Row, Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'

import Footer from './footer'
import HomeNavBar from './navbar'
import SideMenu from './SideMenu';

class Products extends React.Component{
    constructor(props){
        super(props);
      }  
    componentWillMount(){
        this.props.getProducts().then(() => {
            const { productData } = this.props;
            console.log('in willmount',productData);
      })
    }
    render()
    {
        const { productData } = this.props;
        console.log('in render',productData);
        // const x=productData.productData;
        // console.log('next of render',x.product_details);
        return(
            <div>
                <HomeNavBar/>
                <hr></hr>
                   <div>
                       <Container>
                           <Row>
                               <Col xs={4}><SideMenu/></Col>
                               <Col>
                                    <div>
                                         <h2 className="header1">Products</h2>
                
                                        {/* {
                                            productData.product_details.map((productData.product_details,i)=>{
                                            return(
                                                <Card className="productCart">
                                                    <div key={i} className="productCart_body">
                                                     <Card.Img className="productCartImg" variant="top" src={productData.image} />
                                                     <Card.Body className="productCart_body_display">
                                                     <Card.Title className="productCart_title">{productData.title}</Card.Title>
                                                    <Card.Text className="productCart_price">{productData.prise}</Card.Text>
                                                    <button className="productCart_button">Add To Cart</button>
                                                    </Card.Body>
                                                    </div>
                                                </Card>
                                             );
                                            })
                                         } */}
                                     </div>
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