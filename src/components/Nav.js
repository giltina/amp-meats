import React from 'react'
import logo from '../logo.png';

function Nav() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-white top-nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" width={140} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto menu-list">
            <li className="nav-item active">
              <a className="nav-link" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OUR MEAT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">BUTCHER BOX</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">RECIPES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x icon-background" />
                  <i className="fa fa-cart-arrow-down fa-stack-1x" />
                </span>
                CART</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x icon-background" />
                  <i className="fa fa-user fa-stack-1x" />
                </span>
                MY ACCOUNT</a>
            </li>
          </ul>
          <button className="btn btn-dark navbar-btn" style={{marginTop: '-10px'}}>ORDER ONLINE</button>
        </div>
      </div></nav>
    )
}

export default Nav
