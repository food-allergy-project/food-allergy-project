import React, {useState} from "react";
import {Button, Card, Col} from "react-bootstrap";
import "./QuizPage.css"


export function QuizButtonCards(props) {
    const {allergy, insert, remove, index, values, unshift} = props
const [clicked, setClicked] = useState(false)
        // const quizallergies = [
    //     {
    //         id: 1,
    //         name: "Wheat",
    //         img: "https://www.foodbusinessnews.net/ext/resources/2021/2/OrganicWheat_Lead.jpg?height=635&t=1613050685&width=1200"
    //     },
    //     {
    //         id: 2,
    //         name: "Eggs",
    //         img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
    //     },
    //     {
    //         id: 3,
    //         name: "Fish",
    //         img: "https://cdn.shopify.com/s/files/1/1709/1113/articles/May22_FishAllergy_1800x1000_V1_1800x.jpg?v=1651775749"
    //
    //     },
    //     {
    //         id: 4,
    //         name: "Shellfish",
    //         img: "https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2021/05/04/call-to-rewild-a-third-of-uk-waters-presents-opportunities-for-shellfish-sector/12417807-1-eng-GB/Call-to-rewild-a-third-of-UK-waters-presents-opportunities-for-shellfish-sector.jpg"
    //     },
    //     {
    //         id: 5,
    //         name: "Tree-nuts",
    //         img: "https://cdn.shopify.com/s/files/1/2531/6758/articles/tree_nuts_3_1024x1024.jpg?v=1611863316"
    //     }, {
    //         id: 5,
    //         name: "Peanuts",
    //         img: "https://georgiagrown.com/wp-content/uploads/2019/10/featured_fruitsveg-peanuts.jpg"
    //     },
    //     {
    //         id: 7,
    //         name: "Milk",
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYF62M2n65-KJ2PkR5C0L_cLH5L9EPStGAQ&usqp=CAU"
    //     }, {
    //         id: 8,
    //         name: "Soybeans",
    //         img: "https://www.verywellfit.com/thmb/HgSWFNOiTtTLfb6ntxMPuDifbsA=/2121x1414/filters:fill(FFDB5D,1)/GettyImages-942696784-a28fe24b20cf4b34b7a3e42b960e4e08.jpeg"
    //     },
    // ]
    return (
        <>

            <Col key={allergy.allergyId}
                 onClick={()=>{
                     console.log(allergy.allergyId)
                     if (clicked === false) {
                         setClicked(true)
                         unshift(allergy.allergyId)
                     } else {
                         const currentIndex = values.allergies.findIndex(value => value === allergy.allergyId)
                         console.log(remove(currentIndex))
                         setClicked(false)
                     }



                 }}

                 className={`justify-content-center align-content-center`}>

                <Card id={`friends.${index}`} bg='light' text='success' className={`quizButtonCardSize mt-5 ${clicked ? 'bg-dark' : null}`}>
                    <Card.Img variant="top" className="quizButtonCardImg"
                              src={
                                  allergy.allergyImage
                              }/>
                    <Card.Body>
                        <Card.Title className="quizButtonCardTitle">{
                            allergy.allergyName
                        }</Card.Title>
                    </Card.Body>

                </Card>
            </Col>
        </>
    )
}




