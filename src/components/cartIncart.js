import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import { Card } from '@material-ui/core';
import TableInCart from './TableIncart';
import {BASE_URL} from '../constants/BaseURL'

export default class CartInCart extends React.Component{
    constructor(){
        super();
        this.state={
            quantity:''
        }
    }
    componentDidMount(){
        const x= JSON.parse(localStorage.getItem('cartProducts'));
        this.setState({quantity:1});
        
    }
    incrementBtnHandler = (data,id)=>{
        // let incVal= this.state.quantity;
        // incVal=incVal+1;
        console.log("data in incHandler",data,id);
        data=data+1;
        console.log("leng==",localStorage.length);
        const temData= JSON.parse(localStorage.getItem('cartProducts'));

        temData.map(
            (val,i)=>{
                if(i>0){
                    if(val[0].productDetail.id === id){
                        val[0].quantity = data;
                    }
                }
            }
        )
        localStorage.setItem("cartProducts", JSON.stringify(temData));
        console.log("leng==",localStorage.length);
        // const tempDataProductdetail = temData.quantity;
        // console.log("in loc st q==",tempDataProductdetail);
        // this.setState({quantity:incVal});
        // const temData= JSON.parse(localStorage.getItem('cartProducts'));
        // const tempDataProductdetail = tempdata
    }
    decrementHandler = () =>{
        let decVal= this.state.quantity;
        decVal=decVal-1;
        this.setState({quantity:decVal})
    }
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
                                                <Col xs={3}>
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
                                <td>q</td>
                            <td>{data.price}</td>
                                <td>t</td>
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
                                                <Col xs={3}>
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
                                <td>
                                    <div>
                                        <button style={{
                                            width:"20px",
                                            height:"20px",
                                            borderRadius:"50%",
                                            border:"none",
                                            background:"red"
                                        }} onClick={this.decrementHandler}>-</button>
                                        <input type="text" style={{width:"20px"}} value={val[0].quantity}>
                                        </input>
                                        <button style={{
                                            width:"20px",
                                            height:"20px",
                                            borderRadius:"50%",
                                            border:"none",
                                            background:"red",
                                            
                                        }} onClick={()=>this.incrementBtnHandler(val[0].quantity,data1.id)}>+</button>
                                    </div>
                                </td>
                            <td>{data1.price}</td>
                                <td>t</td>
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