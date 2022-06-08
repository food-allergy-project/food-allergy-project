import React from "react";
import {Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import GitHubIcon from '../imgs/GitHubIcon.png'
import LinkInLogo from '../imgs/LInkedInIcon.png'
import "../../Footer.css"
import FoodieLogo from "../imgs/1.png";




export function Footer() {
    return (
        <>
            <div className="container-fluid text-center text-md-left bg p-3 ">
                <div className="row">
                    <div className="col-md-5 mt-md-0 mt-3 p-3 creators">
                        <Figure>
                            <FigureImage
                                src= {FoodieLogo}
                                alt="Allergic Foodies Logo"
                                width={500}
                                height={100}
                            />
                        </Figure>
                        <h3>Allergic Foodies Creators </h3>

                        <p>June 2022 </p>
                    </div>
                    <div className= "col-md-3 mb-md-0 mb-3 p-4">
                        <ul className="list-unstyled footer">
                            <li>
                            <Figure>
                                <FigureImage
                                    className='LinkedInIcon'
                                    width='100%'
                                    src={LinkInLogo}
                                    alt=" LinkedIn"
                                />
                            </Figure>
                            </li>
                            <li><a href="https://www.linkedin.com/in/sierra-moya/">Sierra Moya</a></li>
                            <li><a href="https://www.linkedin.com/in/thanthip-siriwet-orbesen/">Fawn Orbesen</a></li>
                            <li><a href="https://www.linkedin.com/in/patiphan-orbesen-923631235/">Pat Orbesen</a></li>
                            <li><a href="https://www.linkedin.com/in/ron-schneider-671961234/">Ron Schneider</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3 p-4">
                        <Figure>
                            <FigureImage
                                className='GitHubIcon'
                                width='100%'
                                src={GitHubIcon}
                                alt="GithubIcon"
                            />
                        </Figure>
                        <ul className="list-unstyled footer">
                            <li><a href="https://github.com/sierramoya">Sierra Moya</a></li>
                            <li><a href="https://github.com/thanthip-work">Fawn Orbesen</a></li>
                            <li><a href="https://github.com/Ps-Orbesen">Pat Orbesen</a></li>
                            <li><a href="https://github.com/rschneider9">Ron Schneider</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}