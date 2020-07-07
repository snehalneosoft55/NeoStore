import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import { Card } from '@material-ui/core';
import TableInCart from './TableIncart';
import {BASE_URL} from '../constants/BaseURL'

export default class CartInCart extends React.Component{
    render(){
        const x= JSON.parse(localStorage.getItem('cartProducts'));
        console.log("in cart.js,,,data==",x);
        console.log("length",x.length);

        return(
            <React.Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Card>
                            <div class="container">
  
  <table class="table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Qantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    
    <tbody>
        {
            (x !== undefined )&&(
                x.map(
                    (val,i)=>{
                        if(i=== 0){
                            let data=val.productDetail
                            console.log("data of first row==",data);
                            return(
                                <tr>
                                <td>
                                    <React.Fragment>
                                        <Container>
                                            <Row>
                                                <Col >
                                                    <img style={{height:"60px",width:"60px"}} src={BASE_URL + data.image}></img>
                                                </Col>
                                                <Col>
                            <p>{data.title}</p>
                            <p>{data.productProducer}</p>
                            <p>status:{(data.productStock >0)?('in stock'):('out of stock')}</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </React.Fragment>
                                </td>
                            <td>{data.price}</td>
                                <td>john@example.com</td>
                              </tr>
                            )
                        }
                        else{
                            let data1 = val[0].productDetail;
                            // console.log(`in ${i} row n data is==`,data1);
                            return(
                                <tr>
                                <td>
                                <React.Fragment>
                                        <Container>
                                            <Row>
                                                <Col >
                                                    <img style={{height:"60px",width:"60px"}} src={BASE_URL + data1.image}></img>
                                                </Col>
                                                <Col>
                            <p>{data1.title}</p>
                            <p>{data1.productProducer}</p>
                            <p>status:{(data1.productStock >0)?('in stock'):('out of stock')}</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </React.Fragment>
                                </td>
                            <td>{data1.price}</td>
                                <td>john@example.com</td>
                              </tr>
                            )
                        }
                        
                    }
                )
            )
        }
      
    </tbody>
  </table>
</div>
                            </Card>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}