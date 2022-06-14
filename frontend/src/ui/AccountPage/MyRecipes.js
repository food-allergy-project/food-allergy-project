import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import {MyRecipesCards} from "./MyRecipesCards";



export const MyRecipes = (props) => {
    const {myPostRecipes} = props
    console.log(myPostRecipes)

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
                        {myPostRecipes.map(myRecipesSection => <MyRecipesCards myRecipesSection = {myRecipesSection} />)}
                    </Row>
                </Container>
            </div>
        </>
    )
}