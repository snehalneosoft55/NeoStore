import React from 'react'

import { Form, Card } from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Inputs from './inputs'
import Assets from '../constants/Image'
import Footer from './footer'
import HomeNavBar from './navbar'


//Sign In Page
export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:{
                email:'',
                password:''
            },
            errors:{
                email:'',
                password:''
            }
        }
    }
    render(){
        return(
            <div>
                <HomeNavBar/>
                <div >
                    <Card className="signInWrapper">
                        <h1 className="signInWrapper_header">Sign In</h1>
                        {/* <Inputs className="emailInput" name="Email" type="Email" placeholder="Email" value={this.state.value} handleChange={this.handleChange}/>
                        <Inputs className="emailInput" name="Email" type="Email" placeholder="Email" value={this.state.value} handleChange={this.handleChange}/> */}
                        <Inputs Label="Username" type="text" placeholder="Username..."/>
                                 <br/>
                                <Inputs Label="Password" type="password" placeholder="************"/>
                               <br/>
                    </Card>
                </div>
                <Footer/>
            </div>
            // <Container fluid={true}>
            //     <HomeNavBar/>
            //     <Row>
            //         <Col xs={7}>
            //             <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
            //         </Col>
            //         <Col xs={5}>
            //             <Row className="signInInfo" >
            //                 <Form>
            //                     <h3 className="signInInfo_header">Sign In</h3><br/>
            //                     <Inputs Label="Username" type="text" placeholder="Username..."/>
            //                     <br/>
            //                     <Inputs Label="Password" type="password" placeholder="************"/>
            //                     <br/>
                                
            //                     <Link to="/ForgotPassword">Forgot Password</Link>
            //                     <Button variant="primary" type="submit" className="btn btn-primary" >
            //                          Submit
            //                     </Button>
            //                 </Form>
            //             </Row>
            //         </Col>
            //     </Row>
            //     <Footer/>
            // </Container>
        );
    }
}