import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

export class SideMenu extends Component {
    render() {
        return (
            <div>
                <nav class="navbar ">
                <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#"><Dropdown className="menuItem">All Products</Dropdown></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Categories
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Sofa</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Bed</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Chair</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Table</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Almirah</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Color
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
    <Dropdown.Item href="#/action-2">White</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Blue</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </a>
    </li>
  </ul>
                </nav>
            </div>
        )
    }
}

export default SideMenu
