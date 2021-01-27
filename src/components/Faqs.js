import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { BASE_URL } from "../app.config";

export class Faqs extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             faqs: []
        }
    }

    componentDidMount() {

        axios.all([
          axios.get(`${BASE_URL}/rest/v1/faqs`)
        
        ])
          .then(response => {
            this.setState({ faqs: response[0].data })
          })
          .catch(error => console.log(error))
      }
    
    
    render() {
        return (
            <div>
                {this.state.faqs.map((faq) => {
                                return (
                                    <div>
                <section id="page-title">
                    <div className="container faq-column">
                        <h1>{faq.title}</h1>
                        <p>{faq.field_sub_title_faqs}</p>
                    </div>
                </section>
                <section id="content">
                    <div className="container">
                        {ReactHtmlParser(faq.field_faqs)}
                    </div>
                </section>
                </div>
                   )
                })}
        
            </div>
        )
    }
}

export default Faqs
