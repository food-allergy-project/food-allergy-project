import React, {useEffect, useState} from 'react'
import {Container, Row, Tab, Tabs} from 'react-bootstrap'
import {FavoriteCards} from "./FavoriteCards";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoritedRecipesByProfileId} from "../../store/favoritedRecipes";
import auth, {fetchAuth} from "../../store/auth";
import {fetchAllRecipes} from "../../store/recipes";


function Sonnet() {
    return null;
}


export function FavoritePage() {
    const [key, setKey] = useState('');

    const auth = useSelector(state => state.auth);

    const recipeCategories = useSelector(({favoritedRecipes}) => {
        const initialValue = {
            breakfastRecipes: [],
            lunchRecipes: [],
            dinnerRecipes: [],
            dessertRecipes: [],
            snackRecipes: []
        }
        if (favoritedRecipes === null) {
            return initialValue

        }

        for (let recipe of favoritedRecipes) {

            if (recipe.recipeCategory === "breakfast") {
                initialValue.breakfastRecipes.push(recipe)
            } else if
            (recipe.recipeCategory === "lunch") {
                initialValue.lunchRecipes.push(recipe)
            } else if
            (recipe.recipeCategory === "dinner") {
                initialValue.dinnerRecipes.push(recipe)
            } else if
            (recipe.recipeCategory === "dessert") {
                initialValue.dessertRecipes.push(recipe)
            } else if
            (recipe.recipeCategory === "snack") {
                initialValue.snackRecipes.push(recipe)
            }
        }

        return initialValue
    })


console.log(recipeCategories.dessertRecipes)
console.log(auth)
const dispatch = useDispatch()
const effects = () => {
    dispatch(fetchAuth());
    dispatch(fetchFavoritedRecipesByProfileId())
    dispatch(fetchAllRecipes())
};
const inputs = [];
useEffect(effects, inputs);
    React.useEffect(effects, [dispatch])


return (
    <>
        <Container className='m-5'>
            <h1 className='text-md-start'>Your Favorites</h1>
        </Container>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="m-5 text-center"
        >
            <Tab eventKey="Breakfast" title="Breakfast">
                <Container>
                    <Row>
                         <FavoriteCards recipes={recipeCategories.breakfastRecipes}/>
                        <Sonnet/>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Lunch" title="Lunch">
                <Container>
                    <Row>
                        <FavoriteCards recipes={recipeCategories.lunchRecipes}/>
                        <Sonnet/>
                    </Row>
                </Container>

            </Tab>
            <Tab eventKey="Dinner" title="Dinner">
                <Container>
                    <Row>
                        <FavoriteCards recipes={recipeCategories.dinnerRecipes}/>
                        <Sonnet/>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Dessert" title="Dessert">
                <Container>
                    <Row>
                        <FavoriteCards recipes={recipeCategories.dessertRecipes}/>
                        <Sonnet/>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Snacks" title="Snacks">
                <Container>
                    <Row>
                        <FavoriteCards recipes={recipeCategories.snackRecipes}/>
                        <Sonnet/>
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    </>
)
}
