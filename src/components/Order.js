import React from 'react'

import '../assets/css/Order.css'
import { Container, Row, Col ,Card } from 'react-bootstrap';

import Footer from './footer'
import HomeNavBar from './navbar'
import Assets from '../constants/Image'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export default class Order extends React.Component{
  constructor(){
    super();
    this.state={
      show:0
    }
  }
  handleProfile=()=>{
    //console.log("in pro");
    this.setState({show:1});
  }
  handleAddr = ()=>{
    //console.log("in add");
    this.setState({show:2});
  } 
  handleOrders = () => {
    this.setState({show:0});
  }
    render()
    {
      let cardData ="";
      if(this.state.show===0){
        cardData=(
          <div>
            orders
          </div>
        )
      }
      if(this.state.show===1){
        cardData =(
          <div>
            
          <Card>
          <div >
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
        
          </div>
        )
      }
      if(this.state.show===2){
        cardData=(
          <p>add</p>
        )
      }
      
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
                            <button className="orderBtn" onClick={this.handleOrders}>Order</button>
                          </li>
                          <li>
                            <button className="profileBtn" onClick={this.handleProfile}>Profile</button>
                          </li>
                          <li>
                            <button className="addressBtn" onClick={this.handleAddr}>Address</button>
                          </li>
                          <li>
                            <button className="changePassBtn" >Change Password</button>
                          </li>
                        </ul>
                      </Col>
                      <Col>
                      <Card>
                        <div className="orderCard">
                        {cardData}
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