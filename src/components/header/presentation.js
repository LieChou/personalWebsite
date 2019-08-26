import React, { Component } from 'react';

export default class Presentation extends Component {

    render() {
        return (
            <div>

                <div className="p-5 d-flex flex-row flex-wrap">
                    <div>
                        <img src={require("./profilePic.png")} style={{ borderRadius: 50 }} width="100" height="100" alt="profile" /><br />
                    </div>

                    <div className="ml-5">
                        <h1>Aurélie Tudare</h1><br />
                        <h1>Développeuse Frontend React</h1><br />
                    </div>

                    <div className="mb-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. </p>
                    </div>

                    <div >
                        <img src={require("./competences.png")} width="auto" height="auto" alt="competences" /><br />
                    </div>

                    <div >
                        <a className="p-2" href="https://github.com/LieChou"><img src={require("./github.svg")} width="50" height="50" alt="github icon" /></a>
                        <a className="p-2" href="https://www.linkedin.com/in/aurélie-t-32367011"><img src={require("./linkedin.svg")} width="50" height="50" alt="linkedin icon" /></a>
                    </div>
                </div>

            </div>
        )
    }
}