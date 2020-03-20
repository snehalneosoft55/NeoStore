import React from 'react'

import  '../assets/css/navbarstyle.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {InputGroup,FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'

export default class HomeNavbar extends React.Component{
    render(){
        return(
            <div >
               <Navbar bg="dark" className="homeNav">

                   <Navbar.Brand className="font-weight-bold navbarBrand"><span className="navbarBrandNeo">Neo</span><span className="navbarBrandStore">STORE</span></Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto homeNav_items">
                        <Nav.Link className="navbarBrand_home" href="#home"><Link to="/">HOME</Link></Nav.Link>
                        <Nav.Link className="navbarBrand_product" href="#product"><Link to="/Products">PRODUCTS</Link></Nav.Link>
                        <Nav.Link className="navbarBrand_order" href="#order"><Link to="/Order">ORDER</Link></Nav.Link>
                        <InputGroup className="mb-3 input" inline>
                            <InputGroup.Prepend className="searchIcon">
                                
                            <InputGroup.Text id="basic-addon1"><i class="fa fa-search" /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className="input_formcontrol"
                            
                            placeholder="Search.."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            
                            />
                        </InputGroup>
                        <Button className="cartButton" variant="Link"><i class="fa fa-cart-arrow-down"></i>Cart</Button>
                        {/* <Button className="forUser" variant="Link"><i class="fa fa-angle-down" /></Button> */}
                        <Dropdown className="userDropdown">
                            <Dropdown.Toggle className="userDropdown_toggle" >
                                <i className="fa fa-user userDropdown_toggle_icon"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="userDropdown_items">
                                    <Dropdown.Item href="#/action-1"><Link to="/Registration">Registration</Link></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><Link to="/SignIn">Sign In</Link></Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
                   </Nav>
                   </Navbar.Collapse>
               </Navbar>
            </div>
        );
    }
}