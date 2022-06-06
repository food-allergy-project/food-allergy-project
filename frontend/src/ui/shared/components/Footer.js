import React from "react";




export function Footer() {
    return (
        <>
            <div className="container-fluid text-center text-md-left bg-secondary p-3">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 p-3">
                        <h5 className="text-uppercase">Allergic Foodie</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Creators</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com/in/sierra-moya/">Sierra Moya</a></li>
                            <li><a href="https://www.linkedin.com/in/thanthip-siriwet-orbesen/">Fawn Orbesen</a></li>
                            <li><a href="https://www.linkedin.com/in/patiphan-orbesen-923631235/">Pat Orbesen</a></li>
                            <li><a href="https://www.linkedin.com/in/ron-schneider-671961234/">Ron Schneider</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Github</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}