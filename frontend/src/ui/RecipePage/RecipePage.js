import React, {useEffect} from 'react'
import {Container, Row, Col, Button, Figure} from 'react-bootstrap'
import {fetchRecipeByRecipeId} from "../../store/recipes";
import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import {Ingredients} from "./Ingredients";
import {Instructions} from "./Instructions";
import FigureImage from "react-bootstrap/FigureImage";
import {httpConfig} from "../../utils/httpConfig";
import { useNavigate} from "react-router-dom"



export function RecipePage() {
    let { recipeId } = useParams();
    const recipe = useSelector(state => {
        return state.recipes
            ? state.recipes.find(recipe => recipe.recipeId === recipeId)
            : []
});
    let navigate = useNavigate();
    function sideEffects() {
        dispatch(fetchRecipeByRecipeId(recipeId))

    }
    const dispatch = useDispatch();
    useEffect(sideEffects, []);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function AddRecipeToFavorites() {

        httpConfig.post("/apis/favoritedrecipes/", {favoritedRecipeRecipeId: recipe.recipeId})
            .then(reply => {
                    if(reply.status === 200) {
                        console.log(recipe)
                    }
                }
            );
    }

    return (
        <>

            <Container>
                {recipe && <h1 className="text-center my-5">{recipe.recipeTitle}</h1>}
                <Button variant="secondary" onClick={() => navigate(-1)}   className="m-3 my-4">Back to Recipes</Button>
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
                        <Button onClick={AddRecipeToFavorites}> Add to favorite</Button>
                    </Col>
                </Row>
            </Container>


            <Container className="p-5">
                <Row>
                    <Col>
                        <h3>Ingredients</h3>
                        <ol>
                            <li>

                                {recipe && <Ingredients recipe = {recipe.recipeIngredients}/>}
                            </li>
                        </ol>
                    </Col>
                    <Col>
                        <h3>Instructions</h3>
                        <p>

                            {recipe && <Instructions recipe = {recipe.recipeInstructions}/>}

                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}