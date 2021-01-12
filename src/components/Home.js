import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

export class Home extends Component {

  site_url = "https://ampmeats.zimbabwewebdesign.com"

  constructor(props) {
    super(props)

    this.state = {
      sliders: [],
      companies: [],
      recipes: [],
    }
  }

  componentDidMount() {

    axios.all([
      axios.get('https://ampmeats.zimbabwewebdesign.com/rest/v1/sliders',{ crossdomain: true }),
      axios.get('https://ampmeats.zimbabwewebdesign.com/rest/v1/companies',{ crossdomain: true }),
      axios.get('https://ampmeats.zimbabwewebdesign.com/rest/v1/recipes',{ crossdomain: true }),
    ])
      .then(response => {
        this.setState({ sliders: response[0].data })
        this.setState({ companies: response[1].data })
        this.setState({ recipes: response[2].data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <section>
          <Carousel>
            {this.state.sliders.map((slider) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={`${this.site_url}${slider.field_slider_image}`} alt="First slide" />
                  <Carousel.Caption>
                    <div><div><p><img alt="" src={`${this.site_url}${slider.field_slider_logo}`} style={{ width: '200px', height: '197px' }} /></p><p>{slider.field_slider_description}</p><p><a className="btn btn-outline-light" href="/store">Order Now</a></p></div></div>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>

        </section>
        <div className="container-fluid">
          <div className="row">
            <div className="col odd">
              <img src="images/quality.png" width="25%" />
              <h6 style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em' }}>TRUSTED QUALITY</h6>
              <p>100% premium quality Zimbabwean beef</p>
            </div>
            <div className="col even">
              <img src="images/convinience.png" width="25%" />
              <h6 style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em' }}>CONVENIENCE</h6>
              <p>FREE delivery in Harare</p>
            </div>
            <div className="col odd">
              <img src="images/choice.png" width="25%" />
              <h6 style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em' }}>CHOICE</h6>
              <p>More than ten well thought out boxes to choose from</p>
            </div>
          </div>
          {/* Content here */}
        </div>
        <section id="promo1">
          <div className="container">
            <div className="row">
              <div className="col-4 my-auto" style={{ textAlign: 'center' }}>
                <h5 style={{ fontWeight: 'bold' }}>OUR MEAT</h5>
                <p>Better quality, better price, better service</p>
                <button type="button" className="btn btn-outline-dark">More</button>
              </div>
              <div className="col-8"><img src="images/meat.jpg" width="100%" /></div>
            </div>
          </div>
        </section>
        <section>
          <div className="container companies">
            <h3 style={{ fontWeight: 'bold' }}>Companies</h3>
            <div className="row">
              {this.state.companies.map((company) => {
                return (
                  <div className="col-3">
                    <img className="img-responsive center-block" src={`${this.site_url}${company.field_company_logo}`} width="100%/" />
                    <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{ marginTop: '20px' }} width="5%" />
                    <p>{company.field_home_intro}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section id="home-space">
          <div className="container">
          </div>
        </section>
        <section>
          <div className="container-fluid recipe-container recipes-header">
            <h3 style={{ fontWeight: 'bold' }}>Recipes</h3>

            <div className="home-recipe-list row ">
              {this.state.recipes.map((recipe) => {
                return (

                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                    <a id="ctl00_Content_List_ctl01_Photo" className="photo" href="#" style={{ backgroundImage: `url(${this.site_url}${recipe.field_recipe_image})` }}>
                      <span>{recipe.title}</span>
                    </a>
                  </div>


                )
              })}
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

export default Home
