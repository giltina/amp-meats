import React from 'react'

function Home() {
    return (
        <div>

            <section>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* Slide One - Set the background image for this slide in the line below */}
              <div className="carousel-item active" style={{backgroundImage: 'url("images/banner1.jpg")'}}>
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="display-4">Blue Owl Wines</h2>
                  <p className="lead">Order Now.</p>
                </div>
              </div>
              {/* Slide Two - Set the background image for this slide in the line below */}
              <div className="carousel-item" style={{backgroundImage: 'url("images/banner2.jpg")'}}>
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="display-4">Butcher Box</h2>
                  <p className="lead">Order Now.</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="row">
            <div className="col odd">
              <img src="images/quality.png" width="25%" />
              <h6 style={{marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em'}}>TRUSTED QUALITY</h6>
              <p>100% premium quality Zimbabwean beef</p>
            </div>
            <div className="col even">
              <img src="images/convinience.png" width="25%" />
              <h6 style={{marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em'}}>CONVENIENCE</h6>
              <p>FREE delivery in Harare</p>
            </div>
            <div className="col odd">
              <img src="images/choice.png" width="25%" />
              <h6 style={{marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em'}}>CHOICE</h6>
              <p>More than ten well thought out boxes to choose from</p>
            </div>
          </div>
          {/* Content here */}
        </div>
        <section id="promo1">
          <div className="container">
            <div className="row">
              <div className="col-4 my-auto" style={{textAlign: 'center'}}>
                <h5 style={{fontWeight: 'bold'}}>OUR MEAT</h5>
                <p>Better quality, better price, better service</p>
                <button type="button" className="btn btn-outline-dark">More</button>
              </div>
              <div className="col-8"><img src="images/meat.jpg" width="100%" /></div>
            </div>
          </div>
        </section>
        <section>
          <div className="container companies">
            <h3 style={{fontWeight: 'bold'}}>Companies</h3>
            <div className="row"> 
              <div className="col-3">
                <img className="img-responsive center-block" src="images/logo-texas-meats@2x.png" width="100%/" />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{marginTop: '20px'}} width="5%" />
                <p>Texas Meats gives customers the widest choice of quality meat products in the market.</p>
              </div>
              <div className="col-3">
                <img className="img-responsive center-block" src="images/logo-texas-chicken@2x.png" width="100%/" />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{marginTop: '20px'}} width="5%" />
                <p>Texas Chicken gives customers the widest selection of brands and products when it comes to chicken.</p>
              </div>
              <div className="col-3">
                <img className="img-responsive center-block" src="images/logo-amp@2x.png" width="100%/" />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{marginTop: '20px'}} width="5%" />
                <p>AMP Meats supplies quality meat to the nation through a countrywide network of retail outlets.</p>
              </div>
              <div className="col-3">
                <img className="img-responsive center-block" src="images/logo-colcom@2x.png" width="100%/" />
                <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{marginTop: '20px'}} width="5%" />
                <p>Colcom offers a wide selection of quality and flavoursome pork products.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="home-space">
          <div className="container">
          </div>
        </section>
        <section>
          <div className="container-fluid recipes">
            <h3 style={{fontWeight: 'bold'}}>Recipes</h3>
            <div className="row">
              <hr />
              <div className="gal">
                <img src="images/image1.jpg" alt="" />
                <img src="images/image2.jpg" alt="" />
                <img src="images/image3.jpg" alt="" />
                <img src="images/image4.jpg" alt="" />
                <img src="images/image5.jpg" alt="" />
                <img src="images/image6.jpg" alt="" />
                <img src="images/image7.jpg" alt="" />
                <img src="images/image8.jpg" alt="" />
                <img src="images/image9.jpg" alt="" />
                <img src="images/image10.jpg" alt="" />
                <img src="images/image11.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="newsletter">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Subscribe for Updates</h3>
                <p>Get the latest updates, recipes, and more straight to your inbox or your Facebook feed.</p>
                <form className="form-inline">
                  <input type="email" className="form-control form-length" id="email" placeholder="Enter email" name="email" />
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="call">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Order online or call<br /><span style={{fontSize: '2.3em', fontWeight: 'bold'}}>(04) 772 685</span><br />to place an order.</p>
                <button type="button" className="btn btn-outline-light"><i className="fa fa-phone" aria-hidden="true" />
                  CALL NOW</button>
              </div>
            </div>
          </div>
        </section>
            
        </div>
    )
}

export default Home
