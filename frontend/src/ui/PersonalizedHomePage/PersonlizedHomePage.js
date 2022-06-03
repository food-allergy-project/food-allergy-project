import React from "react";
import {NavBar} from "../shared/components/NavBar";
import {PostRecipeButton} from "./PostRecipeButton";
import {Col, Container, Row} from "react-bootstrap";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";

export const PersonlizedHomePage = () => {
    return(
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={{ span: 4, offset: 4 }}>{<PostRecipeButton/>}</Col>
                </Row>
            </Container>
            <PersonalizedInfo/>
            <RecipeCategories/>
            <SuggestedRecipes/>
        </>
    )
}