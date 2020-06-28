import React from "react";
import { Navbar } from "react-bootstrap";
import { NavBarWrapper } from "../../styles";

function NavBar() {
  return (
    <NavBarWrapper>
      <Navbar>
        <Navbar.Brand
          style={{
            color: "#12c990",
            fontSize: 26,
            fontWeight: "bolder",
            marginLeft: "20%",
          }}
        >
          SCOUTIUM
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: "white", marginRight: "29%" }}>
            <img
              style={{ marginTop: -9 }}
              width={40}
              height={40}
              className="mr-2"
              src="./assets/userProfile.png"
              alt="userprofile"
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </NavBarWrapper>
  );
}

export default NavBar;
