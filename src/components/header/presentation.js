import React, { Component } from 'react';

export default class Presentation extends Component {

    render() {
        return (
            <div className="textLeft">

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
                                Cette formation s'est déroulée en 1 an et je réalise actuellement mon stage de fin d'études. <br />
                                Je suis tout particulièrement intéressée par React/Redux, bibliothèques dans lesquelles je souhaite me spécialiser.
                            </p><br />
                        </div>

                        <div className="mb-4">
                            <img className="img-fluid" src={require("./competences.png")} max-width="100%" height="100%" alt="competences" /><br />
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