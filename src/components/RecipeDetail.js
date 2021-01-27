import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { BASE_URL } from "../app.config";

export class RecipeDetail extends Component {


    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            recipes: []

        }
    }

    componentDidMount() {

        axios.get(`${BASE_URL}/rest/v1/recipe/${this.state.id}`)
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
                            <div id="ctl00_Content_HeroImage" className="wide-image" style={{ backgroundImage: `url(${BASE_URL}${recipe.field_main_image})` }}>
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

            </div>
        )
    }
}

export default RecipeDetail
