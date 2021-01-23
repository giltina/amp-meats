import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export class CompanyDetail extends Component {

    site_url = "http://ampmeats.zimbabwewebdesign.com"

    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            companies: []
        }
    }

    componentDidMount() {

        axios.all([
          axios.get(`http://ampmeats.zimbabwewebdesign.com/rest/v1/company/${this.state.id}`),
                  ])
          .then(response => {
            this.setState({ companies: response[0].data })
            console.log(response[0].data)
            
            
          })
          .catch(error => console.log(error))
      }
    
    render() {
        return (
            <div>

{this.state.companies.map((company) => {
    
    return (
        <div>
                <section id="page-title">
                    <div className="container column">
                        <h1>{company.title}</h1>
                        <p>{company.field_sub_title}</p>
                    </div>
                </section>
                <section id="content">
                    <div className="container">
                        <div className="row">
                            <p><span className="big">{ReactHtmlParser(company.field_company_page_intro)}</span></p>
                            <div className="col-9">
                            <p>{ReactHtmlParser(company.field_company_page_full_descript)}</p>
                            </div>
                            <div className="col-3">
                                <div className="float-logo">
                                    <img src={`${this.site_url}${company.field_company_logo}`} width="100%/" />
                                </div>
                            </div>
                        </div>
                        
                    
                        <button type="button" className="btn btn-outline-dark">CONTACT US</button>
                    </div>
                </section>
                </div>
    )
})}
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
    }
}

export default CompanyDetail

