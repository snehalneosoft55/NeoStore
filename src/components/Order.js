import React from 'react'

import '../assets/css/Order.css'
import { Container, Row, Col ,Card } from 'react-bootstrap';

import Footer from './footer'
import HomeNavBar from './navbar'
import StarRatingComponent from 'react-star-rating-component';
import Assets from '../constants/Image'
import Button from '@material-ui/core/Button';


// import ProductCard from './ProductCard'

export default class Order extends React.Component{
   
    render()
    {
        return(
            <div className="orderWrapper">
                <HomeNavBar></HomeNavBar>
                <h2>My Account</h2>
                <hr></hr>
                <div className="orderWrapperMainContent">
                  <Container>
                    <Row>
                      <Col xs={1}></Col>
                      <Col xs={4}>
                        <img src={Assets.PROFILE_PIC}  alt="profileImg"></img>
                        <ul className="orderWrapperBtnList">
                          <li>
                            <button className="orderBtn">Order</button>
                          </li>
                          <li>
                            <button className="profileBtn">Profile</button>
                          </li>
                          <li>
                            <button className="addressBtn">Address</button>
                          </li>
                          <li>
                            <button className="changePassBtn">Change Password</button>
                          </li>
                        </ul>
                      </Col>
                      <Col>
                      <Card>
                        <div className="orderCard">
                        <h2>
                        Profile
                      </h2>
                      <hr></hr>
                      <div>
                        <Container>
                          <Row>
                            <Col xs={3}>
                                
                                <label>First Name</label>
                                <br></br>
                                <label>Last Name</label>
                                <br></br>
                                <label>Gender</label>
                                <br></br>
                                <label>date Of Birth</label>
                                <br></br>
                                <label>Mobile No</label>
                                <br></br>
                                <label>Email</label>
                                <br></br>
                                
                            </Col>
                            <Col>
                                2
                            </Col>
                          </Row>
                        </Container>
                        <hr></hr>
                        <Button variant="contained" color="light">Edit</Button>
                      </div>
                        </div>
                      </Card>
                     
                      </Col>
                    </Row>
                  </Container>
                </div>
                <Footer></Footer>
            </div>
            )
    }
}