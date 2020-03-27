import React from 'react'
import { connect } from 'react-redux'
import {displayProduct}  from '../actions/displayProductAction'
import { bindActionCreators } from 'redux'


import {Container , Row, Col} from 'react-bootstrap'

import Footer from './footer'
import HomeNavBar from './navbar'
import SideMenu from './SideMenu';



  class Products extends React.Component{
    
      constructor(props){
        super(props);
      }  
       
    render()
    {
        return(
            <div>
                <HomeNavBar/>
                <hr></hr>
                   <div>
                       <Container>
                           <Row>
                               <Col xs={4}><SideMenu/></Col>
                               <Col>
                                <h2>No of products-{this.props.NoOfProducts}</h2>
                                <button onClick={this.props.displayProduct}>get products</button>
                               </Col>
                           </Row>
                       </Container>
                   </div>
                <Footer/>
            </div>
        );
    }
}
// const mapStateToProps = state =>{
//     console.log(state,"hello");
//     return {
//         NoOfProducts : state.NoOfProducts
//     }
// }
// const mapDispatchToProps = dispatch =>{
//     return{
//         getProducts:()=>dispatch(getProduct())
//     }
// }
const mapStateToProps = state => {
    console.log(state,state.productData.NoOfProducts,"hello");
    return {
        NoOfProducts : state.productData.NoOfProducts
    }
}

    const mapDispatchToProps = dispatch =>{
        return bindActionCreators({

            displayProduct:()=>dispatch(displayProduct())
        }
        )
    }
export default connect(mapStateToProps,mapDispatchToProps)(Products)