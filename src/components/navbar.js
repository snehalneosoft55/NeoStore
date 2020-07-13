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
import {connect} from 'react-redux'


let x = "";
class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      search:null,
      Information:''
    }
  }
  componentWillMount(){
    this.props.getProducts().then(() => {
      const { productData } = this.props;
      console.log("productdata in didmount in nav", productData.productData);
      const x = productData.productData;
      console.log("Information",x);
      this.setState({ Information:x});
    });
  }
  searchSpace=(event)=>{
    console.log("keyword==");
    let keyword = event.target.value;
    console.log("keyword==",keyword);
    this.setState({search:keyword})
  }

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
  render() {
    const Informations =this.state.Information;
    console.log("Informations-----",Informations);
    let items;
    let productList;
    if(Informations ===undefined || Informations === '' ){
      items='';
    }
    else{
    
      items = Informations.filter((data)=>{
        console.log("data==and==data.product_name",data,data.product_name);
        console.log("data.product_name",data.product_name);
        console.log("this.state.search",this.state.search);
        if(this.state.search == '' || this.state.search == null)
            return data.product_name
        else if(data.product_name.toLowerCase().includes(this.state.search.toLowerCase())){
          console.log("data in else if==",data);
            return data.product_name
        }
      }).map((data,i)=>{
        console.log("data in map==",data);
        // productList=data.product_name;
        return(
        <div>
          <ul>
            <li style={{position:'relative',left:'10vh'}}>
              <span >{data.product_name}</span>
            </li>
          </ul>
        </div>
        )
      })
    }
    console.log("items=======",items);

    // if(Informations !== undefined && this.state.search !== ''){
    //   console.log("in==",Informations);
    //   let items;
    //   items = Informations.filter((data)=>{
    //     console.log("data=== in filter",data);
    //     if(this.state.search == null)
    //         return data
    //     else if(data.color_id.product_name.toLowerCase().includes(this.state.search.toLowerCase())){
    //         return data
    //     }
    //   }).map(data=>{
    //     return(
    //     <div>
    //       <ul>
    //         <li style={{position:'relative',left:'10vh'}}>
    //           <span >{data.color_id.product_name}</span>
    //         </li>
    //       </ul>
    //     </div>
    //     )
    //   })
    // }
    
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
             
              <div class="form-group has-search" style={{zIndex:"0"}}>
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  onChange={(e) => this.searchSpace(e)}
                />
                <div style={{zIndex:"1"}}> </div>
                {/* */}
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
    productData: state.productData
  };
};

const mapDispatchToProps = {
  getProducts
};
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomeNavbar));
