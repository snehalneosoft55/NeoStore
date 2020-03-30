import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

import {Container,Row,Col} from 'react-bootstrap'

// import {Link} from 'react-bootstrap'

class ProductDetails extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <h1>product Details</h1>

                    <Container>
                        <Row>
                            <Col>
                            <h2>img</h2>
                            </Col>
                            <Col><h2>details</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default ProductDetails;