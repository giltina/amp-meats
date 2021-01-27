import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { BASE_URL } from "../app.config";

export class CompanyDetail extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            companies: []
        }
    }

    componentDidMount() {

        axios.all([
          axios.get(`${BASE_URL}/rest/v1/company/${this.state.id}`),
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
                                    <img src={`${BASE_URL}${company.field_company_logo}`} width="100%/" />
                                </div>
                            </div>
                        </div>
                        
                    
                        <a className="btn btn-outline-dark" href="/contact">CONTACT US</a>
                    </div>
                </section>
                </div>
    )
})}
           

            </div>
        )
    }
}

export default CompanyDetail

