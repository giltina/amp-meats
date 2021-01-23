import React from 'react'
import logo from '../logo.png'
import Home from '../components/Home'
import About from '../components/About'
import Meat from '../components/Meat'
import Recipes from '../components/Recipes'
import Contact from '../components/Contact'
import Faqs from '../components/Faqs'
import RecipeDetail from '../components/RecipeDetail'
import CompanyDetail from '../components/CompanyDetail'
import TermsConditions from '../components/TermsConditions'
import PrivacyPolicy from '../components/PrivacyPolicy'
import RefundPolicy from '../components/RefundPolicy'
import DeliveryPolicy from '../components/DeliveryPolicy'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-light bg-white top-nav">
        <div className="container">
          <Link to={process.env.PUBLIC_URL + '/'} className="navbar-brand">
            <img src={logo} className="logo" width={140} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto menu-list">
              <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + '/about'} className="nav-link">
                  ABOUT US
            </Link>
              </li>
              <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + '/meat'} className="nav-link">
                  OUR MEAT
            </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://dev.odos.tech/shop/d961edde-6566-4352-b507-dcb9505f1dc4">BUTCHER BOX</a>
              </li>
              <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + '/recipes'} className="nav-link">
                  RECIPES
            </Link>
              </li>
              <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + '/contact'} className="nav-link">
                  CONTACT US
            </Link>
              </li>
              <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + '/faqs'} className="nav-link">
                  FAQS
            </Link>
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
            <a className="btn btn-dark navbar-btn order-button" style={{ fontSize: '0.8em' }} href="https://dev.odos.tech/shop/d961edde-6566-4352-b507-dcb9505f1dc4" >ORDER ONLINE</a>
          </div>
        </div></nav>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
      <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
      <Route path={process.env.PUBLIC_URL + '/meat'} component={Meat} />
      <Route path={process.env.PUBLIC_URL + '/recipes'} component={Recipes} />
      <Route path={process.env.PUBLIC_URL + '/recipe/:id'} component={RecipeDetail} />
      <Route path={process.env.PUBLIC_URL + '/company/:id'} component={CompanyDetail} />
      <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
      <Route path={process.env.PUBLIC_URL + '/faqs'} component={Faqs} />
      <Route path={process.env.PUBLIC_URL + '/terms'} component={TermsConditions} />
      <Route path={process.env.PUBLIC_URL + '/privacy'} component={PrivacyPolicy} />
      <Route path={process.env.PUBLIC_URL + '/delivery'} component={DeliveryPolicy} />
      <Route path={process.env.PUBLIC_URL + '/returns'} component={RefundPolicy} />
      
    </Router>
  )
}

export default Nav
