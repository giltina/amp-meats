import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import TermsConditions from '../components/TermsConditions'

export class Footer extends Component {

  render() {
    return (
        <div>

<section id="footer-links">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="footer1">
                  <a href="#">ABOUT US</a> 
                  <a href="/css/">OUR MEAT</a> 
                  <a href="/js/">BUTCHER BOX</a> 
                  <a href="/python/">RECIPES</a>
                  <a href="#">CONTACT US</a> 
                  <a href="/css/">FAQs</a> 
                  <a href="/js/">CART</a> 
                  <a href="/python/">MY ACCOUNT</a>
                  <a href="/python/">ORDER NOW</a>
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
