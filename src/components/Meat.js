import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { BASE_URL } from "../app.config";

export class Meat extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      meats: []
       
    }
  }

  componentDidMount() {

    axios.get(`${BASE_URL}/rest/v1/meat`)
        .then(response => {
            this.setState({ meats: response.data })
        })
        .catch(error => console.log(error))
}

  

  render() {
    return (
        <div>
          {this.state.meats.map((meat) => {
    
    return (
      <div>
        <section id="page-title">
          <div className="container column">
            <h1>{meat.title}</h1>
            <p>{meat.field_sub_title_our_meat}</p>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <p><span className="big">{meat.field_intro_heading}</span></p>
            {ReactHtmlParser(meat.field_intro_body)}
          </div>
        </section>
        <section id="premium">
          <div className="container">
            <div className="content-body">
              <p className="main">High-grade meat for Premium Products</p>
              <p className="sub">We discourage the use of antibiotics and hormones, and only<br /> utilise those suppliers who practise fair and sustainable farming<br /> methods.</p>
            </div>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <div className="row">
              <div className="col-7">
              {ReactHtmlParser(meat.field_main_content)}
                <a className="btn btn-outline-dark" a href="https://dev.odos.tech/shop/d961edde-6566-4352-b507-dcb9505f1dc4">ORDER NOW</a>
              </div>
              <div className="col-5">
                <div className="drop-quote">
                {meat.field_block_quote}
                </div>
              </div>
            </div>
          </div>
        </section>
       
        </div>
            )
          })}
        </div>
      )
    }
}

export default Meat
