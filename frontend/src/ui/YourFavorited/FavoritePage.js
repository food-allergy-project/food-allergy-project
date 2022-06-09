import React, {useEffect, useState} from 'react'
import {Container, Row, Tab, Tabs} from 'react-bootstrap'
import {FavoriteRecipeCardsBreakfast} from "./YourFavoriteCardsBreakfast";
import {FavoriteRecipeCardsDinner} from "./YourFavoriteCardsDinner";
import {FavoriteRecipeCardLunch} from "./YourFavoriteCard";
import {FavoriteRecipeCardLunchDessert} from "./YourFavoriteCardsDessert";
import {FavoriteRecipeCardsSnack} from "./YourFavoriteCardsSnack";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth";
import favoritedRecipes, {fetchFavoritedRecipesByProfileId} from "../../store/favoritedRecipes";


function Sonnet() {
    return null;
}

export function FavoritePage ({recipes}) {
    const [key, setKey] = useState('');

    const auth = useSelector(state => state.auth);
    const recipeCategories = useSelector(({favoritedRecipes}) => {
        if (favoritedRecipes === null) {
         return  []
        }

        //use reduce on favoritedrecipes make sure to set initial value to an object with the fields breakfast
        // lunch, dinner, dessert, and snack. making sure that each field is an empty array.
        //Using recipe category determen what field to push the current value into
        //return result from reduce


    })
    console.log(auth)
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
        dispatch(fetchFavoritedRecipesByProfileId())

    };
    const inputs = [];
    useEffect(effects, inputs);


/*



    for (const item of items) {
        if (item.name === 'breakfast') push acc.{}.push{
            return item
        }
    }

*/




    //Loop over favorited-recipes from redux's store


    //In loop, check recipe.category and if recipe category matches recipe from store add to that list.
    //breakfastrecipes.push(recipe)
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
                           {/* <FavoriteRecipeCard recipes={recipe}/>*/}
                            <Sonnet/>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Lunch" title="Lunch">
                    <Container>
                        <Row>
                            <FavoriteRecipeCardLunch/>
                            <Sonnet/>
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="Dinner" title="Dinner">
                    <Container>
                        <Row>
                            <FavoriteRecipeCardsDinner/>
                            <Sonnet/>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Dessert" title="Dessert">
                    <Container>
                        <Row>
                            <FavoriteRecipeCardLunchDessert/>
                            <Sonnet/>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Snacks" title="Snacks">
                    <Container>
                        <Row>
                            <FavoriteRecipeCardsSnack/>
                            <Sonnet/>
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </>
    )
}
