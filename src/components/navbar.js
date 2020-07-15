import React from "react";

import "../assets/css/navbarstyle.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Assets from "../constants/Image";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoginReg from "./LoginReg";
import LogProfile from "./LogProfile";
import { withRouter } from "react-router-dom";
import { getProducts } from "../actions/displayProductAction";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

let x = "";
class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      Information: "",
    };
  }
  async componentDidMount() {
    await this.props.getProducts().then(() => {
      const { productData } = this.props;
      console.log("productdata in didmount in nav", productData.productData);
      const x = productData.productData;
      console.log("Information", x);
      this.setState({ Information: x });
    });
  }
  // searchSpace = (event) => {
  //   console.log("keyword==");
  //   let keyword = event.target.value;
  //   console.log("keyword==", keyword);
  //   this.setState({ search: keyword });
  // };

  checkForLogIn = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      alert("Please lLogin first");
      this.props.history.push("/signIn");
    } else {
      this.props.history.push({
        pathname: "Order",
        state: {
          show: 0,
        },
      });
    }
  };
  onChangeHandle = (e, itemname) => {
    e.preventDefault();
    console.log("in on change handle");
    let data=this.props.productData.productData
       const index = data.findIndex((res) => {
        return res.product_name === itemname;
      });
    
      console.log("index==",index);
    if (index >= 0) {
      this.props.history.push({
        pathname: "/ProductDetails",
        state: {
          productId: data[index].product_id,
        },
      });
    } else if (itemname !== null && index < 0) {
      this.props.history.push("/ProductNotFound");
    }
  };
  render() {
    const l = this.props.productData;
    console.log("l==", l);
    const allProducts = l.productData;
    console.log("allProducts", allProducts);
    let listItems = "";
    // let displaySearchBox=''
    if (allProducts !== undefined) {
      listItems = allProducts.map((val) => {
        return val.product_name;
      });
    }
    console.log("listItems", listItems);
    // if(listItems===''){
    //   displaySearchBox=(
    //     <div>

    //     </div>
    //   )
    // }
    let items;

    return (
      <div>
        <Navbar bg="dark" className="homeNav" expand="lg" variant="dark">
          <Navbar.Brand className="font-weight-bold navbarBrand">
            <span className="navbarBrandNeo">Neo</span>
            <span className="navbarBrandStore">STORE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto homeNav_items">
              <Nav.Link className="navbarBrand_home" href="#home">
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="navbarBrand_product" href="#product">
                <Link
                  to="/Products"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link
                className="navbarBrand_order"
                href="#order"
                onClick={this.checkForLogIn}
              >
                {x}
                Order
              </Nav.Link>
              <div style={{width:"450px"}}>
                <Autocomplete
                  id="free-solo-demo"
                  options={listItems}
                  freeSolo
                  onChange={(event, value) => this.onChangeHandle(event, value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      margin="normal"
                      placeholder="Search..."
                      variant="outlined"
                      style={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </div>

              <Link className="cartlink" to="/Cart">
                <Button className="cartButton" variant="Link">
                  <ShoppingCartIcon
                    className="x"
                    style={{ marginLeft: "-7px" }}
                  ></ShoppingCartIcon>
                  <span className="circle">0</span>
                  <span style={{ marginLeft: "14px" }}>Cart</span>
                </Button>
              </Link>
              <LoginReg></LoginReg>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productData: state.productData,
  };
};

const mapDispatchToProps = {
  getProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeNavbar));
