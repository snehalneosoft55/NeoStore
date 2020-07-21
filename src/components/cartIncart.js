import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "@material-ui/core";
import TableInCart from "./TableIncart";
import { BASE_URL } from "../constants/BaseURL";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "../assets/css/cartIncart.css";
import swal from "sweetalert";
import axios from "axios";

export default class CartInCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: "",
      countOfItems: 0,
      productsInCart: "",
    };
  }
  componentWillMount() {
    const x = JSON.parse(localStorage.getItem("cartProducts"));
    console.log("length of cart==");
    if(x){
      this.setState({ quantity: 1, countOfItems: x.length, productsInCart: x });
    }
  }
  incrementBtnHandler = (data, id) => {
    console.log("data in incHandler", data, id);
    data = data + 1;
    console.log("leng==", localStorage.length);
    // const temData = JSON.parse(localStorage.getItem("cartProducts"));
    const temData = this.state.productsInCart;
    temData.map((val, i) => {
      if (i === 0) {
        if (val[0].productDetail.id === id) {
          val[0].quantity = data;
        }
      }
      if (i > 0) {
        if (val[0].productDetail.id === id) {
          val[0].quantity = data;
        }
      }
    });
    localStorage.setItem("cartProducts", JSON.stringify(temData));
    console.log("leng==", localStorage.length);
    this.setState({ quantity: data, productsInCart: temData });
  };
  decrementHandler = (data, id) => {
    console.log("data in incHandler", data, id);
    data = data - 1;
    console.log("leng==", localStorage.length);
    // const temData = JSON.parse(localStorage.getItem("cartProducts"));
    const temData = this.state.productsInCart;
    temData.map((val, i) => {
      if (i === 0) {
        if (val[0].productDetail.id === id) {
          val[0].quantity = data;
        }
      }
      if (i > 0) {
        if (val[0].productDetail.id === id) {
          val[0].quantity = data;
        }
      }
    });
    localStorage.setItem("cartProducts", JSON.stringify(temData));
    console.log("leng==", localStorage.length);
    this.setState({ quantity: data, productsInCart: temData });
  };
  deletehandler = (i) => {
    let token = localStorage.getItem("token");
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      // ()
      if (willDelete) {
        console.log("in 1st if");
        const temData = this.state.productsInCart;
        temData.splice(i, 1);
        localStorage.setItem("cartProducts", JSON.stringify(temData));
        console.log("afetr splice tempdata ==",temData);
        // if (token) {
        //   console.log("in 2nd if of delete");
        //   axios.delete(BASE_URL + `deleteCustomerCart/${i}`, {
        //     headers: { Authorization: "Bearer " + token },
        //   });
        // }
        swal({
          icon: "success",
          title: "Done",
          text: "Item has been removed from cart.",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log("before setState productdata");
        this.setState({ productsInCart: temData });
      }
    });
  };
  render() {
    // const x = JSON.parse(localStorage.getItem("cartProducts"));
    // console.log("in cart.js,,,data==", x);
    // console.log("length", x.length);
    console.log("this.state.productCart==",this.state.productsInCart);
    const x = this.state.productsInCart;
    console.log("x==",x);
    return (
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
                      {(x !== undefined && x!==null && x!=='') &&
                        (x.map((val, i) => {
                          if (i === 0) {
                            console.log("val==",val);
                            let data = val[0].productDetail;
                            console.log("data of first row==", data);
                            return (
                              <tr>
                                <td>
                                  <React.Fragment>
                                    <Container>
                                      <Row>
                                        <Col xs={3}>
                                          <img
                                            style={{
                                              height: "60px",
                                              width: "60px",
                                            }}
                                            src={BASE_URL + data.image}
                                          ></img>
                                        </Col>
                                        <Col>
                                          <p>{data.title}</p>
                                          <p>{data.productProducer}</p>
                                          <p>
                                            status:
                                            {data.productStock > 0
                                              ? "in stock"
                                              : "out of stock"}
                                          </p>
                                        </Col>
                                      </Row>
                                    </Container>
                                  </React.Fragment>
                                </td>
                                <td>
                                  <div>
                                    <button
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        border: "none",
                                        background: "red",
                                      }}
                                      onClick={() =>
                                        this.decrementHandler(
                                          val[0].quantity,
                                          data.id
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      type="text"
                                      style={{ width: "20px" }}
                                      value={val[0].quantity}
                                    ></input>
                                    <button
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        border: "none",
                                        background: "red",
                                      }}
                                      onClick={() =>
                                        this.incrementBtnHandler(
                                          val[0].quantity,
                                          data.id
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td>{data.price}</td>
                                <td>{data.price * val[0].quantity}</td>
                                <td>
                                  <button
                                    style={{ border: "none" }}
                                    onClick={() => this.deletehandler(i)}
                                  >
                                    <DeleteOutlineIcon />
                                  </button>
                                </td>
                              </tr>
                            );
                          } else {
                            let data1 = val[0].productDetail;
                            // console.log(`in ${i} row n data is==`,data1);
                            return (
                              <tr>
                                <td>
                                  <React.Fragment>
                                    <Container>
                                      <Row>
                                        <Col xs={3}>
                                          <img
                                            style={{
                                              height: "60px",
                                              width: "60px",
                                            }}
                                            src={BASE_URL + data1.image}
                                          ></img>
                                        </Col>
                                        <Col>
                                          <p>{data1.title}</p>
                                          <p>{data1.productProducer}</p>
                                          <p>
                                            status:
                                            {data1.productStock > 0
                                              ? "in stock"
                                              : "out of stock"}
                                          </p>
                                        </Col>
                                      </Row>
                                    </Container>
                                  </React.Fragment>
                                </td>
                                <td>
                                  <div>
                                    <button
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        border: "none",
                                        background: "red",
                                      }}
                                      onClick={() =>
                                        this.decrementHandler(
                                          val[0].quantity,
                                          data1.id
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      type="text"
                                      style={{ width: "20px" }}
                                      value={val[0].quantity}
                                    ></input>
                                    <button
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        border: "none",
                                        background: "red",
                                      }}
                                      onClick={() =>
                                        this.incrementBtnHandler(
                                          val[0].quantity,
                                          data1.id
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td>{data1.price}</td>
                                <td>{data1.price * val[0].quantity}</td>
                                <td>
                                  <button
                                    style={{ border: "none" }}
                                    onClick={() => this.deletehandler(i)}
                                  >
                                    <DeleteOutlineIcon />
                                  </button>
                                </td>
                              </tr>
                            );
                          }
                        }))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
            <Col xs={4}>
              <React.Fragment>
                <Card>
                  <h3>Review Order</h3>
                  <ul>
                    <li className="revieworderItems">
                      <span>Subtotal</span>
                      <span></span>
                    </li>
                    <li className="revieworderItems">
                      <span>GST(5%)</span>
                      <span></span>
                    </li>
                    <li className="revieworderItems">
                      <span>Order Total</span>
                      <span></span>
                    </li>
                  </ul>
                  <Button variant="primary">Proceed to buy</Button>
                </Card>
              </React.Fragment>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
