import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

export class SideMenu extends Component {
    render() {
        return (
          <div>
            <div className="container">
  {/* <h2>Collapsible List Group</h2> */}
  {/* <p>Click on the collapsible panel to open and close it.</p> */}
  <div className="panel-group">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse">
        <ul className="list-group">
          <li className="list-group-item">One</li>
          <li className="list-group-item">Two</li>
          <li className="list-group-item">Three</li>
        </ul>
        <div className="panel-footer">Footer</div>
      </div>
    </div>
  </div>
</div>
          </div>
//             <div>
//                 <nav className="navbar ">
//                 <ul className="navbar-nav">
//     <li className="nav-item">
//       <a className="nav-link" href="#"><Dropdown classNameName="menuItem">All Products</Dropdown></a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#">
//       <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Categories
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Sofa</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Bed</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Chair</Dropdown.Item>
//     <Dropdown.Item href="#/action-4">Table</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Almirah</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
//       </a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#">
//       <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Color
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">White</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Blue</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
//       </a>
//     </li>
//   </ul>
//                 </nav>
//             </div>
        )
    }
}

export default SideMenu
