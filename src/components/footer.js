import React from 'react';

import {Container,Row,Col, InputGroup,FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import '../assets/css/footerstyle.css'

export default function Footer(){
    let d=new Date();
        let year=d.getFullYear();
    return(
        <Container fluid={true}>
            <Row className="footerContent">
                <Col>
                <h4>About Company</h4>
                {/* <p>NeoSOFT Technologies is here at your quick and easy service for shooping . </p>
                <p>Contact information</p>
                <p>Email: contact@neosofttech.com</p>
                <p>Phone: +91 0000000000</p>
                <p>MUMBAI, INDIA</p> */}
                <p>
                NeoSOFT Technologies is here at your <br></br>
                quick and easy service for shooping.
                                Contact information<br></br>
                            Email: contact@neosofttech.com<br></br>
                                Phone: +91 0000000000<br></br>
                                    MUMBAI, INDIA
                
                
                </p>
                </Col>
                <Col>
                <h4>Information</h4>
                <p>
                Terms and Conditions<br></br>
                        Gurantee and Return Policy<br></br>
                                Contact Us<br/>
                        Privacy Policy<br></br>
                        Locate Us
                </p>
                </Col>
                <Col>
                <h4>Newsletter</h4>
                <p>
                Signup to get exclusive offer from our favorite brands and to be<br/>
                 well up in the news
                </p>
                <InputGroup>
                    <FormControl id="footer_input" placeholder="your email...">

                    </FormControl>
                </InputGroup>
                <Button>SUBSCRIBE</Button>
                </Col>
            </Row>
            <Row className="footer_endTag">
                <p>Copyright {year} NeoSOFT Technologies All rights reserved | Design By Snehal Patil</p>
            </Row>
        </Container>
    );
}