import React, { Component } from 'react'

export class CompanyDetail extends Component {
    render() {
        return (
            <div>

                <section id="page-title">
                    <div className="container column">
                        <h1>Texas Meats</h1>
                        <p>The Lone Star in Quality Meats</p>
                    </div>
                </section>
                <section id="content">
                    <div className="container">
                        <div className="row">
                            <p><span className="big"><strong>Texas Meats</strong>, a chain of retail stores under the umbrella of AMP Meats, was developed in 2006 and the first retail outlet was launched in 2007 delivering as per its promise to be “the lone star in quality meats”.</span></p>
                            <div className="col-9">
                                <p>
                                    The retail chain was developed to give customers the widest choice of meat products in the market. Building on that success the brand has grown in the market with fifteen shops currently in operation predominantly in Harare and outlying towns with more outlets in the pipeline to come.</p>
                                <p>
                                    Texas Meats retail shops provide a simple, easy and vibrant shopping experience yet give the customer the widest selection of grades and meat products around. Its retail outlets offer value and choice to all customers while striving to deliver on its promise to have quality meat at the best prices.</p>
                            </div>
                            <div className="col-3">
                                <div className="float-logo">
                                    <img src="images/texas-meats.png" width="100%/" />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-dark">CONTACT US</button>
                    </div>
                </section>

            </div>
        )
    }
}

export default CompanyDetail

