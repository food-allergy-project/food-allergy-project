import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setAllRecipes} from "../../store/recipes";
import {httpConfig} from "../../utils/httpConfig";

export const RecipeCard = ({recipe}) => {

    const dispatch = useDispatch()

    const clickLike = () => {
        httpConfig.post("/apis/favorite/", {favoritedRecipeRecipeId: recipe.recipeId})
            .then(reply => {
                    if(reply.status === 200) {
                        console.log(reply)
                        dispatch(setAllRecipes())
                    }
                    console.log(reply)
                }
            );
    }
    return (
        <div>
            <Row>
                <Col xs={1}>
                    <Image src={recipe.recipeImage} fluid/>
                </Col>
                <Col>
                    <strong>{recipe.profileFullName}</strong> {new Date(recipe.recipeDate).toDateString()}
                    <p>{recipe.recipeContent}</p>
                    <button onClick={clickLike}>{recipe.favoriteCount}<span role="img" aria-label="heart emoji">❤️</span></button>
                    {/*{logged in profile id === recipe.recipeProfileId ? <button
                     onclick={deleteRecipe}>Delete</button> :
                     ""}*/}
                </Col>
            </Row>
        </div>

    )
};