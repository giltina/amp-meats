import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export class RecipeDetail extends Component {

    site_url = "http://ampmeats.zimbabwewebdesign.com"

    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            recipes: []

        }
    }

    componentDidMount() {

        axios.get(`http://ampmeats.zimbabwewebdesign.com/rest/v1/recipe/${this.state.id}`)
            .then(response => {
                this.setState({ recipes: response.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>

                {this.state.recipes.map((recipe) => {
                    return (
                        <div>
                            <div id="ctl00_Content_HeroImage" className="wide-image" style={{ backgroundImage: `url(${this.site_url}${recipe.field_main_image})` }}>
                                <p>{recipe.title}
                                    <small>{recipe.field_sub_heading}</small></p>
                            </div>
                            <div className="recipe-detail container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 instructions">
                                        <h3>Method</h3>
                                        {ReactHtmlParser(recipe.field_method)}
                                    </div>
                                    <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="ingredients">
                                            <h3>Ingredients</h3>
                                            {ReactHtmlParser(recipe.field_ingredients)}
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <a href="/recipes" className="btn btn-outline-dark">Browse Recipes</a>
                                </p>
                            </div>
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

export default RecipeDetail
