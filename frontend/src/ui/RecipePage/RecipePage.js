import React, {useEffect} from 'react'
import { Container, Row, Col, Figure, Button } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import {fetchAllRecipesAndProfiles} from "../../store/profilePostedRecipes";
import {useDispatch, useSelector} from "react-redux";



export const RecipePage = () => {
  const dispatch = useDispatch()

  useEffect(
      () => {
        dispatch(fetchAllRecipesAndProfiles())
      },
      []
  )

  const recipes = useSelector(state => (state.recipes ? state.recipes : []))


  return (
    <>
      <Container>
        <h1 className="text-center my-5">Gluten Free Pizza</h1>
        <Button variant="secondary" className="m-3 my-4">Back to Recipes</Button>
      </Container>
      <Container>
        <Row>
          <Col className="alignment-center col-8 p-4">
            {/*<Figure>*/}
            {/*  <FigureImage*/}
            {/*      {*/}

            {/*      }*/}
            {/*  />*/}
            {/*</Figure>*/}
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
              <li> 1 pound ground beef (93% lean or leaner)</li>
              <li> 1/4 cup finely chopped red onion</li>
              <li> 4 tablespoons barbecue sauce, divided</li>
              <li> 1 pound ground beef (93% lean or leaner)</li>
              <li> 4 whole wheat hamburger buns or pretzel rolls, split, toasted</li>
              <li>Lettuce leaves, tomato slices and red onion slices (optional)</li>
            </ol>
          </Col>
          <Col>
            <h3>Instructions</h3>
            <p>
              1. Combine ground beef, chopped onion and 2 tablespoons barbecue sauce in a medium bowl, mixing lightly
              but thoroughly. Shape into four 1/2-inch thick patties.
              2. Place patties on grid over medium, ash-covered coals. Grill, covered, 8 to 10 minutes (over medium heat
              on preheated gas grill, 7 to 9 minutes) until instant-read thermometer inserted horizontally into center
              registers 160 °F, turning occasionally. About 1 minute before burgers are done, brush with remaining 2
              tablespoons of barbecue sauce and top with cheese. Tip: Cooking times are for fresh or thoroughly thawed
              ground beef. Ground beef should be cooked to an internal temperature of 160 °F. Color is not a reliable
              indicator of ground beef doneness.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}