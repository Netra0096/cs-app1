import logo from "../layout/cslogo.jpg";
import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <nav className="navbar navbar-expand-lg navbar-blue bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} width="120px" height="30px" alt="" />
        </NavLink>
        <div className="right-alighned">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function Navbar1() {
//   return (
//     <>
//       <Navbar bg="light" variant="light">
//         <Container>
//           {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
//           <NavLink className="navbar-brand" to="/">
//             <img src={logo} width="140px" height="40px" alt="" />
//           </NavLink>

//           <Nav className="me-auto, right-aligned">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

export default NavMenu;
