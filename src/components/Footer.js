import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import TermsConditions from '../components/TermsConditions'

export class Footer extends Component {

  render() {
    return (
        <div>
<section id="call">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Order online or call<br /><span style={{ fontSize: '2.3em', fontWeight: 'bold' }}>(04) 772 685</span><br />to place an order.</p>
                <button type="button" className="btn btn-outline-light"><i className="fa fa-phone" aria-hidden="true" />
                  CALL NOW</button>
              </div>
            </div>
          </div>
        </section>
<section id="footer-links">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="footer1">
                  <a href="/about">ABOUT US</a> 
                  <a href="/meat">OUR MEAT</a> 
                  <a href="https://dev.odos.tech/shop/d961edde-6566-4352-b507-dcb9505f1dc4">BUTCHER BOX</a> 
                  <a href="/recipes">RECIPES</a>
                  <a href="/cntact">CONTACT US</a> 
                  <a href="/faqs">FAQs</a> 
                  <a href="#">CART</a> 
                  <a href="#">MY ACCOUNT</a>
                  <a href="https://dev.odos.tech/shop/d961edde-6566-4352-b507-dcb9505f1dc4">ORDER NOW</a>
                </nav>
                <nav className="footer1">
                <a href="/terms">TERMS & CONDITIONS</a>
                  <a href="/privacy">PRIVACY POLICY</a> 
                  <a href="/delivery">DELIVERY POLICY</a> 
                  <a href="/returns">RETURN REFUND POLICY</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section id="footer">
          <div className="container">
            <p>Copyright © 2020 AMP Meats. All rights Reserved.</p>
          </div>
        </section>
      
        </div>
      
      )
    }
}

export default Footer
