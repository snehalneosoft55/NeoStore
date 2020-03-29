import React from 'react'
import { connect } from 'react-redux'
import {getProducts}  from '../actions/displayProductAction'

import {Container , Row, Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'

import Footer from './footer'
import HomeNavBar from './navbar'
import SideMenu from './SideMenu';

class Products extends React.Component{
     
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
                                    <div>
                                         <h2 className="header1">All Categories</h2>
                
                                        {
                                            // if()
                                            // y.map((y,i)=>{
                                            //     return(
                                            //         <p>{productData.productData.product_name}</p>
                                            //     )
                                            // })
                                            (y!==undefined)&&( y.map((y,i)=>{
                                                return(
                                                    <Card className="productCart1">
                                                        <div key={i} className="productCart_body">
                                                          <Card.Img className="productCartImg" variant="top" src={'http://180.149.241.208:3022/' + y.product_image} />
                                                         <Card.Body className="productCart_body_display">
                                                         <Card.Title className="productCart_title">{y.product_name}</Card.Title>
                                                         <Card.Text className="productCart_price">{'₹'+y.product_cost}</Card.Text>
                                                        <button className="productCart_button">Add To Cart</button>
                                                        </Card.Body>
                                                        </div>
                                                    </Card>
                                                 );
                                                }))
                                            // { 
                                            //     y.map((y,i)=>{
                                            //     return(
                                            //         <Card className="productCart">
                                            //             <div key={i} className="productCart_body">
                                            //             //  <Card.Img className="productCartImg" variant="top" src={productData.image} />
                                            //              <Card.Body className="productCart_body_display">
                                            //              <Card.Title className="productCart_title">{y.product_name}</Card.Title>
                                            //             // <Card.Text className="productCart_price">{productData.prise}</Card.Text>
                                            //             <button className="productCart_button">Add To Cart</button>
                                            //             </Card.Body>
                                            //             </div>
                                            //         </Card>
                                            //      );
                                            //     })
                                            // }
                                        }
                                           
                                         
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