import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <section id="page-title">
                    <div className="container column">
                        <h1>Contact Us</h1>
                        <p>Have feedback that you'd like to share with us? Contact us.</p>
                    </div>
                </section>
                <div className="container contact-form">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name" id="fullname" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" id="email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Telephone" id="telephone" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows={5} placeholder="Message" id="message" defaultValue={""} />
                            </div>
                            <button type="button" className="btn btn-outline-dark">SEND</button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 contact-details">
                            <h2>Contact Details</h2>
                            <p className="tbl address"><span className="fa fa-fw fa-map-marker" /> <span>1 Coventry Road<br />Colcom Complex <br />Workington, Harare</span></p>
                            <p className="tbl telno">
                                <span className="fa fa-fw fa-phone" />
                                <span>
                                    <a href="tel://04772685">(04) 772685</a><br />
                                    <a href="tel://04772712">(04) 772712</a><br />
                                    <a href="tel://04772736">(04) 772736</a>
                                </span>
                            </p>
                            <p className="tbl telno">
                                <span className="fa fa-fw fa-mobile" />
                                <span>
                                    <a href="tel://0732421798">0732421798</a><br />
                                    <a href="tel://0731837484">0731837484</a>
                                </span>
                            </p>
                            <p className="tbl facebook"><span className="fa fa-fw fa-facebook" /> <a href="https://facebook.com/ampmeats" target="_blank">AMP Meats</a></p>
                        </div>
                    </div>
                </div>
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

export default Contact
