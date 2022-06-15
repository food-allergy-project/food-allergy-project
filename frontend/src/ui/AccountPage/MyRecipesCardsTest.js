import React from "react";
import {Card, Col} from "react-bootstrap";
import '../AccountPage/AccountPage.css'

export function MyRecipesCards () {
    // const {recipe} = props
    const myRecipes = [
        {
            id: 1,
            name: "Gluten-Free Loaded Avocado Toast",
            img: "https://images.pexels.com/photos/704571/pexels-photo-704571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "Superfood Banana Oatmeal",
            img: "https://images.pexels.com/photos/949069/pexels-photo-949069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id: 3,
            name: "Gluten & Dairy Free Fudge Brownie",
            img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "World's Best Gluten & Dairy Free Hamburger",
            img: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
    return (
        <>
            {
                myRecipes.map((myRecipe) => {
                    return (
                        <Col className='justify-content-center align-content-center'>
                            <Card bg='light' text='dark' className='myRecipeCardSize mt-4'>
                                <Card.Img variant="top" className='myRecipeCardImg'
                                          src={
                                              myRecipe.img
                                          }
                                />
                                <Card.Body>
                                    <Card.Title className='myRecipeCardTitle'>
                                        {myRecipe.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>

                        </Col>
                    )
                })
            }
            {/*<Col className='justify-content-center align-content-center'>*/}
            {/*    <Card bg='light' text='dark' className='myRecipeCardSize mt-4'>*/}
            {/*        <Card.Img variant="top" className='myRecipeCardImg'*/}
            {/*                  src={*/}
            {/*                      recipe.recipeImage*/}
            {/*                  }*/}
            {/*        />*/}
            {/*        <Card.Body>*/}
            {/*            <Card.Title className='myRecipeCardTitle'>*/}
            {/*                {recipe.recipeTitle}*/}
            {/*            </Card.Title>*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}

            {/*</Col>*/}

        </>
    )
}