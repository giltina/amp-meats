import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export class Meat extends Component {
  site_url = "http://ampmeats.zimbabwewebdesign.com"

  constructor(props) {
    super(props)
  
    this.state = {
      meats: []
       
    }
  }

  componentDidMount() {

    axios.get('http://ampmeats.zimbabwewebdesign.com/rest/v1/meat')
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
                <button type="button" className="btn btn-outline-dark">ORDER NOW</button>
              </div>
              <div className="col-5">
                <div className="drop-quote">
                {meat.field_block_quote}
                </div>
              </div>
            </div>
          </div>
        </section>
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
        </div>
            )
          })}
        </div>
      )
    }
}

export default Meat
