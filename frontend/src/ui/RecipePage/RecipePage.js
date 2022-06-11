import React, {useEffect} from 'react'
import {Container, Row, Col, Button, Figure} from 'react-bootstrap'
// import {Ingredients} from "./Ingredients";
// import {Instructions} from "./Instructions";
import {fetchRecipeByRecipeId} from "../../store/recipes";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {object} from "yup";
import {Ingredients} from "./Ingredients";
import {Instructions} from "./Instructions";
import FigureImage from "react-bootstrap/FigureImage";


export function RecipePage() {

    //using useparam get access to the recipeId in the url


    let { recipeId } = useParams();

    //In use selector call to the find prototype to grab the recipe by recipeId


    const recipe = useSelector(state => {

        return state.recipes
            ? state.recipes.find(recipe => recipe.recipeId === recipeId)
            : []
});
console.log(recipe)
    function sideEffects() {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchRecipeByRecipeId(recipeId))

    }
    const dispatch = useDispatch();
    useEffect(sideEffects, []);



    return (
        <>

            <Container>
                {recipe && <h1 className="text-center my-5">{recipe.recipeTitle}</h1>}
                <Button variant="secondary" className="m-3 my-4">Back to Recipes</Button>
            </Container>
            <Container>
                <Row>
                    <Col className="alignment-center col-8 p-4">
                        <Figure>
                            { recipe && <FigureImage  src= {recipe.recipeImage} />}
                        </Figure>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="ms-auto">
                        <Button variant="success" className="my-2">Favorite</Button>
                        <Button variant="success" className="m-2">Comment</Button>
                    </Col>
                </Row>
            </Container>


            <Container className="p-5">
                <Row>
                    <Col>
                        <h3>Ingredients</h3>
                        <ol>
                            <li>
                            {recipe && <Ingredients recipe={recipe}/>}
                            </li>
                        </ol>
                    </Col>
                    <Col>
                        <h3>Instructions</h3>
                        <p>
                            {recipe && <Instructions recipe={recipe}/>}

                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}