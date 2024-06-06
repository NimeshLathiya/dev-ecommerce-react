import { Badge } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import "./NavbarHeader.css";

const NavbarHeader = ({ count }) => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const MotionLink = motion(Nav.Link);

  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark ">
        <Container>
          <Navbar.Brand className="fs-2" as={Link} to={"/devStore"}>
            Dev Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto pt-2">
              <MotionLink as={Link} to="/home" className="fs-5 navbarLink ms-2">
                Home
              </MotionLink>
              <MotionLink
                as={Link}
                to="/about"
                className="fs-5 navbarLink ms-3"
              >
                About
              </MotionLink>
              <MotionLink
                as={Link}
                to="/products"
                className="fs-5 navbarLink ms-3"
              >
                Products
              </MotionLink>
              <MotionLink
                as={Link}
                to="/contact"
                className="fs-5 navbarLink ms-3"
              >
                Contact Us
              </MotionLink>

              <Nav.Link
                as={Link}
                to={"/shoppingCart/id"}
                className="position-absolute end-0 me-5"
              >
                <Badge badgeContent={count} color="secondary">
                  <BsCart color="white" fontSize={30} />
                </Badge>
              </Nav.Link>
              {isAuthenticated && (
                <p
                  className=""
                  style={{
                    color: "#00c497",
                    position: "absolute",
                    right: "230px",
                    marginTop: "12px",
                    cursor: "pointer",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    fontFamily: "Ysabeau Office",
                    fontSize: "17px",
                  }}
                >
                  {user.email}
                </p>
              )}
              {isAuthenticated ? (
                <button
                  style={{
                    position: "absolute",
                    right: "0",
                    marginRight: "110px",
                    marginTop: "5px",
                    backgroundColor: "white",
                    color: "#4237a1",
                  }}
                  className="px-4 py-2 border-0 fw-bold rounded-1 logOutBtn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  style={{
                    position: "absolute",
                    right: "0",
                    marginRight: "110px",
                    marginTop: "5px",
                    backgroundColor: "white",
                    color: "#4237a1",
                  }}
                  className="px-4 py-2 border-0 fw-bold rounded-1 logInBtn"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
