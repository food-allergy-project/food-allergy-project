import React, {useState} from 'react'
import {Container, Row, Tab, Tabs} from 'react-bootstrap'
import {FavoriteRecipeCards} from "./YourFavoriteCards";

function Sonnet() {
    return null;
}

export function FavoritePage () {
    const [key, setKey] = useState('home');
  return (
    <>
      <Container className='text-center m-5'>
        <h1>Your Favorites</h1>
      </Container>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-5"
        >
            <Tab eventKey="Breakfast" title="Breakfast">
                <Container>
                    <Row>
                <FavoriteRecipeCards/>
                <Sonnet />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Lunch" title="Lunch">
                <Container>
                    <Row>
                        <FavoriteRecipeCards/>
                        <Sonnet />
                    </Row>
                </Container>

            </Tab>
            <Tab eventKey="Dinner" title="Dinner">
                <Container>
                    <Row>
                        <FavoriteRecipeCards/>
                        <Sonnet />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Dessert" title="Dessert">
                <Container>
                    <Row>
                        <FavoriteRecipeCards/>
                        <Sonnet />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Snacks" title="Snacks">
                <Container>
                    <Row>
                        <FavoriteRecipeCards/>
                        <Sonnet />
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    </>
  )
}