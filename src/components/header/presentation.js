import React, { Component } from 'react';

export default class Presentation extends Component {

    render() {
        return (
            <div >

                <div className="p-3 d-flex flex-row flex-wrap">
                    <div className="m-3 text-center">
                        <img src={require("./profilePic.png")} style={{ borderRadius: 50 }} width="100" height="100" alt="profile" /><br />
                    </div>

                    <div className="my-3 mt-3">
                        <h1>Développeuse Frontend React</h1><br />
                    </div>

                    <div className="d-flex flex-row flex-wrap">
                        <div className="pb-4 text-justify">
                            <p>
                                J'ai décidé de me réorienter après 10 ans dans le recrutement et la chasse de tête de profils informatiques
                                et plus précisément de développeurs. <br />
                                J'ai suivi la formation OpenClassrooms de développeuse d'application frontend, reconnue au titre RNCP - équivalence Bac +3/4.<br />
                                J'ai réalisé cette formation en 1 an et je suis actuellement à la recherche de mon stage de fin d'études.<br />
                                Je suis tout particulièrement intéressée par React et les Entreprises Sociales et Solidaires.<br /></p>
                        </div>

                        <div className="mb-5">
                            <img className="img-fluid" src={require("./competences.png")} width="auto" height="auto" alt="competences" /><br />
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <a className="p-2" href="https://github.com/LieChou"><img src={require("./github.svg")} width="50" height="50" alt="github icon" /></a>
                        <a className="p-2" href="https://www.linkedin.com/in/aurélie-t-32367011"><img src={require("./linkedin.svg")} width="50" height="50" alt="linkedin icon" /></a>
                    </div>
                </div>

            </div>
        )
    }
}