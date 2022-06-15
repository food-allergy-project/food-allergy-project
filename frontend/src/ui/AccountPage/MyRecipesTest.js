import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import {MyRecipesCards} from "./MyRecipesCards";
import {MyRecentFavoritesCards} from "./MyRecentFavoritesCards";



export const MyRecipes = (props) => {
    const {myFavoritedRecipes} = props
    console.log(myFavoritedRecipes)
    // const {recipes} = props
    // console.log(recipes)

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
                        <MyRecipesCards />
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h5 className='text-start pt-3'> Favorites: </h5>

                        </Col>
                    </Row>
                    <Row className='py-5 justify-content-center'>
                        {myFavoritedRecipes.map(myRecentFavorites => <MyRecentFavoritesCards myRecentFavorites = {myRecentFavorites} />)}
                    </Row>
                </Container>
            </div>
            {/*<div>*/}
            {/*    <Container>*/}
            {/*        <Row>*/}
            {/*            <Col>*/}
            {/*                <h5 className='text-start pt-3'> My Recipes: </h5>*/}

            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*        <Row className='py-5 justify-content-center'>*/}
            {/*            {recipes.map(myRecipesSection => <MyRecipesCards myRecipesSection = {myRecipesSection} />)}*/}
            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</div>*/}
        </>
    )
}