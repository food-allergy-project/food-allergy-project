import React from "react";
import {Col, Container, Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import avatarImage2 from "../shared/imgs/greenAvatar.png"
import {EditProfile} from "./EditProfile";


export const UserProfileSection = (props) => {
    const {profile} = props
    console.log(profile)

    return (
        <>
            <div className='p-3 my-4 ourBackground mt-5'>
                <Container className='text-center'>
                    <Col>
                        <Figure>
                            <FigureImage roundedCircle className='mx-5'
                                         src={avatarImage2}
                                         alt="user avatar"
                                         width={120}
                                         height={120}
                            />
                        </Figure>
                        <div>
                            {profile &&<p>{profile.profileFullName}</p>}
                            <p> allergies</p>
                        </div>
                        <EditProfile/>
                    </Col>
                </Container>
            </div>

        </>
    )
}