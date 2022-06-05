import React, {useState} from 'react'
import {Container, Row, Tab, Tabs} from 'react-bootstrap'
import {FavoriteRecipeCardsBreakfast} from "./YourFavoriteCardsBreakfast";
import {FavoriteRecipeCardsDinner} from "./YourFavoriteCardsDinner";
import {FavoriteRecipeCardLunch} from "./YourFavoriteCardLunch";
import {FavoriteRecipeCardLunchDessert} from "./YourFavoriteCardsDessert";
import {FavoriteRecipeCardsSnack} from "./YourFavoriteCardsSnack";

function Sonnet() {
    return null;
}

export function FavoritePage () {
    const [key, setKey] = useState('home');
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
                <FavoriteRecipeCardsBreakfast/>
                <Sonnet />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Lunch" title="Lunch">
                <Container>
                    <Row>
                        <FavoriteRecipeCardLunch/>
                        <Sonnet />
                    </Row>
                </Container>

            </Tab>
            <Tab eventKey="Dinner" title="Dinner">
                <Container>
                    <Row>
                        <FavoriteRecipeCardsDinner/>
                        <Sonnet />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Dessert" title="Dessert">
                <Container>
                    <Row>
                        <FavoriteRecipeCardLunchDessert/>
                        <Sonnet />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Snacks" title="Snacks">
                <Container>
                    <Row>
                        <FavoriteRecipeCardsSnack/>
                        <Sonnet />
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    </>
  )
}