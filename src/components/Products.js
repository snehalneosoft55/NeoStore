import React from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../redux'
// import {ProductReducer} from '../redux/Products/ProductReduser'

import {Container , Row, Col} from 'react-bootstrap'

import Footer from './footer'
import HomeNavBar from './navbar'
import SideMenu from './SideMenu';



  
    function Products(props)
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
                                <h2>No of products-{props.NoOfProducts} </h2>
                                <button onClick={props.getProduct}>get products</button>
                               </Col>
                           </Row>
                       </Container>
                   </div>
                <Footer/>
            </div>
        );
    }

const mapStateToProps = state =>{
    return {
        NoOfProducts : state.NoOfProducts
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        getProducts:()=>dispatch(getProduct())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)