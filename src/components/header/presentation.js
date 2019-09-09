import React, { Component } from 'react';

export default class Presentation extends Component {

    render() {
        return (
            <div style={{ height: "100vh" }}>

                <div className="p-3 d-flex flex-row flex-wrap">
                    <div className="m-3 text-center">
                        <img src={require("./profilePic.png")} style={{ borderRadius: 50 }} width="100" height="100" alt="profile" /><br />
                    </div>

                    <div className="mb-2 mt-3">
                        <h1>Développeuse Frontend React</h1><br />
                    </div>

                    <div className="d-flex flex-row flex-wrap">
                        <div className="pb-3 text-justify">
                            <p>
                                Je termine actuellement la formation OpenClassrooms de développeuse d'application frontend, reconnue au titre RNCP - équivalence Bac +3/4.<br />
                                J'ai réalisé cette formation en 1 an et je suis actuellement à la recherche de mon stage de fin d'études.<br />
                                Je suis tout particulièrement intéressée par React qui est une techno dans laquelle je souhaite me spécialiser.<br /></p>
                        </div>

                        <div className="mb-5">
                            <img className="img-fluid" src={require("./competences.png")} width="auto" height="auto" alt="competences" /><br />
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <a className="p-2" href="https://github.com/LieChou" target="_blank" rel="noopener noreferrer"><img src={require("./github.svg")} width="50" height="50" alt="github icon" /></a>
                        <a className="p-2" href="https://www.linkedin.com/in/aurélie-t-32367011" target="_blank" rel="noopener noreferrer"><img src={require("./linkedin.svg")} width="50" height="50" alt="linkedin icon" /></a>
                    </div>
                </div>

            </div>
        )
    }
}