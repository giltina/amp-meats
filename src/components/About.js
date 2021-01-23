import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export class About extends Component {

  site_url = "http://ampmeats.zimbabwewebdesign.com"

  constructor(props) {
    super(props)

    this.state = {
      companies: [],
      people: [],
    }
  }

  componentDidMount() {

    axios.all([
      axios.get('http://ampmeats.zimbabwewebdesign.com/rest/v1/companies'),
      axios.get('http://ampmeats.zimbabwewebdesign.com/rest/v1/people'),
    ])
      .then(response => {
        this.setState({ companies: response[0].data })
        this.setState({ people: response[1].data })
      })
      .catch(error => console.log(error))
  }

  companySubmit = (id) => {
    this.props.history.push(`/company/${id}`)
} 

  render() {
    return (
      <div>
        <section id="page-title">
          <div className="container about-column">
            <h1>About Us</h1>
            <p>AMP Meats was founded in 2003 as Associated Meat Packers,<br /> and is a joint venture business with Colcom Holdings Limited,<br /> Zimbabwe.</p>
          </div>
        </section>
        <section>
          <div className="container companies about-companies">
            <h3 style={{ fontWeight: 'bold' }}>Companies</h3>
          </div>
          <div className="container-fluid">

            <div class="row">

              {this.state.companies.map((company, i) => {


                if (i == 0) {

                  return (


                    <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 first">
                      <img className="img-responsive center-block co-logo" src={`${this.site_url}${company.field_company_logo}`} style={{ width: '60%' }} />
                      <br />
                      <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{ width: '20px', marginTop: '15px', marginBottom: '15px' }} />
                      <p>{company.field_about_us_page_intro}</p>
                      <button className="btn btn-outline-dark" style={{ marginTop: '-10px' }}  onClick={ () => this.companySubmit(company.nid)} >MORE</button>
                    </div>


                  )

                }
                else if (i == 1) {

                  return (


                    <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 last">
                      <img className="img-responsive center-block co-logo" src={`${this.site_url}${company.field_company_logo}`} style={{ width: '60%' }} />
                      <br />
                      <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{ width: '20px', marginTop: '15px', marginBottom: '15px' }} />
                      <p>{company.field_about_us_page_intro}</p>
                      <button className="btn btn-outline-dark" style={{ marginTop: '-10px' }} onClick={ () => this.companySubmit(company.nid)} >MORE</button>
                    </div>


                  )

                }
                else if (i == 2) {

                  return (


                    <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 last">
                      <img className="img-responsive center-block co-logo" src={`${this.site_url}${company.field_company_logo}`} style={{ width: '60%' }} />
                      <br />
                      <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{ width: '20px', marginTop: '15px', marginBottom: '15px' }} />
                      <p>{company.field_about_us_page_intro}</p>
                      <button className="btn btn-outline-dark" style={{ marginTop: '-10px' }} onClick={ () => this.companySubmit(company.nid)} >MORE</button>
                    </div>


                  )

                }

                else {

                  return (


                    <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 first">
                      <img className="img-responsive center-block co-logo" src={`${this.site_url}${company.field_company_logo}`} style={{ width: '60%' }} />
                      <br />
                      <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{ width: '20px', marginTop: '15px', marginBottom: '15px' }} />
                      <p>{company.field_about_us_page_intro}</p>
                      <button className="btn btn-outline-dark" style={{ marginTop: '-10px' }} onClick={ () => this.companySubmit(company.nid)} >MORE</button>
                    </div>


                  )

                }


              })}



            </div>


          </div>
        </section>
        <section>
          <div className="container people">
            <h3 style={{ fontWeight: 'bold' }}>People</h3>
          </div>
          {this.state.people.map((person, i) => {

            if (i == 0) {
              return (
                <div>

                  <div className="amp-ceo">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 col-xs-12 text-center">
                          <img src={`${this.site_url}${person.field_image_person}`} className="img-fluid" style={{ marginTop: '20px', width: '70%' }} />
                        </div>
                        <div className="col-md-8 col-xs-12 text-md-left text-center people-column">
                          <h1>{person.title}</h1>
                          <h3>{person.field_position}</h3>
                          {ReactHtmlParser(person.field_description)}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            }

            else if (i == 1) {
              return (
                <div>
                  <div className="colcom-ceo">
                    <div className="container">
                      <div className="row">
                        <div className="ol-md-8 col-xs-12 text-md-left col-xs-push-12 text-center people-column">
                        <h1>{person.title}</h1>
                          <h3>{person.field_position}</h3>
                          {ReactHtmlParser(person.field_description)}
                        </div>
                        <div className="col-md-4 col-xs-12 col-xs-pull-12 text-center">
                          <img src={`${this.site_url}${person.field_image_person}`} className="img-fluid" style={{ marginTop: '20px', width: '70%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            }

            else {
              return (
                <div>

                  <div className="amp-gm">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 col-xs-12 text-center">
                          <img src={`${this.site_url}${person.field_image_person}`} className="img-fluid" style={{ marginTop: '20px', width: '70%' }} />
                        </div>
                        <div className="ol-md-8 col-xs-12 text-md-left text-center people-column">
                        <h1>{person.title}</h1>
                          <h3>{person.field_position}</h3>
                          {ReactHtmlParser(person.field_description)}
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ujd0IH9TDFw" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            }

          })}
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
  }
}

export default About
