import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import { BASE_URL } from "../app.config";

export class Home extends Component {

  

  constructor(props) {
    super(props)

    this.state = {
      sliders: [],
      companies: [],
      recipes: [],
    }
  }

  recipeSubmit = (id) => {
    this.props.history.push(`/recipe/${id}`)
}

  componentDidMount() {

    axios.all([
      axios.get(`${BASE_URL}/rest/v1/sliders`),
      axios.get(`${BASE_URL}/rest/v1/companies`),
      axios.get(`${BASE_URL}/rest/v1/recipes`),
    ])
      .then(response => {
        this.setState({ sliders: response[0].data })
        this.setState({ companies: response[1].data })
        this.setState({ recipes: response[2].data })
      })
      .catch(error => console.log(error))
  }

  openPopup()
  {
    var popup = window.open("https://dev.odos.tech/shop/d961edde-6566-4352-b507-dcb9505f1dc4", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, top=30");
    if (popup.outerWidth < window.screen.availWidth || popup.outerHeight < window.screen.availHeight)
    {
      popup.moveTo((window.screen.availWidth)*0.10,(window.screen.availHeight)*0.95);
      popup.resizeTo((window.screen.availWidth)*0.85, (window.screen.availHeight)*0.85);
    }
  }

  render() {
    return (
      <div>
        <section class="home-slideshow">
          <Carousel>
            {this.state.sliders.map((slider) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={`${BASE_URL}${slider.field_slider_image}`} alt="First slide" />
                  <Carousel.Caption>
                    <div><div><p><img alt="" src={`${BASE_URL}${slider.field_slider_logo}`} style={{ width: '60%' }} /></p><p>{slider.field_slider_description}</p><p><a className="btn btn-outline-light" onClick={ () => this.openPopup()}>Order Now</a></p></div></div>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>

        </section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 odd">
              <img src="images/quality.png" width="25%" />
              <h6 style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em' }}>TRUSTED QUALITY</h6>
              <p>100% premium quality Zimbabwean beef</p>
            </div>
            <div className="col-md-4 even">
              <img src="images/convinience.png" width="25%" />
              <h6 style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.8em' }}>CONVENIENCE</h6>
              <p>FREE delivery in Harare</p>
            </div>
            <div className="col-md-4 odd">
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
              <div className="col-md-8 order-md-12 "><img src="images/meat.jpg" width="100%" /></div>
              <div className="col-md-4 order-md-1  my-auto" style={{ textAlign: 'center' }}>
                <h3 style={{ fontWeight: '700' }}>OUR MEAT</h3>
                <p>Better quality, better price, better service</p>
                <button type="button" className="btn btn-outline-dark">MORE</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container companies">
            <h3 style={{ fontWeight: 'bold' }}>Companies</h3>
            <div className="row">
              {this.state.companies.map((company) => {
                return (
                  <div className="col-md-3">
                    <img className="img-responsive center-block" src={`${BASE_URL}${company.field_company_logo}`} width="100%/" />
                    <img className="img-responsive center-block" src="images/paragraph_icon@2x.png" style={{ marginTop: '20px' }} width="5%" />
                    <p>{company.field_home_page_intro}</p>
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
                    <a onClick={ () => this.recipeSubmit(recipe.nid)} id="ctl00_Content_List_ctl01_Photo" className="photo" style={{ backgroundImage: `url(${BASE_URL}${recipe.field_recipe_image})` }}>
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
        

      </div>
    )
  }
}

export default Home
