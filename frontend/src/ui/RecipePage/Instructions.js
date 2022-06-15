import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export function Instructions(props) {
    {
        const recipe = {props}
        return (
            <>
                {
                    recipe.map((recipe) => {
                        return (
                            <Container>
                                <Row>
                                    <Col>
                                        <p>
                                            {recipe.step}
                                        </p>
                                    </Col>

                                </Row>
                            </Container>
                        )
                    })
                }
            </>
        )
    }
}


// export function Instructions(props) {
//     const {recipe} = props
//     return(
//         <>
//             {
//                     <Container>
//                         <Row>
//                             <Col>
//                             <ol>
//                                 <li>
//                                     {recipe.recipeInstructions}
//                                 </li>
//                             </ol>
//                                 </Col>
//                         </Row>
//                     </Container>
//
//                 }
//
//         </>
//     )
// }