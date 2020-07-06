import React from 'react'

import  '../assets/css/navbarstyle.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {InputGroup,FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import Assets from '../constants/Image';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LoginReg from './LoginReg'

export default class HomeNavbar extends React.Component{
    render(){
        return(
            <div >
               <Navbar bg="dark" className="homeNav" expand="lg" variant="dark">
                   <Navbar.Brand className="font-weight-bold navbarBrand"><span className="navbarBrandNeo">Neo</span><span className="navbarBrandStore">STORE</span></Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto homeNav_items">
                        <Nav.Link className="navbarBrand_home" href="#home"><Link to="/" style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Home</Link></Nav.Link>
                        <Nav.Link className="navbarBrand_product" href="#product"><Link to="/Products" style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Products</Link></Nav.Link>
                        <Nav.Link className="navbarBrand_order" href="#order"><Link to="/Order" style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Order</Link></Nav.Link>
                        {/* <InputGroup className="mb-3 input" inline> */}
                            {/* <InputGroup.Prepend className="searchIcon">
                                
                            <InputGroup.Text id="basic-addon1"><i class="fa fa-search" /></InputGroup.Text>
                            </InputGroup.Prepend> */}
                            {/* <span className="searchIcon"><i class="fa fa-search" /></span>
                            <FormControl className="input_formcontrol"
                            id="search"
                            placeholder="Search.."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            
                            ></FormControl>

                        </InputGroup> */}
                        <div class="form-group has-search">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search"/>
                        </div>
                        
                        <Link className="cartlink"  to="/Cart">
                            <Button className="cartButton" variant="Link">
                                <ShoppingCartIcon className="x" style={{marginLeft:"-7px"}}></ShoppingCartIcon>
                                <span className="circle">0</span>
                                     <span style={{marginLeft:"14px"}}>Cart</span>
                            </Button>
                        </Link>
                            <LoginReg ></LoginReg>
                         
                   </Nav>
                   </Navbar.Collapse>
               </Navbar>
            </div>
        );
    }
}