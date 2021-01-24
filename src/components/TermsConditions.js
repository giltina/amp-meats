import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export class TermsConditions extends Component {
    site_url = "http://ampmeats.zimbabwewebdesign.com"

    constructor(props) {
        super(props)
    
        this.state = {
             pages: []
        }
    }

    componentDidMount() {

        axios.all([
          axios.get('http://ampmeats.zimbabwewebdesign.com/rest/v1/page/26')
        
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

export default TermsConditions
