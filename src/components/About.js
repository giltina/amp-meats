import React from 'react'

function About() {
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
            <h3 style={{fontWeight: 'bold'}}>Companies</h3>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 first">
                <img className="img-responsive center-block co-logo" src="images/logo-texas-meats@2x.png" />
                <br />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{width: '20px', marginTop: '15px', marginBottom: '15px'}} />
                <p>Launched in 2007, Texas Meats aims to deliver quality meat at the best prices. The ever-expanding retail chain gives the widest variety of grades and value meat products in Zimbabwe.</p>
                <button className="btn btn-outline-dark" style={{marginTop: '-10px'}}>MORE</button>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 last">
                <img className="img-responsive center-block co-logo" src="images/logo-texas-chicken@2x.png" />
                <br />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{width: '20px', marginTop: '15px', marginBottom: '15px'}} />
                <p>Founded in 2012, Texas chicken is exclusive to chicken products and thrives on distributing the cheapest chicken throughout the country. The brand is committed to launching more stores across the country.</p>
                <button className="btn btn-outline-dark" style={{marginTop: '-10px'}}>MORE</button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 last">
                <img className="img-responsive center-block co-logo" src="images/logo-amp@2x.png" />
                <br />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{width: '20px', marginTop: '15px', marginBottom: '15px'}} />
                <p>AMP Meats has invested in placing Texas Meats and Texas Chicken outlets throughout the country to deliver quality meat in either vacuum-packed family portions, or in bulk quantities.</p>
                <button className="btn btn-outline-dark" style={{marginTop: '-10px'}}>MORE</button>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 first">
                <img className="img-responsive center-block co-logo" src="images/logo-colcom@2x.png" />
                <br />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{width: '20px', marginTop: '15px', marginBottom: '15px'}} />
                <p>Dating back nearly 70 years, Colcom boasts a reputation for quality, offering a wide range of delicious, hygienically prepared processed pork products.</p>
                <button className="btn btn-outline-dark" style={{marginTop: '-10px'}}>MORE</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container people">
            <h3 style={{fontWeight: 'bold'}}>People</h3>
          </div>
          <div className="amp-ceo">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <img src="images/Lester.jpg" className="img-fluid" style={{marginTop: '20px'}} />
                </div>
                <div className="col-8 people-column">
                  <h1>Lester Jones</h1>
                  <h3>Chief Executive, AMP Meats</h3>
                  <p>Lester Jones studied in the United Kingdom and holds a Bachelor of Science (Honours) degree in International Agribusiness Management. Since his return to Zimbabwe in 2001, Lester has held senior management, and executive, positions in several public-listed companies, including CFI Holdings, Pioneer Corporation Africa, and Colcom Holdings</p>
                  <p>Lester has been the Chief Executive of AMP Meats since 2007, whose portfolio also encompasses the growing retail businesses Texas Meats and Texas Chicken. Lester has twice been the Zimbabwe National Chamber of Commerce Businessman of the Year nominee (2013 &amp; 2014).</p>
                </div>
              </div>
            </div>
          </div>
          <div className="colcom-ceo">
            <div className="container">
              <div className="row">
                <div className="col-8 people-column">
                  <h1>Constantine 'Dino' Tumazos</h1>
                  <h3>Chief Executive, Colcom Holdings</h3>
                  <p>Mr Tumazos joined Colcom as the new Finance Director in January 2013, taking on the role of Chief Operating Officer a year later. Dino holds a Bachelor of Commerce degree and a Graduate Diploma in Accounting, from the University of Cape Town. He served his articles of clerkship with Deloitte in Harare, qualifying as a Chartered Accountant (Zimbabwe) in 1991. Dino left Deloitte in 1996 to join a property development company, and in 1998 he joined the Innscor Group as their Group Finance Manager. In 2004 he took on the role of Group Treasurer, and maintained this post until he joined Colcom.</p>
                </div>
                <div className="col-4">
                  <img src="images/Dino.jpg" className="img-fluid" style={{marginTop: '20px'}} />
                </div>
              </div>
            </div>
            <div className="amp-gm">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <img src="images/Kieran.jpg" className="img-fluid" style={{marginTop: '20px'}} />
                  </div>
                  <div className="col-8 people-column">
                    <h1>Kieran Kelly</h1>
                    <h3>General Manager, AMP Meats</h3>
                    <p>Kieran holds a Bachelor of Science (Honours) degree in International Horticultural Management which he studied for in the United Kingdom. Kieran held the position of Managing Director of Kieris Networks in the UK for four years prior to returning to Zimbabwe.
                      <br />Kieran has been the General Manager of AMP Meats since 2009, whose portfolio also encompasses the growing retail businesses Texas Meats and Texas Chickens.</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ujd0IH9TDFw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></section>
        </div>
    )
}

export default About
