import React, { Component } from 'react'
import axios from 'axios';

export class Recipes extends Component {
    site_url = "http://ampmeats.zimbabwewebdesign.com"

    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {

        axios.all([
            axios.get('/rest/v1/recipes'),
        ])
            .then(response => {
                this.setState({ recipes: response[0].data })
            })
            .catch(error => console.log(error))
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
                                        <a id="ctl00_Content_List_ctl01_Photo" className="photo" href="#" style={{ backgroundImage: `url(${this.site_url}${recipe.field_recipe_image})` }}>
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
