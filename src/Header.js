import React from 'react'
import logo from "./Companylogo.png"
import Lists from "./Component/Lists"

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-light logo">
        <div className="container">
          <div className="logo-title d-flex">
            <img src={logo} alt="" style={{ height: "40px" }} />
            <span>
              <h6 className="ml-2">Company Name</h6>
              <small className="ml-2">tagline goes here...</small>
            </span>
          </div>
          <Lists/>
        </div>
      </nav>
    </>
  )
}
export default Header
