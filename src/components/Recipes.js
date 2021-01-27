import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from "../app.config";

export class Recipes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {

        axios.all([
            axios.get(`${BASE_URL}/rest/v1/recipes`),
        ])
            .then(response => {
                this.setState({ recipes: response[0].data })
            })
            .catch(error => console.log(error))
    }

    handleSubmit = (id) => {
        this.props.history.push(`/recipe/${id}`)
    }



    render() {
        return (
            <div>
                <section id="page-title">
                    <div className="container about-column">
                        <h1>Recipes</h1>
                        <p>Mouth watering recipes to give you inspiration</p>
                    </div>
                </section>
                <section>
                    <div className="container recipe-container">
                        <div className="recipe-list row ">
                            {this.state.recipes.map((recipe) => {
                                return (

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <a onClick={ () => this.handleSubmit(recipe.nid)} id="ctl00_Content_List_ctl01_Photo" className="photo" style={{ backgroundImage: `url(${BASE_URL}${recipe.field_recipe_image})` }}>
                                            <span>{recipe.title}</span>
                                        </a>
                                    </div>


                                )
                            })}
                        </div>



                    </div>
                </section>
          
            </div>
        )
    }
}

export default Recipes
