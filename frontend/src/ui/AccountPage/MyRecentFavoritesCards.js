import React from "react";
import '../AccountPage/AccountPage.css'
import {Card, Col} from "react-bootstrap";

export function MyRecentFavoritesCards () {
    const myRecentFavorites = [
        {
            id: 4,
            name: "World's Best Gluten & Dairy Free Hamburger",
            img: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            name: "Pork-Belly Gluten-Free Banh Mi",
            img: "https://images.pexels.com/photos/1893569/pexels-photo-1893569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id: 6,
            name: "Gluten-Free & Dairy-Free Pizza",
            img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 7,
            name: "Superfood Dairy-Free Smoothie",
            img: "https://images.pexels.com/photos/892612/pexels-photo-892612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id: 8,
            name: "Asian Style Kabobs with Gluten-Free Sauce",
            img: "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
    return (
        <>
            {
                myRecentFavorites.map((myRecentFavorites) => {
                    return (
                        <Col>
                            <Card bg='light' text='dark' className='myRecipeCardSize mt-4'>
                                <Card.Img variant="top" className='myRecipeCardImg'
                                          src={
                                            myRecentFavorites.img
                                          }
                                />
                                <Card.Body>
                                    <Card.Title className='myRecipeCardTitle'>
                                        {myRecentFavorites.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    )
}