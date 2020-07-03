import React, { Component } from 'react'
import HomeNavbar from './navbar'
import Footer from './footer'
import { Container , Row, Col} from 'react-bootstrap';
import Assets from '../constants/Image'

 class PageNotFound extends Component {
    render() {
        return (
            <div>
                <HomeNavbar/>
                <div>
                    <Container>
                        <Row>
                            
                            <Col>
                                <div style={{height:"600px"}}>
                                    <img src={Assets.PAGENOTFOUND} style={{width:"420px"}} alt="img"></img>
                                </div>
                            </Col>
                            <Col>
                                    <p style={{fontSize:"80px"}}>Ooops!!</p>
                                    <p style={{fontSize:"30px"}}>404 Page Not Found</p>
                                    <p>We cant't seem to find the page you're looking for.</p>
                            </Col>
                            
                            
                        </Row>
                    </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PageNotFound
