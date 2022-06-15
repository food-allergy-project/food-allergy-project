import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import {MyRecipesCards} from "./MyRecipesCards";
import {MyRecentFavoritesCards} from "./MyRecentFavoritesCards";



export const MyRecipes = (props) => {

    const {recipes} = props
    console.log(recipes)

    return(
        <>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <h5 className='text-start pt-3'> My Recipes: </h5>

                        </Col>
                    </Row>
                    <Row className='py-5 justify-content-center'>
                        {recipes.map(myRecipesSection => <MyRecipesCards recipe = {myRecipesSection} />)}
                    </Row>
                </Container>
            </div>
        </>
    )
}