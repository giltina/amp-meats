import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { BASE_URL } from "../app.config";

export class RefundPolicy extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           pages: []
      }
  }

  componentDidMount() {

      axios.all([
        axios.get(`${BASE_URL}/rest/v1/page/29`)
      
      ])
        .then(response => {
          this.setState({ pages: response[0].data })
        })
        .catch(error => console.log(error))
    }
  render() {
      return (
          <div>
              {this.state.pages.map((page) => {
                              return (
                                  <div>
              <section id="page-title">
                  <div className="container faq-column">
                      <h1>{page.title}</h1>
                      <p>{page.field_sub_title_faqs}</p>
                  </div>
              </section>
              <section id="content">
                  <div className="container">
                      {ReactHtmlParser(page.field_main_content_page)}
                  </div>
              </section>
              </div>
                 )
              })}
      
          </div>
      )
  }
}

export default RefundPolicy
